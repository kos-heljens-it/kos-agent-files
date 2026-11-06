#!/usr/bin/env python3
"""Rein lesende Prüfung der veröffentlichten Agent Files und Skill-Pakete."""
from __future__ import annotations

import json
import re
import sys
import tomllib
from pathlib import Path
from urllib.parse import unquote, urlsplit

import yaml

import skill_registry as registry

ROOT, DOCS = registry.ROOT, registry.DOCS
MARKERS = {"MUST", "MUST_IF", "MUST_NOT", "MUST_NOT_IF", "ALLOW", "ALLOW_IF", "SHOULD", "OPTIONAL", "PRIORITY"}
CONDITION = re.compile(r"\b(wenn|falls|sofern|solange|sobald|bei|ohne|nur|außer|soweit|bevor|erst)\b", re.I)
NEGATION = re.compile(r"\b(nicht|kein|keine|keinen|keinem|keiner|keines|nie|niemals|weder)\b", re.I)
LINK = re.compile(r"!?\[[^\]]*\]\((<[^>]+>|[^)\s]+)(?:\s+\"[^\"]*\")?\)")


def prose_lines(text: str):
    fence_marker = None
    fence_length = 0
    front = text.startswith("---\n")
    for number, line in enumerate(text.splitlines(), 1):
        if number == 1 and front:
            continue
        if front:
            if line == "---":
                front = False
            continue
        fence = re.match(r"^\s*(`{3,}|~{3,})(.*)$", line)
        if fence:
            marker, tail = fence.groups()
            if fence_marker is None:
                fence_marker, fence_length = marker[0], len(marker)
            elif marker[0] == fence_marker and len(marker) >= fence_length and not tail.strip():
                fence_marker = None
            continue
        if fence_marker is None:
            yield number, line


def has_unclosed_fence(text: str) -> bool:
    opened = None
    for line in text.splitlines():
        match = re.match(r"^\s*(`{3,}|~{3,})(.*)$", line)
        if not match:
            continue
        marker, tail = match.groups()
        if opened is None:
            opened = marker
        elif marker[0] == opened[0] and len(marker) >= len(opened) and not tail.strip():
            opened = None
    return opened is not None


def anchors(text: str) -> set[str]:
    result, occurrences = set(), {}
    for _, line in prose_lines(text):
        match = re.match(r"^#{1,6}\s+(.+?)\s*#*$", line)
        if not match:
            continue
        slug = re.sub(r"[^\w\s-]", "", match.group(1).lower()).replace(" ", "-")
        count = occurrences.get(slug, 0)
        occurrences[slug] = count + 1
        result.add(slug + (f"-{count}" if count else ""))
    return result


def link_target(source: Path, target: str, base: str) -> tuple[Path | None, str]:
    target = target.strip("<>")
    if "{{" in target or "<" in target:
        return None, ""
    parts = urlsplit(target)
    if target.startswith(base):
        relative = urlsplit(target[len(base):]).path
        path = DOCS / unquote(relative)
    elif parts.scheme or parts.netloc:
        return None, ""
    else:
        path = source.parent / unquote(parts.path) if parts.path else source
    path = path.resolve()
    if not path.is_relative_to(DOCS.resolve()):
        raise ValueError(f"Link verlässt Publishing-Wurzel: {target}")
    return path, unquote(parts.fragment)


