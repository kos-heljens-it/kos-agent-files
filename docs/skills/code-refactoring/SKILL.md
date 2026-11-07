---
name: code-refactoring
description: "Verbessert vorhandene Struktur bei nachweisbarem Verhaltenserhalt; secure ergänzt einen beauftragten Branch-/PR-Zyklus."
metadata:
  version: "1.0.0"
  schema-version: "2"
  covers_phases: "analysis, planning, preparation, implementation, verification, review, integration"
  kind: workflow
---

# Code Refactoring

## Verwendung und Modi

Bestehende Struktur bei erhaltenem Verhalten verbessern. Standard `local` arbeitet
am aktuellen vereinbarten Scope ohne Git-Lifecycle. `secure` wird nur bei beauftragtem
abgesichertem Branch-/PR-Zyklus gewählt; dafür zusätzlich
[Secure-Verfahren](references/secure.md) lesen. Ein lokaler Refactoring-Auftrag
autorisiert keine Branch-Erstellung, keinen Push und keinen PR.

## Vorgehen

1. Zu erhaltendes Verhalten, öffentliche Semantik, Fehlerpfade, Scope und Baseline
   aus Task und relevanten Dateien bestimmen. Bei unklarem Verhalten zuerst analysieren.
2. Konkrete bestehende Last benennen: Duplikation, Verantwortungsmischung, Kopplung,
   Verschachtelung oder unnötige Indirektion. Neue Struktur nur nach dem
   [Current-Driver-Test](../../roles/developer/DEVELOPER.md#minimal-hinreichende-lösung).
3. Den kleinsten zusammenhängenden Umbau durchführen. Keine Aufteilung allein für
   Größenrichtwerte und keine hypothetischen Extension Points.
4. Betroffene Tests und code-nahe Dokumentation anpassen, den bestehenden fachlichen
   Vertrag erhalten und relevante Prüfungen ausführen oder gezielt delegieren.
5. Vorher/Nachher erklären: Welche bestehende Last entfällt, welche neue Struktur
   entsteht, und warum sinkt die gesamte Verständnis- und Wartungslast?

## Grenzen und Ergebnis

Keine verdeckte Feature- oder API-Änderung. Nötige Verhaltensänderungen zur
[Implementierung](../code-implementation/SKILL.md) zurückgeben. Keine Testabschwächung,
keine fachfremden Änderungen. Scope, Strukturgewinn, Verhaltenserhalt und tatsächliche
Nachweise berichten; bei fehlender Evidenz keine erfolgreiche Absicherung behaupten.
