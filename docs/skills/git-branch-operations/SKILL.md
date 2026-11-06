---
name: git-branch-operations
description: "Erstellt einen Arbeitsbranch oder aktualisiert nach verifiziertem Merge dessen tatsächlichen Zielbranch per Fast-Forward."
metadata:
  version: "1.0.0"
  schema-version: "2"
  usable_in_phases: "preparation, integration, closeout"
  kind: capability
---

# Git Branch Operations

## Verwendung und Modi

`create` erstellt oder bestätigt einen aufgabenbezogenen Arbeitsbranch. `update-default`
aktualisiert nach geprüftem Merge den tatsächlichen Default-Branch;
`update-integration` den vereinbarten Integrationsbranch (bei der develop/main-Politik `develop`).
`update-target` verwendet den verifizierten tatsächlichen PR-Base-Branch.
Ein Modus aktiviert keinen anderen und autorisiert keinen Commit, Push oder Merge.

## Vorgehen

1. Repository, Status, aktuellen Branch, Remotes und verknüpfte Worktrees lesen.
   Fremde Änderungen weder verwerfen noch automatisch mitnehmen oder stashen.
2. Bei `create` einen bereits passenden Arbeitsbranch wiederverwenden. Sonst Basis aus
   ausdrücklicher Vorgabe, Workflow/PROJECT.md oder eindeutigem Remote-Default bestimmen.
   Keine Basis raten; auf Integrationsbranches vor Implementierung einen Arbeitsbranch
   erstellen, sofern der User nicht ausdrücklich dort arbeiten lässt.
3. Bei Updates zuerst den Merge und seine Integration in genau den gewählten Zielbranch
   nachweisen. Ein PR nach `develop` beweist keine Integration in `main`.
4. Remote holen, sauberen Arbeitsbaum und nicht divergierte lokale Basis prüfen;
   Zielbranch ausschließlich per Fast-Forward aktualisieren. Bei Divergenz, fremden
   Änderungen oder blockierendem Worktree den Zustand melden, nichts zurücksetzen.
5. Bei `create` einen freien Namen wie `feature/<scope>`, `bugfix/<issue>-<scope>` oder
   `refactor/<scope>` verwenden; lokale und entfernte Namenskollisionen vorher prüfen.
6. Branch, Basis-SHA und finalen Status zurücklesen. Keine automatische Branch-Löschung.

## Ergebnis

Modus, tatsächlicher Basis-/Zielbranch, SHA, neuer oder wiederverwendeter Branch und
ausgeführter Fast-Forward; ausgelassene Schritte mit konkretem Grund.