def audit() -> list[str]:
    errors = []
    def fail(path, message, line=None):
        location = path.relative_to(ROOT).as_posix()
        errors.append(f"{location}" + (f":{line}" if line else "") + f": {message}")

    try:
        config = registry.library_config()
        skills = registry.records()
        differences = registry.synchronize()
        if differences:
            errors.append("Veraltete Kataloge: " + ", ".join(differences))
    except (ValueError, KeyError, yaml.YAMLError) as error:
        return [str(error)]
    files = sorted(DOCS.rglob("*.md"))
    texts = {path.resolve(): path.read_text(encoding="utf-8") for path in files}
    graph = {path: set() for path in texts}
    for path, text in texts.items():
        if has_unclosed_fence(text):
            fail(path, "Nicht abgeschlossener Markdown-Codeblock")
        if "https://heljens-it-services.github.io/agent-files/" in text:
            fail(path, "Alter absoluter Upstream-Link statt relativem Bibliothekslink")
        for number, line in prose_lines(text):
            rule = re.match(r"^\[([A-Z_]+)\]\s*(.*)$", line)
            if rule:
                marker, sentence = rule.groups()
                if marker not in MARKERS:
                    fail(path, f"Unbekannter Regelmarker [{marker}]", number)
                if marker.endswith("_IF") and not CONDITION.search(sentence):
                    fail(path, f"[{marker}] nennt keine Bedingung", number)
                if marker.startswith("MUST_NOT") and not NEGATION.search(sentence):
                    fail(path, f"[{marker}] ist sprachlich nicht verneint", number)
            for match in LINK.finditer(line):
                target = match.group(1)
                try:
                    resolved, fragment = link_target(path, target, config["pages_base_url"])
                except ValueError as error:
                    fail(path, str(error), number)
                    continue
                if resolved is None:
                    continue
                if not resolved.exists():
                    fail(path, f"Linkziel fehlt: {target}", number)
                elif resolved.suffix.lower() == ".md":
                    graph[path].add(resolved)
                    if fragment and fragment not in anchors(texts.get(resolved, "")):
                        fail(path, f"Anker fehlt: {target}", number)
    entry = (DOCS / "AGENTS.md").resolve()
    reached, stack = {entry}, [entry]
    while stack:
        for target in graph.get(stack.pop(), ()):
            if target not in reached:
                reached.add(target)
                stack.append(target)
    for path in texts.keys() - reached:
        fail(path, "Ab docs/AGENTS.md nicht erreichbar")

    for path in sorted([*DOCS.rglob("*"), *(ROOT / ".github").rglob("*")]):
        if path.suffix not in {".yaml", ".yml"}:
            continue
        try:
            text = path.read_text(encoding="utf-8")
            # GitHub-Workflows verwenden YAML-1.2-Schlüssel wie `on`; bei diesem
            # Syntaxcheck keine YAML-1.1-Typkonvertierung als Schema auswerten.
            data = yaml.safe_load(text) if path.is_relative_to(ROOT / ".github") else registry.load_yaml(text)
            if path.name == "openai.yaml":
                if not isinstance(data, dict) or not isinstance(data.get("interface"), dict):
                    raise ValueError("OpenAI-Metadaten benötigen ein interface-Mapping")
                if "policy" in data:
                    policy = data["policy"]
                    if not isinstance(policy, dict) or not isinstance(policy.get("allow_implicit_invocation", True), bool):
                        raise ValueError("policy muss ein Mapping mit boolescher allow_implicit_invocation sein")
        except (ValueError, yaml.YAMLError) as error:
            fail(path, str(error))

    source, published = ROOT / ".codex/agents", DOCS / "codex/agents"
    for name in ("planner", "developer", "tester", "designer"):
        left, right = source / f"{name}.toml", published / f"{name}.toml"
        try:
            left_text, right_text = left.read_text(encoding="utf-8"), right.read_text(encoding="utf-8")
            if left_text != right_text:
                fail(right, "Weicht von .codex/agents ab")
            data = tomllib.loads(right_text)
            if data.get("name") != name or not data.get("description") or not data.get("developer_instructions"):
                fail(right, "Codex-Identität oder Pflichtfelder fehlen")
        except (OSError, tomllib.TOMLDecodeError) as error:
            fail(right, str(error))
    legacy = json.loads((ROOT / "scripts/legacy_paths.json").read_text(encoding="utf-8"))
    names = {skill["name"] for skill in skills}
    for path, item in legacy.items():
        if item["skill"] not in names or not (DOCS / path).exists():
            errors.append(f"Ungültiger Kompatibilitätsverweis: {path}")
    if not (DOCS / ".nojekyll").is_file():
        errors.append("docs/.nojekyll fehlt: Rohdatei-Publikation nicht gesichert")
    return sorted(errors)


def main() -> int:
    errors = audit()
    if errors:
        print("\n".join(errors))
        print(f"\n{len(errors)} Befund(e).")
        return 1
    print(f"OK: {len(registry.records())} Skills, Markdown-Links/Anker, YAML, Kataloge und Codex-Vorlagen geprüft.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
