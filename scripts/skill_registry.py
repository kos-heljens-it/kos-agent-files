#!/usr/bin/env python3
"""Frontmatter lesen und versionierte Kataloge deterministisch pflegen.

Kein Pages-Build: Die erzeugten Kataloge werden zusammen mit den Quellen committet.
`--check` ist rein lesend; `--write` ist ein bewusster Pflegeaufruf.
"""
from __future__ import annotations

import argparse
import hashlib
import json
import re
import sys
from pathlib import Path
from urllib.parse import urlparse

import yaml

ROOT = Path(__file__).resolve().parent.parent
DOCS = ROOT / "docs"
PHASES = (
    "intake", "discovery", "analysis", "design", "planning", "preparation",
    "implementation", "verification", "review", "integration", "deployment",
    "acceptance", "closeout", "observation",
)
NAME = re.compile(r"^[a-z0-9]+(?:-[a-z0-9]+)*$")


class UniqueLoader(yaml.SafeLoader):
    """Doppelte YAML-Schlüssel als Fehler behandeln statt still überschreiben."""


def unique_mapping(loader: UniqueLoader, node: yaml.MappingNode, deep: bool = False) -> dict:
    result = {}
    for key_node, value_node in node.value:
        key = loader.construct_object(key_node, deep=deep)
        if not isinstance(key, str):
            raise ValueError("YAML-Schlüssel muss eine Zeichenfolge sein")
        if key in result:
            raise ValueError(f"Doppelter YAML-Schlüssel: {key}")
        result[key] = loader.construct_object(value_node, deep=deep)
    return result


UniqueLoader.add_constructor(yaml.resolver.BaseResolver.DEFAULT_MAPPING_TAG, unique_mapping)


def load_yaml(text: str):
    return yaml.load(text, Loader=UniqueLoader)


def frontmatter(path: Path) -> tuple[dict, str]:
    text = path.read_text(encoding="utf-8")
    match = re.match(r"\A---\r?\n(.*?)\r?\n---\r?\n(.*)\Z", text, re.S)
    if not match:
        raise ValueError("YAML-Frontmatter fehlt oder ist nicht abgeschlossen")
    data = load_yaml(match.group(1))
    if not isinstance(data, dict):
        raise ValueError("Frontmatter muss ein Mapping sein")
    return data, match.group(2)


def library_config() -> dict:
    config = json.loads((ROOT / "library.json").read_text(encoding="utf-8"))
    if config.get("schema_version") != 1:
        raise ValueError("Unbekannte library.json-Version")
    base = config["pages_base_url"]
    url = urlparse(base)
    if url.scheme != "https" or not url.netloc or not base.endswith("/") or url.query or url.fragment:
        raise ValueError("pages_base_url muss eine absolute HTTPS-Basis mit abschließendem / sein")
    if not re.fullmatch(r"[A-Za-z0-9_.-]+/[A-Za-z0-9_.-]+", config["repository"]):
        raise ValueError("repository muss owner/repo sein")
    return config


def skill_record(path: Path) -> dict:
    skill_root = (DOCS / "skills").resolve()
    if path.is_symlink() or path.parent.is_symlink() or not path.resolve().is_relative_to(skill_root):
        raise ValueError("Kanonischer Skill verlässt die Publishing-Wurzel oder ist ein Symlink")
    data, body = frontmatter(path)
    allowed = {"name", "description", "license", "compatibility", "metadata", "allowed-tools"}
    if set(data) - allowed:
        raise ValueError(f"Unbekannte Frontmatter-Felder: {sorted(set(data) - allowed)}")
    name = data.get("name")
    if not isinstance(name, str) or len(name) > 64 or not NAME.fullmatch(name) or name != path.parent.name:
        raise ValueError("name muss eindeutig sein und dem kebab-case-Verzeichnis entsprechen")
    description = data.get("description")
    if not isinstance(description, str) or not description.strip() or len(description) > 1024:
        raise ValueError("description muss eine nicht leere Zeichenfolge mit höchstens 1024 Zeichen sein")
    metadata = data.get("metadata")
    if not isinstance(metadata, dict) or any(not isinstance(v, str) for v in metadata.values()):
        raise ValueError("metadata muss Zeichenfolgen auf Zeichenfolgen abbilden")
    if metadata.get("schema-version") != "2" or not metadata.get("version"):
        raise ValueError("metadata.schema-version=2 und metadata.version erforderlich")
    kind = metadata.get("kind")
    if kind not in {"capability", "workflow"}:
        raise ValueError("metadata.kind muss capability oder workflow sein")
    phase_field = "usable_in_phases" if kind == "capability" else "covers_phases"
    forbidden = {"phase", "phases", "covers_phases" if kind == "capability" else "usable_in_phases"}
    if forbidden & metadata.keys():
        raise ValueError("Veraltete oder zum kind widersprüchliche Phasenfelder")
    raw_phases = metadata.get(phase_field, "")
    phases = [value.strip() for value in raw_phases.split(",")]
    if not all(value in PHASES for value in phases) or len(set(phases)) != len(phases):
        raise ValueError(f"metadata.{phase_field}: unbekannte, leere oder doppelte Phase")
    if not body.strip():
        raise ValueError("Skill-Anweisungen fehlen")
    files = []
    for resource in sorted(path.parent.rglob("*")):
        if resource.is_symlink() or not resource.resolve().is_relative_to(path.parent.resolve()):
            raise ValueError("Ressource verlässt den Skill-Ordner oder ist ein Symlink")
        if not resource.is_file():
            continue
        # Kanonische LF-Bytes verhindern betriebssystemabhängige Kataloge.
        raw = resource.read_bytes()
        text_file = resource.suffix.lower() in {".md", ".yaml", ".yml", ".json", ".toml", ".py", ".js", ".cjs", ".mjs", ".txt", ".svg", ".css", ".html", ".ts", ".cs", ".ps1", ".sh", ".xml"}
        if text_file:
            raw = raw.replace(b"\r\n", b"\n")
        files.append({"path": resource.relative_to(DOCS).as_posix(), "sha256": hashlib.sha256(raw).hexdigest(), "hash_encoding": "utf8-lf" if text_file else "bytes"})
    return {
        "name": name, "description": description, phase_field: phases, "kind": kind,
        "version": metadata["version"], "path": path.relative_to(DOCS).as_posix(),
        "files": files,
    }


