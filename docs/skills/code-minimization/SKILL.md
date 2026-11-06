---
name: code-minimization
description: "Entfernt nach lokaler Konvergenz unbegründete Änderungsteile, ohne Acceptance, Security oder Invarianten zu schwächen."
metadata:
  version: "1.0.0"
  schema-version: "2"
  usable_in_phases: "implementation"
  kind: capability
---

# Code Minimization

## Verwenden

Einen lokal nachweislich funktionierenden Änderungssatz gezielt von unbegründeten
Bestandteilen befreien. Nur bei konkreten Kandidaten verwenden; kein obligatorischer
Durchlauf für jede Kleinänderung und kein LOC-Wettbewerb.

## Vorgehen

1. Eigene Änderungen, eindeutige Baseline, aktuellen Diff, AC, Invarianten und lokale
   PASS-Evidenz bestimmen. Fremde Änderungen erhalten. Bei fehlender Baseline oder
   diagnostisch instabilem Stand vor Mutation `BLOCKED` melden.
2. Semantische Einheiten unterscheiden: `REQUIRED` für Vertrag/Invariante,
   `JUSTIFIED` für einen konkreten heutigen Constraint, `CANDIDATE` bei unbelegter
   Notwendigkeit. Debug-Reste, verworfene Varianten, einmalige Wrapper, spekulative
   Optionen und ungenutzte Dependencies sind mögliche Kandidaten.
3. Pro Kandidat eine begrenzte Entfernung mit konkreter Erhaltungshypothese versuchen.
   Danach unmittelbar die betroffene Verifikation wiederholen.
4. Nur nach erfolgreichem Retest `REMOVED` setzen. Bei Fehlschlag ausschließlich den
   eigenen Reduktionsversuch zurücknehmen und `RETAINED_AFTER_FAILURE` begründen;
   keine fremden Änderungen zurücksetzen oder Tests abschwächen.
5. Finalen Diff erneut gegen Vertrag und Invarianten abgleichen. Erforderliche finale
   Verifikation nach tatsächlichem Risiko ausführen oder an Tester übergeben.

## Grenzen

Fehlende Testabdeckung beweist niemals die Entbehrlichkeit von Security, Autorisierung,
Validierung, Fehlerbehandlung oder Datenintegrität. Bekannte Invarianten erhalten.
Keine neue fachliche Lösung, Architektur oder Requirement erfinden. Eine sicherere oder
verständlichere Lösung nicht allein für einen kleineren Diff verschlechtern.
Keine Git-/GitHub-Mutation aus diesem Skill ableiten.

## Ergebnis

Status, Baseline und eigener Scope; je Kandidat Begründung, Versuch, gezielter Retest
und Ergebnis. Verbleibende REQUIRED/JUSTIFIED-Einheiten, tatsächliche finale Evidenz
und offene Risiken nennen. [Diff-Review](../code-diff-review/SKILL.md) bleibt eine
lesende Bewertung, [Refactoring](../code-refactoring/SKILL.md) eine Strukturverbesserung.
