# KOS Agent Files

Gemeinsame Heljens-Regeln und persönliche Skills für OpenAI/Codex. Capabilities
und mehrstufige Workflows verwenden dasselbe `SKILL.md`-Format.

Der Fork integriert neun persönliche Skills einschließlich DUI-Richtlinien mit
R001–R160, 28 Mustern und Bildreferenzen. Das Gesamtpaket enthält 41 kanonische
Skills; alte URLs bleiben präzise Verweise auf ihre Nachfolger und Operationsmodi.

## Nutzung

Veröffentlichter Einstieg nach aktiviertem Pages-Deployment:
[AGENTS.md](https://kos-heljens-it.github.io/kos-agent-files/AGENTS.md),
[Skill-Katalog](https://kos-heljens-it.github.io/kos-agent-files/skills/SKILLS.md),
[Registry](https://kos-heljens-it.github.io/kos-agent-files/registry.json).

Alternativ den Git-Checkout unter `docs/` lesen. Die aktuelle Auslieferung erfolgt
per HTTP oder Git; Pages installiert keine nativen Skills im Host. Das Kopieren
einzelner Ordner allein stellt die verlinkten gemeinsamen Rollen-/Governance-Quellen
nicht bereit. Eine spätere native Paketinstallation muss diese Pfadauflösung erhalten.

## Pflege und Prüfungen

Python 3.12+ verwenden:

```text
python -m pip install -r requirements-dev.txt
python scripts/skill_registry.py --write
python scripts/lint_docs.py
python -m unittest discover -s scripts -p "test_*.py"
```

Der Generator pflegt versionierte Kataloge; der Linter verändert keine Dateien.
Pages veröffentlicht direkt aus `main` und `/docs`, ohne Build-Schritt.
`docs/.nojekyll` erhält Frontmatter und Template-Platzhalter unverändert.

`library.json` konfiguriert den Fork und seine Pages-Basis. Für die spätere
Upstream-Übernahme diese Konfiguration und die wenigen absoluten Einstiegslinks
anpassen. Interne Skill-Links bleiben relativ.

Die Architektur- und Metadatenvereinbarung für den zukünftigen autonomia-Harness
steht im [Registry-Vertrag](docs/REGISTRY.md), die bisherigen Pfade in der
[Kompatibilitätstabelle](docs/COMPATIBILITY.md). MCP und .NET-Ausführung folgen
später; die Migration setzt sie nicht voraus.
