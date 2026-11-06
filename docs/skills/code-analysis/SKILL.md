---
name: code-analysis
description: "Liest relevanten Code und analysiert Verhalten, Abhängigkeiten oder Fehlerursachen; Modus read erfasst nur Kontext."
metadata:
  version: "1.0.0"
  schema-version: "2"
  usable_in_phases: "analysis, verification, observation"
  kind: capability
---

# Code Analysis und Kontextlesen

## Verwendung und Modi

`read` erfasst gezielt vorhandenen Code und seine relevanten Verträge.
`analyze` bewertet zusätzlich Verhalten, Abhängigkeiten, Risiken oder eine Fehlerursache.
Kein Modus verändert Produktivcode oder startet eine Implementierung.

## Vorgehen

Je nach Fragestellung nur die passende Methodik ergänzen:

- Unbekannte Ursache: [hypothesengeleitete Diagnose](references/diagnostic-analysis.md).
- Geplante Änderung und ihre Folgen: [Auswirkungsanalyse](references/impact-analysis.md).
- Früher funktionierend, jetzt fehlerhaft: [Regressionsanalyse](references/regression-analysis.md).
- Falsche oder verlorene Werte: [Datenflussanalyse](references/data-flow-analysis.md).

Die Referenzen sind keine automatisch auszuführende Kette und verlangen keinen
MCP-Server. Lokal lesen oder über den vorhandenen Abrufweg gezielt laden.

1. Konkrete Frage, Scope und bekannten Stand übernehmen; unmittelbar relevante Dateien
   und Symbole suchen und lesen. Zusammenhänge nur soweit verfolgen, wie die Frage es erfordert.
2. Beobachtungen mit Pfaden, Symbolen, Logs oder bestehenden Prüfergebnissen belegen.
   Im Modus `read` Fakten und Kontextlücken zurückgeben, keine künstliche Bewertung erzeugen.
3. In `analyze` Hypothesen mit Evidenz abgleichen, Ursache von Symptom trennen und
   Auswirkungen auf Verträge, Fehlerpfade und Invarianten bewerten. Einen erforderlichen
   diagnostischen Test über [Code Testing](../code-testing/SKILL.md) ausführen lassen
   oder selbst unverändernd ausführen und seinen tatsächlichen Status nennen.
4. Fakten, Schlussfolgerungen und Unsicherheit unterscheiden. Fehlende Anforderungen
   oder Architekturentscheidungen gezielt zur Klärung zurückgeben.

## Persistenz und Ergebnis

Standard ist Arbeitskontext mit knapper Antwort. Eine Datei entsteht nur bei ausdrücklichem
Dateiauftrag, benanntem dauerhaften Handoff oder wenn die Analyse selbst das vereinbarte
Deliverable ist. Dann Zweck, Verbraucher und Pfad festhalten; falls kein Projektpfad
vorgegeben ist, `docs/analysis-<scope>.md` verwenden. Keine Debug-Spuren oder verworfenen
Hypothesen pauschal konservieren. Keine Git-/GitHub-Mutation.
