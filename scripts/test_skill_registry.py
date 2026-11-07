"""Verhaltensprüfungen für Registry, Integrität und lokale Linkgrenzen."""
import hashlib
import json
import tempfile
import unittest
from pathlib import Path
from unittest.mock import patch

import lint_docs
import skill_registry as registry


SKILL = '''---
name: example
description: "Prüft ein konkretes Beispiel mit Umlauten und ß."
metadata:
  version: "1.0.0"
  schema-version: "2"
  usable_in_phases: verification, acceptance
  kind: capability
---

# Beispiel

Nur den beauftragten Prüfbereich verwenden.
'''


class RegistryTests(unittest.TestCase):
    def setUp(self):
        self.temp = tempfile.TemporaryDirectory()
        self.addCleanup(self.temp.cleanup)
        self.root = Path(self.temp.name)
        self.docs = self.root / "docs"
        self.skill = self.docs / "skills/example/SKILL.md"
        self.skill.parent.mkdir(parents=True)
        self.skill.write_text(SKILL, encoding="utf-8")
        (self.root / "scripts").mkdir()
        (self.root / "scripts/legacy_paths.json").write_text("{}", encoding="utf-8")
        (self.root / "library.json").write_text(json.dumps({
            "schema_version": 1, "repository": "owner/library",
            "pages_base_url": "https://owner.github.io/library/",
        }), encoding="utf-8")
        for module in (registry, lint_docs):
            for name, value in (("ROOT", self.root), ("DOCS", self.docs)):
                replacement = patch.object(module, name, value)
                replacement.start()
                self.addCleanup(replacement.stop)

    def test_utf8_identity_and_phase_survive_discovery(self):
        record = registry.records()[0]
        self.assertEqual(record["usable_in_phases"], ["verification", "acceptance"])
        self.assertIn("ß", record["description"])
        self.assertEqual(record["path"], "skills/example/SKILL.md")

    def test_duplicate_yaml_key_is_rejected(self):
        self.skill.write_text(SKILL.replace("  usable_in_phases: verification, acceptance", "  usable_in_phases: verification, acceptance\n  usable_in_phases: deployment"), encoding="utf-8")
        with self.assertRaisesRegex(ValueError, "Doppelter YAML-Schlüssel"):
            registry.records()

    def test_yaml_objects_cannot_execute(self):
        with self.assertRaises(registry.yaml.YAMLError):
            registry.load_yaml("value: !!python/object/apply:os.system ['echo unexpected']")

    def test_phase_typo_fails_instead_of_silent_misrouting(self):
        self.skill.write_text(SKILL.replace("usable_in_phases: verification, acceptance", "usable_in_phases: testng"), encoding="utf-8")
        with self.assertRaisesRegex(ValueError, "metadata.usable_in_phases"):
            registry.records()

    def test_top_level_phase_is_rejected(self):
        self.skill.write_text(SKILL.replace("metadata:", "usable_in_phases: verification, acceptance\nmetadata:"), encoding="utf-8")
        with self.assertRaisesRegex(ValueError, "Frontmatter-Felder"):
            registry.records()

    def test_workflow_coverage_is_an_array_and_not_a_capability(self):
        text = SKILL.replace("kind: capability", "kind: workflow").replace("usable_in_phases", "covers_phases")
        self.skill.write_text(text, encoding="utf-8")
        record = registry.records()[0]
        self.assertEqual(record["covers_phases"], ["verification", "acceptance"])
        self.assertNotIn("usable_in_phases", record)
        registry.synchronize(write=True)
        saved = json.loads((self.docs / "registry.json").read_text(encoding="utf-8"))
        self.assertEqual(saved["schema_version"], 2)

    def test_invalid_phase_contracts_are_rejected(self):
        for replacement in ("", "analysis,", "analysis, analysis", "routing", "testng"):
            with self.subTest(replacement=replacement):
                self.skill.write_text(SKILL.replace("verification, acceptance", replacement), encoding="utf-8")
                with self.assertRaises(ValueError):
                    registry.records()
        for extra in ("  phase: analysis", '  covers_phases: "analysis"', '  phases: "analysis"'):
            with self.subTest(extra=extra):
                self.skill.write_text(SKILL.replace("metadata:", "metadata:\n" + extra), encoding="utf-8")
                with self.assertRaisesRegex(ValueError, "widersprüchliche"):
                    registry.records()

    def test_yaml_array_is_not_valid_string_metadata(self):
        self.skill.write_text(SKILL.replace("verification, acceptance", "[verification, acceptance]"), encoding="utf-8")
        with self.assertRaisesRegex(ValueError, "Zeichenfolgen"):
            registry.records()

    def test_non_string_metadata_and_name_mismatch_fail(self):
        for invalid in (SKILL.replace('version: "1.0.0"', 'version: 1'), SKILL.replace("name: example", "name: other")):
            with self.subTest(invalid=invalid):
                self.skill.write_text(invalid, encoding="utf-8")
                with self.assertRaises(ValueError):
                    registry.records()

    def test_check_detects_missing_catalog_without_writing(self):
        self.assertEqual(len(registry.synchronize()), 3)
        self.assertFalse((self.docs / "registry.json").exists())

    def test_resources_change_integrity_and_make_catalog_stale(self):
        asset = self.skill.parent / "assets/reference.md"
        asset.parent.mkdir()
        asset.write_text("Erster Stand\n", encoding="utf-8")
        registry.synchronize(write=True)
        self.assertEqual(registry.synchronize(), [])
        before = (self.docs / "registry.json").read_bytes()
        asset.write_text("Geänderter Stand\n", encoding="utf-8")
        self.assertIn("docs/registry.json", registry.synchronize())
        self.assertEqual((self.docs / "registry.json").read_bytes(), before)

    def test_text_line_endings_are_portable_and_binary_bytes_are_preserved(self):
        before = registry.records()[0]["files"][0]["sha256"]
        self.skill.write_bytes(SKILL.replace("\n", "\r\n").encode("utf-8"))
        binary = self.skill.parent / "image.png"
        raw = b"\x89PNG\r\n\x00binary\xff"
        binary.write_bytes(raw)
        files = {item["path"]: item["sha256"] for item in registry.records()[0]["files"]}
        self.assertEqual(files["skills/example/SKILL.md"], before)
        self.assertEqual(files["skills/example/image.png"], hashlib.sha256(raw).hexdigest())

    def test_switching_fork_does_not_rewrite_skills(self):
        registry.synchronize(write=True)
        before = self.skill.read_bytes()
        config = json.loads((self.root / "library.json").read_text(encoding="utf-8"))
        config["pages_base_url"] = "https://next.github.io/rules/"
        (self.root / "library.json").write_text(json.dumps(config), encoding="utf-8")
        registry.synchronize(write=True)
        saved = json.loads((self.docs / "registry.json").read_text(encoding="utf-8"))
        self.assertEqual(saved["base_url"], config["pages_base_url"])
        self.assertEqual(self.skill.read_bytes(), before)

    def test_local_links_cannot_escape_publishing_root(self):
        with self.assertRaisesRegex(ValueError, "Publishing-Wurzel"):
            lint_docs.link_target(self.skill, "../../../../secret.md", "https://owner.github.io/library/")
        resolved, fragment = lint_docs.link_target(self.skill, "./SKILL.md#beispiel", "https://owner.github.io/library/")
        self.assertEqual(resolved, self.skill.resolve())
        self.assertEqual(fragment, "beispiel")

    def test_anchors_ignore_code_and_frontmatter(self):
        text = SKILL + "\n```md\n# Nur Beispielcode\n```\n\n## Überschrift\n## Überschrift\n"
        self.assertEqual(lint_docs.anchors(text), {"beispiel", "überschrift", "überschrift-1"})

    def test_skill_directory_symlink_cannot_publish_external_files(self):
        with tempfile.TemporaryDirectory() as outside:
            external = Path(outside)
            (external / "SKILL.md").write_text(SKILL.replace("name: example", "name: escape"), encoding="utf-8")
            link = self.docs / "skills/escape"
            try:
                link.symlink_to(external, target_is_directory=True)
            except OSError as error:
                self.skipTest(f"Symlinks nicht verfügbar: {error}")
            with self.assertRaisesRegex(ValueError, "Publishing-Wurzel|Symlink"):
                registry.records()

    def test_explicit_external_entry_is_rejected_before_reading(self):
        with tempfile.TemporaryDirectory() as outside:
            absent = Path(outside) / "SKILL.md"
            with self.assertRaisesRegex(ValueError, "Publishing-Wurzel"):
                registry.skill_record(absent)


if __name__ == "__main__":
    unittest.main()
