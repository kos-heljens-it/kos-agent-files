# SkillRegistry-Vertrag

Stand: 2026-11-06

## Implementierter Datenvertrag: Schema 2

Kanonische Skills liegen unter `docs/skills/<name>/SKILL.md`. Nur diese Entry-Points
werden indiziert; alte flache `.md`-Pfade sind Kompatibilitätsverweise. Die ursprünglichen
Eingangskopien im übergeordneten Workspace unter `skills/` sind keine zweite gepflegte Bibliothek.

```yaml
---
name: code-analysis
description: Analysiert Verhalten, Fehlerursachen und Auswirkungen im vereinbarten Scope.
metadata:
  version: "1.0.0"
  schema-version: "2"
  kind: capability
  usable_in_phases: "analysis, verification, observation"
---
```

Eine `capability` liefert eine abgegrenzte Fähigkeit oder getrennte Operationsmodi.
Ein `workflow` koordiniert mehrere Schritte und hat stattdessen beispielsweise:

```yaml
metadata:
  version: "1.0.0"
  schema-version: "2"
  kind: workflow
  covers_phases: "analysis, implementation, verification, review, integration"
```

Die Metadatenwerte bleiben Zeichenfolgen gemäß [Agent Skills](https://agentskills.io/specification).
Der Generator zerlegt die kommagetrennten Phasen in echte JSON-Arrays. Leerwerte,
unbekannte und doppelte Phasen sowie zum `kind` widersprüchliche Felder werden abgelehnt.
Das alte `phase`, `atomic` und Schema 1 werden nicht mehr als aktueller Skill-Vertrag akzeptiert.
Die Publikationskonfiguration `library.json` bleibt unabhängig davon auf Schema 1.

## Phasen

| ID | Ergebnis der Phase |
|---|---|
| `intake` | Auftrag, Kontext und Grenzen erfasst. |
| `discovery` | Zielbild und reale Lösungsoptionen geklärt. |
| `analysis` | Bestand, Ursache, Auswirkungen oder Risiken belegt. |
| `design` | Relevante Architektur-, UI- oder Vertragsentscheidungen getroffen. |
| `planning` | Umsetzbare Pakete, Abhängigkeiten und Nachweise festgelegt. |
| `preparation` | Arbeitsbranch und erforderliche Umgebung vorbereitet. |
| `implementation` | Vereinbarte Änderung umgesetzt. |
| `verification` | Erforderliche technische oder manuelle Nachweise ausgeführt. |
| `review` | Änderung auf Korrektheit, Scope und Risiken bewertet. |
| `integration` | Autorisierte Commit-/PR-/Merge-Schritte verifiziert. |
| `deployment` | Vereinbarter Stand in der Zielumgebung bereitgestellt. |
| `acceptance` | Auftragskriterien gegen den bezeichneten Stand geprüft. |
| `closeout` | Autorisierte Abschlüsse und Übergabe erledigt. |
| `observation` | Zustand nach Veröffentlichung oder im Betrieb bewertet. |

Diese IDs sind ein erweiterbarer Bibliotheksvertrag, keine obligatorische Pipeline.
`bugfix` ist ein Workflow. Brainstorming und Dokumentation sind Fähigkeiten; Routing
und Gatekeeping sind Orchestrator-Aufgaben. Merge allein ist kein Deployment.
Ein noch unbesetzter Bereich wie Deployment bleibt im Vokabular für spätere Skills erhalten.

`usable_in_phases` filtert Fähigkeiten, `covers_phases` beschreibt den möglichen
Umfang eines Workflows. Beide Listen sind weder Ausführungsreihenfolge noch Garantie,
dass jeder Modus alle Phasen verwendet. Filter erzeugen Kandidaten; Auftrag, Modus,
Inputs, Grenzen und Evidenz bestimmen die konkrete Auswahl. Einen ganzen Bugfix-Workflow
nicht als einzelne Analysefähigkeit ausführen. Metadaten erteilen keine Berechtigungen.

## Dateien und Pflege

- `library.json`: manuell gepflegtes Zielrepository und Pages-Basis.
- `scripts/legacy_paths.json`: gepflegte Zuordnung der alten Pfade und Modi.
- [registry.json](registry.json): generierter Maschinenkatalog mit `schema_version: 2`.
- [Skill-Katalog](skills/SKILLS.md) und [Kompatibilität](COMPATIBILITY.md): generierte Ansichten.
- [AGENTS.md](AGENTS.md), [Rollen](roles/ROLES.md), [Technologien](TECHNOLOGIES.md) und
  [Issue-Verträge](github/ISSUE_TEMPLATES.md): gemeinsamer bedarfsweise geladener Kontext.

Pro Skill enthält JSON Name, Beschreibung, Art, Phasen-Array, Version, Entry-Point
und `files`. Pfade sind immer relativ zur Publishing-Wurzel `docs/`, auch bei Ressourcen.
SHA-256 wird bei `hash_encoding: utf8-lf` nach CRLF/LF-Normalisierung, bei `bytes`
über unveränderte Bytes gebildet. Hashes erkennen Abweichungen, authentifizieren keine Quelle.
Gemeinsame Regeln außerhalb eines Skill-Ordners gehören ebenfalls zum festen Bibliotheksstand.

Nach Änderungen `python scripts/skill_registry.py --write` ausführen und die Ergebnisse
mitversionieren. CI führt Linter, Katalogvergleich und Tests lesend aus und lehnt
veraltete Kataloge ab. Sie erzeugt derzeit keine automatischen Commits oder Deployments.
Kein `generated_at`, damit identische Quellen identische Kataloge ergeben.
Pages verteilt `/docs` direkt; `.nojekyll` erhält Rohdateien und YAML-Header.

## Geplante Autonomia-Nutzung

Ein nativer C#-Dienst `SkillRegistry` liest den Katalog mit `System.Text.Json`.
Mögliche Methoden sind `ListSkills`, `GetSkill` und `GetSkillResource`. Interne
Aufrufer benötigen kein MCP. Ein optionaler HTTP-MCP-Adapter kann denselben Dienst
extern zugänglich machen; ein stdio-Host wäre ein separat gestarteter Prozess.

Vor einem Lauf einen konsistenten, geprüften Bibliotheksstand synchronisieren und
seine Git-SHA für den Task festhalten. Während des Laufs keine Dateien dieses
Snapshots verändern. Neue Jobs dürfen einen neueren Stand verwenden. Aktualisierung
per Pull in einen gleichzeitig verwendeten Checkout wäre dafür ungeeignet.

Route Builder und Gatekeeper nutzen Metadaten als Auswahlhilfe. Der Runner lädt nur
die benötigten Instruktionen und Ressourcen. Pfade gegen den Snapshot begrenzen,
zulässige Dateien prüfen und passende Hashes verifizieren. Fehlende Daten als Fehler
melden; keinen gemischten Stand aus altem Katalog und neuen Dateien ausführen.

Ein pro Task erzeugter RouteGraph und Ausführungszustand gehören in den Laufzeitspeicher
von Autonomia, z. B. PostgreSQL/JSONB, nicht in den Bibliothekskatalog. Konkretes DB-Schema,
Scriban-Variablen und Runner-Verträge sind noch zu entwickeln. Diese Dokumentation
implementiert weder den C#-Dienst noch MCP oder den Harness.
