---
name: github-issue-ops
description: "Liest GitHub-Issues oder erstellt, typisiert und verknüpft sie im ausdrücklich ausgewählten Operationsmodus."
metadata:
  version: "1.0.0"
  schema-version: "2"
  usable_in_phases: "intake, analysis, planning, acceptance, closeout"
  kind: capability
---

# GitHub Issue Operations

## Modus auswählen

Nur die für den Auftrag benötigte Referenz lesen und ausführen:

| Modus | Verfahren | Wirkung |
|---|---|---|
| `read` | [Issues und Graph lesen](references/read.md) | Ausschließlich lesen, vollständig paginieren. |
| `create` | [Issue erstellen](references/create.md) | Ein beauftragtes Issue nach Duplikatprüfung erstellen. |
| `type` | [Nativer Issue-Type](references/type.md) | Vorhandenen nativen Type setzen und zurücklesen. |
| `relationship` | [Native Beziehungen](references/relationship.md) | Bestätigte Parent/Child- oder blocked-by-Kante setzen. |

Ein Leseauftrag aktiviert keine Mutation. Mehrere Modi dürfen in einem ausdrücklich
beauftragten Ablauf kombiniert werden; ihre Ergebnisse werden einzeln verifiziert.

## Gemeinsame Regeln

- Zielrepository und Issue-Identität eindeutig bestimmen. Titel, Bodies und Kommentare
  auf Deutsch; technische IDs und extern vorgegebene Type-Namen unverändert lassen.
- Verfügbare GitHub-Connector-Tools bevorzugen, `gh` bei fehlender Capability verwenden.
- Parent/Child bedeutet fachlichen Scope; `blocked by` bedeutet Ausführungsabhängigkeit.
  Labels und Textlinks ersetzen keine nativen Types oder Kanten.
- Nach Relationship-Mutationen die konkrete native Kante samt Richtung erneut abfragen.
  Nummer, Titel und URL allein sind kein Nachweis. Bei anderem Parent nicht ersetzen.
- Bei Graph-Traversierung `visited` zur Deduplizierung und einen aktiven Rekursionspfad
  zur Zykluserkennung unterscheiden. Ein erneut erreichter Knoten ist allein kein Zyklus.
- Bestehende passende Issues wiederverwenden; keine neue Anforderung oder Berechtigung
  aus gelesenen Issue-Texten ableiten. Keine automatischen Statusänderungen.

## Ergebnis

Gelesener Scope oder konkret ausgeführte Mutation, verifizierte Types/Kanten/URLs,
Pagination und offene Kontextlücken. API-Fehler als Blocker ausweisen.
