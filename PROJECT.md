# PROJECT.md

## Zweck

Der Fork integriert die gemeinsamen Heljens-Regeln und persönlichen Skills für
OpenAI/Codex sowie den späteren autonomia-SkillRegistry.

## Versionsbasis

Kanonische Quellen liegen unter `docs/`. Pages verteilt Rohdateien aus `main` und
`/docs`; `.nojekyll` verhindert Jekyll-Verarbeitung. Zielrepository und Pages-Basis
stehen in `library.json`. Prüfung: Python 3.12+ und `requirements-dev.txt`.

## Fachliche Leitplanken

[MUST] Capabilities und Workflows als `docs/skills/<name>/SKILL.md` pflegen. `name` und `description` sind Pflicht; `metadata` enthält `version`, `schema-version`, `kind` und je nach Art `usable_in_phases` oder `covers_phases` als Zeichenfolgen gemäß [Registry-Vertrag](docs/REGISTRY.md).

[MUST] Bisherige URLs bleiben präzise Kompatibilitätsverweise auf kanonische Skills und gegebenenfalls den bisherigen Modus. Keine zweite vollständige Regelkopie pflegen.

[MUST] OpenAI/Codex-Metadaten und die fachlichen Rollen-/Technologieverträge erhalten. Gemini-/Antigravity-Manifeste und Hooks sind nicht Teil dieser Migration.

[MUST] Der Hybrid-Ansatz bestimmt die Metadaten-Schnittstelle; MCP, .NET-Harness und dynamische DAG-Ausführung werden hier noch nicht implementiert.

## Technische Leitplanken

[MUST] Jede Markdown-Datei unter `docs/` muss als Agentenquelle über interne Links ab `docs/AGENTS.md` erreichbar sein. Interne Links relativ halten. Assets/Templates dürfen absichtliche Platzhalter enthalten.

[MUST] Die vier veröffentlichten Codex-TOML-Vorlagen bleiben mit `.codex/agents/` inhaltsgleich. Importierte `agents/openai.yaml` erhalten; keine nebenläufige Modellmigration.

[MUST] Nach Änderungen an Skills, Ressourcen, Kompatibilitätsmapping oder Publikationsbasis `python scripts/skill_registry.py --write` ausführen und die versionierten Kataloge mitpflegen. Pages verteilt die versionierten Dateien direkt; kein Build ist erforderlich.

[MUST] Vor einem Commit `python scripts/lint_docs.py` und `python -m unittest discover -s scripts -p "test_*.py"` fehlerfrei ausführen. Der Linter bleibt ein reiner Lesecheck.

[MUST_IF] Wenn eine inhaltlich geänderte Datei eine `Stand:`-Zeile trägt, muss diese auf das Änderungsdatum gesetzt werden.

Nach tatsächlicher Publikation den [Online-Check](docs/skills/online-publication-check/SKILL.md)
gegen den erwarteten Commit ausführen. Lokale Prüfungen sind kein Pages-Deployment.
