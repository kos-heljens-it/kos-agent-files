---
name: github-pr-ops
description: "Erstellt Pull Requests, beobachtet erforderliche Checks oder führt einen ausdrücklich autorisierten Merge aus."
metadata:
  version: "1.0.0"
  schema-version: "2"
  usable_in_phases: "review, integration, closeout"
  kind: capability
---

# GitHub Pull Request Operations

## Modus auswählen

| Modus | Verfahren | Grenze |
|---|---|---|
| `create` | [PR erstellen oder wiederverwenden](references/create.md) | Setzt vorhandene gepushte Implementierung voraus; kein Merge. |
| `checks` | [Erforderliche Checks beobachten](references/checks.md) | Read-only; keine Reparatur oder erneute Ausführung. |
| `merge` | [Freigegebenen PR mergen](references/merge.md) | Nur ausdrücklich autorisierter Merge des geprüften unveränderten Heads. |

Nur die benötigte Referenz laden. Ein Erstellungs- oder Beobachtungsauftrag ist kein
Merge-Auftrag. Verfügbare GitHub-Connector-Tools bevorzugen; `gh` als Fallback.
Für die vollständige Vorbereitung bereits implementierter Änderungen einschließlich
Verifikation, Commit und Push [Issue To PR](../issue-to-pr/SKILL.md) verwenden.

## Gemeinsame Regeln

- Repository, tatsächliche Base, Head-Owner/Branch und Head-SHA feststellen.
  PRs nur bei identischem Repository, Head und gewünschter Base wiederverwenden.
- Mehrzeilige Bodies/Kommentare als strukturiertes Tool-Argument oder UTF-8-Datei
  über `--body-file` übergeben. Gespeicherten Inhalt zurücklesen; beim Soll-/Ist-Vergleich
  ausschließlich CRLF zu LF normalisieren. Keine Shell-Interpolation von Markdown.
- Checks und Review-Gates an den unveränderten Head binden. `no-checks-required` nur
  nach erfolgreicher Prüfung, dass keine Pflichtchecks konfiguriert und keine Checks
  berichtet sind. API-Fehler beweisen keine fehlende Checkpflicht.
- Keine Schutzregeln, Reviews, Merge Queue oder Konflikte administrativ umgehen.
  Der Merge-Modus behält die gesonderte, Head-bezogene Spending-Limit-Regel.
- Merge-Erfolg mit `MERGED`, Merge-Zeitpunkt und Merge-Commit bestätigen.
  Branch-Bereinigung und fachlicher Issue-Abschluss sind eigene beauftragte Schritte.

## Ergebnis

PR-URL, Modus, Base, Head und SHA, Draft-/Review-/Check- oder Merge-Status sowie
tatsächlich geprüfter Texttransport und konkrete Blocker.
