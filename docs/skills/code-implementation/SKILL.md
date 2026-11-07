---
name: code-implementation
description: "Implementiert geklärtes Verhalten im vereinbarten Scope und prüft den betroffenen Stand."
metadata:
  version: "1.0.0"
  schema-version: "2"
  usable_in_phases: "implementation"
  kind: capability
---

# Code Implementation

## Verwenden

Geklärtes Verhalten im vereinbarten Scope implementieren. Kleine offensichtliche
Änderungen direkt umsetzen; bei nicht trivialen Änderungen einen vorhandenen
ausführbaren Plan übernehmen oder [gezielt planen](../code-implementation-planning/SKILL.md).

## Vorgehen

1. Ziel, Grenzen, unmittelbar betroffene Dateien, vorhandene Patterns und Verifikation
   lesen. Fehlenden relevanten Kontext selbst gezielt beschaffen.
2. Das nächste zusammenhängende Arbeitspaket mit der kleinsten hinreichenden Lösung
   umsetzen. Für neue Struktur den [Current-Driver-Test](../../roles/developer/DEVELOPER.md#minimal-hinreichende-lösung)
   anwenden; keine hypothetischen Varianten oder Dependencies hinzufügen.
3. Zugehörige Tests und code-nahe Dokumentation mitpflegen. Keine fachfremden Änderungen
   oder breiten Dokumentationsartefakte erzeugen.
4. Relevante lokale Prüfungen selbst ausführen oder an die Tester-Rolle übergeben.
   [Code Testing](../code-testing/SKILL.md) definiert die Nachweise. Ein Rollenwechsel
   oder eigener Skill-Aufruf ist für einen einfachen Prüfschritt nicht erforderlich.
5. Lokale Fehler im gleichen Scope korrigieren. Nur bei geänderten Anforderungen,
   Architekturgrenzen oder wesentlichen falschen Annahmen gezielt zurückplanen.

## Grenzen und Ergebnis

Keine unbeauftragten Git-/GitHub-Mutationen. Reines Verhaltenserhaltungs-Refactoring
mit [Code Refactoring](../code-refactoring/SKILL.md) behandeln.
Umgesetztes Verhalten, betroffene Bereiche, tatsächliche Prüfungen und offene Punkte
berichten; ungeprüften Code nicht als getestet ausgeben.