def records() -> list[dict]:
    skills = []
    for path in sorted((DOCS / "skills").glob("*/SKILL.md")):
        try:
            skills.append(skill_record(path))
        except (ValueError, yaml.YAMLError) as error:
            raise ValueError(f"{path.relative_to(ROOT)}: {error}") from error
    if not skills:
        raise ValueError("Keine kanonischen Skills gefunden")
    if len({s["name"] for s in skills}) != len(skills):
        raise ValueError("Doppelte Skill-Namen")
    return skills


def rendered_files() -> dict[Path, str]:
    config = library_config()
    skills = records()
    legacy_paths = json.loads((ROOT / "scripts" / "legacy_paths.json").read_text(encoding="utf-8"))
    registry = {
        "schema_version": 2, "base_url": config["pages_base_url"],
        "phases": list(PHASES), "skills": skills, "legacy_paths": legacy_paths,
    }
    catalog = [
        "# Skill-Katalog", "", "<!-- Automatisch gepflegt: python scripts/skill_registry.py --write -->", "",
        "Ein gemeinsamer Katalog für atomare Fähigkeiten und zusammengesetzte Verfahren.",
        "Nur den passenden Skill und seine im aktuellen Schritt benötigten Referenzen laden.",
        "Capabilities nennen Einsatzphasen; Workflows nennen abgedeckte Phasen. Die Listen sind keine Ausführungsreihenfolge.", "",
        "[Registry-Vertrag](../REGISTRY.md) · [Maschinenkatalog](../registry.json)", "",
        "| Skill | Phase | Art | Verwendung |", "|---|---|---|---|",
    ]
    for skill in skills:
        description = skill["description"].replace("|", "\\|").replace("\n", " ")
        phase_field = "usable_in_phases" if skill["kind"] == "capability" else "covers_phases"
        phases = ", ".join(skill[phase_field])
        catalog.append(f'| [{skill["name"]}]({skill["name"]}/SKILL.md) | `{phases}` | `{skill["kind"]}` | {description} |')
    compatibility = [
        "# Migration und Kompatibilität", "",
        "<!-- Automatisch gepflegt: python scripts/skill_registry.py --write -->", "",
        "Die bisherigen URLs bleiben kurze Quellenverweise. Vor der Ausführung den kanonischen Skill",
        "mit dem ausgewiesenen Modus laden. `default` übernimmt dessen dokumentierten Standard.", "",
        "[Skill-Katalog](skills/SKILLS.md) · [Registry-Vertrag](REGISTRY.md)", "",
        "| Bisheriger Pfad | Nachfolger | Modus |", "|---|---|---|",
    ]
    for source, item in sorted(legacy_paths.items()):
        compatibility.append(f'| [{source}]({source}) | [{item["skill"]}](skills/{item["skill"]}/SKILL.md) | `{item["mode"] or "default"}` |')
    return {
        DOCS / "registry.json": json.dumps(registry, ensure_ascii=False, indent=2) + "\n",
        DOCS / "skills" / "SKILLS.md": "\n".join(catalog) + "\n",
        DOCS / "COMPATIBILITY.md": "\n".join(compatibility) + "\n",
    }


def synchronize(write: bool = False) -> list[str]:
    differences = []
    for path, expected in rendered_files().items():
        if path.exists() and path.read_text(encoding="utf-8") == expected:
            continue
        differences.append(path.relative_to(ROOT).as_posix())
        if write:
            path.write_text(expected, encoding="utf-8", newline="\n")
    return differences


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    mode = parser.add_mutually_exclusive_group(required=True)
    mode.add_argument("--write", action="store_true")
    mode.add_argument("--check", action="store_true")
    args = parser.parse_args()
    try:
        differences = synchronize(args.write)
    except (ValueError, KeyError, yaml.YAMLError) as error:
        print(error, file=sys.stderr)
        return 1
    if differences and not args.write:
        print("Veraltete Kataloge: " + ", ".join(differences), file=sys.stderr)
        return 1
    print(f"OK: {len(records())} Skills; Kataloge " + ("gepflegt." if args.write else "aktuell."))
    return 0


if __name__ == "__main__":
    sys.exit(main())
