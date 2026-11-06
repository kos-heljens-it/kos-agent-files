---
name: bugfix
description: "Reproduziert und behebt einen Fehler auf dem aktuellen Branch; from-default erstellt ausdrücklich einen neuen Branch und PR."
metadata:
  version: "1.0.0"
  schema-version: "2"
  covers_phases: "analysis, preparation, planning, implementation, verification, review, integration"
  kind: workflow
---

# Bugfix

## Verwendung und Modi

Einen konkreten Fehler reproduzieren, beheben und verifizieren.
Standard `current` verwendet den aktuellen Branch und erzeugt keinen PR.
Nur der ausdrücklich gewählte Modus `from-default` erstellt mit
[Git Branch Operations](../git-branch-operations/SKILL.md) (`create`) einen neuen
Bugfix-Branch von der bestimmten Basis und am Ende einen PR zu dieser Basis.

## Ablauf

1. Fehler, Issue-Kontext, Branch, Working Tree und bereits erteilten Scope übernehmen.
   Fremde Änderungen erhalten. Im Modus `current` den Branch nicht wechseln.
2. Fehler mit [Code Testing](../code-testing/SKILL.md) reproduzieren. Ohne belastbare
   Reproduktion erst Ursache oder Bedingungen mit [Code Analysis](../code-analysis/SKILL.md)
   klären; keinen unbewiesenen Fix als erfolgreich ausgeben.
3. Vorhandenen ausführbaren Plan übernehmen. Nur bei fehlender Richtung oder echtem
   Planbruch [technisch nachplanen](../code-implementation-planning/SKILL.md).
4. [Fix implementieren](../code-implementation/SKILL.md), ursprüngliche Reproduktion
   und relevante Regressionen prüfen. Lokale Fehler gezielt korrigieren; Scope-Brüche
   zur Planung oder Klärung zurückgeben.
5. Nur bei lokalem PASS und erkennbaren Kandidaten
   [Minimierung](../code-minimization/SKILL.md) durchführen. Nach Änderungen fokussiert
   erneut prüfen, dann den finalen Diff [reviewen](../code-diff-review/SKILL.md).
6. Den im Auftrag enthaltenen Git-Abschluss mit
   [Git Commit und Push](../git-commit-push/SKILL.md) durchführen. Bestehende Autorisierung
   weiterverwenden; aus einem bloßen lokalen Fixauftrag keinen Push ableiten.
7. Ausschließlich bei `from-default` den autorisierten
   [PR erstellen](../github-pr-ops/SKILL.md) (Modus `create`). Kein automatischer Merge.

## Ergebnis

Ursache, Fix, Reproduktions- und Regressionsevidenz, verwendeter Branch, tatsächlicher
Commit-/Push-/PR-Status und offene Punkte. Ein roter Test oder unklarer Scope blockiert
die behauptete Fertigstellung.
