---
name: git-commit-push
description: "Committet und/oder pusht einen geprüften Änderungssatz; commit, push und commit-push bleiben getrennte Modi."
metadata:
  version: "1.0.0"
  schema-version: "2"
  covers_phases: "integration"
  kind: workflow
---

# Git Commit und Push

## Verwendung und Modi

Aus dem Auftrag genau einen Modus bestimmen: `commit` erzeugt lokale Commits;
`push` überträgt nur vorhandene Commits; `commit-push` kombiniert beide Schritte.
Ohne Push-Auftrag keinen Push aus einem Commit-Auftrag ableiten.

## Vorgehen

1. Repository, Branch, Arbeitsstatus, staged/unstaged/untracked Dateien und autorisierten
   Änderungsscope lesen. Fremde Änderungen erhalten und nicht automatisch stagen.
   Bei `commit-push` und `push` vor Mutation Zielremote/Branch, Upstream und nach Fetch
   den ahead/behind-Stand prüfen. Bei behind/divergiertem oder unklarem Ziel stoppen;
   kein automatischer Rebase, Merge oder Reset. Ein rein lokaler Commit benötigt keinen Remote.
2. Für `commit` und `commit-push` relevante Verifikation und
   [Diff-Review](../code-diff-review/SKILL.md) prüfen. Nur versandbereite Änderungen
   logisch schneiden und gezielt stagen; keine pauschale Aufnahme unbekannter Dateien.
3. Englische Commit-Nachrichten nach Repository-Konvention verwenden; keine Secrets
   aufnehmen und keine bestehenden Commits ohne ausdrücklichen Auftrag umschreiben.
   Im Modus `commit` oder `commit-push` den gezielt vorbereiteten Commit tatsächlich
   erstellen und seine SHA/Dateien verifizieren. Bei leerem eigenen Diff keinen leeren Commit erzeugen.
4. Für `push` und `commit-push` Zielremote, Remote-Repository und Branch prüfen.
   Vorhandenen Upstream verwenden; einen neuen nur bei eindeutigem Ziel setzen.
   Kein Force-Push, keine fremden Branches und keine ungeprüften Tags übertragen.
   Nur die vorgesehenen Commits tatsächlich pushen; anschließend den Remote-Head prüfen.
5. Commit-Ergebnis und Remote-SHA zurücklesen. Ein fehlgeschlagener Commit blockiert
   den nachgelagerten Push; ein fehlgeschlagener Push ist kein abgeschlossener Ablauf.
   Bei späterem Push-Fehler bereits erfolgreich erstellte lokale Commits erhalten und melden.

## Ergebnis

Modus, zugehörige Commit-SHAs und Nachrichten, Remote/Branch, bestätigter Push-Stand
und verbleibende lokale Änderungen oder Blocker. Kein PR, Merge oder Issue-Abschluss.
