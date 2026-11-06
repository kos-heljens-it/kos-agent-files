---
name: issue-acceptance-convergence
description: "Prüft Root und Child-Graph auf PASS, GAP oder BLOCKED; converge behebt nur ausdrücklich beauftragte Gaps."
metadata:
  version: "1.0.0"
  schema-version: "2"
  covers_phases: "acceptance, planning, implementation, verification"
  kind: workflow
---

# Issue Acceptance und Konvergenz

## Verwendung und Modi

Die Kriterien eines Root-Issues (`Epic`, `Story` oder `Task`) und seines vollständigen
nativen Child-Graphen gegen einen exakt bezeichneten Stand prüfen.
Standard `evaluate` verändert weder Code noch Issues, AC-Checkboxen oder Branches.
`converge` ist nur bei ausdrücklich beauftragter Umsetzung der Gaps im vereinbarten
Scope zulässig. Ein Acceptance-Aufruf allein ist keine Remediation-Autorisierung.

## Prüfung

1. Root, Kommentare, native Types und Relationships mit
   [Issue Operations](../github-issue-ops/SKILL.md) (`read`) vollständig lesen und
   native Child-Kanten rekursiv verfolgen. Parent oberhalb des Roots, Geschwister und
   externe Blocker bleiben Kontext; sie erweitern den Acceptance-Scope nicht.
2. Stabile Repository-/Issue-Identität deduplizieren. Einen Zyklus nur über eine Kante
   in den aktiven Rekursionspfad erkennen; `visited` allein ist kein Zyklusnachweis.
3. Jede AC von Root und jedem Child unabhängig erfassen; geschlossene Issues bleiben
   prüfbar. Fehlende Kriterien als `BLOCKED` ausweisen, niemals als leeren PASS.
4. Gegen den vom Aufrufer festgelegten Commit prüfen. Vor dem PR darf dies der exakt
   benannte implementierte Branch-Head sein; nach Merge der in den tatsächlichen
   Base-Branch integrierte Stand. Diese Evidenzarten im Ergebnis unterscheiden.
5. Pro Kriterium Status und konkrete Code-, Test-, Produkt- oder manuelle Evidenz
   dokumentieren. Grüne CI, Issue-/PR-Status oder alte Ergebnisse allein genügen nicht.

| Issue | Kriterium | Status | Evidenz/Blocker | geprüfter Commit |
|---|---|---|---|---|
| #123 | vollständige AC | PASS / GAP / BLOCKED | konkrete Beobachtung | SHA |

`PASS` bedeutet belegt erfüllt, `GAP` belegt nicht erfüllt, `BLOCKED` nicht belastbar
prüfbar. Mindestens ein BLOCKED ergibt BLOCKED, sonst mindestens ein GAP ergibt GAP,
sonst ergibt die vollständig belegte Matrix PASS. Fehlende CI allein ist kein Fehler.
Im Modus `evaluate` sind alle drei Ergebnisse terminal und werden zurückgegeben.

## Ausdrücklich beauftragte Konvergenz

1. Jeden Gap vor Mutation klassifizieren: bestehender Issue-Scope, vereinbarter aber
   noch nicht repräsentierter Restumfang oder neue/unklare Anforderung.
2. Vorhandene passende Issues wiederverwenden. Neue Children nur bei beauftragter
   GitHub-Materialisierung und nach Duplikatprüfung erstellen. Neue oder widersprüchliche
   Anforderungen zur Klärung zurückgeben, ohne den Scope stillschweigend zu erweitern.
3. Bestehenden Scope gezielt planen, implementieren und lokal verifizieren.
   [Issue Implementation](../issue-implementation/SKILL.md) nur mit seinen im Auftrag
   enthaltenen Git-/GitHub-Schritten ausführen. Bei Minimierung jede Änderung retesten.
4. Die vollständige ursprüngliche Acceptance-Menge erneut gegen den neuen Commit prüfen.
   Einen identischen Versuch ohne neue Zustandsänderung oder Evidenz nicht wiederholen;
   den konkreten fehlenden Fortschritt als BLOCKED zurückgeben.

## Grenzen und Ergebnis

Keine automatische Issue-Schließung. Ein Closeout-Aufrufer darf belegte Ergebnisse
innerhalb seines eigenen autorisierten Vertrags persistieren. Keine zusätzliche
PR-/Merge-Autorisierung aus `converge` ableiten. Modus, Root-Graph, geprüften Stand,
vollständige Matrix und PASS/GAP/BLOCKED sowie tatsächlich ausgeführte Remediation nennen.
