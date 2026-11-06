---
name: code-implementation-planning
description: "Plant nicht triviale technische Änderungen mit konkreten Arbeitspaketen, aktuellen Treibern und Verifikation."
metadata:
  version: "1.0.0"
  schema-version: "2"
  usable_in_phases: "planning"
  kind: capability
---

# Technische Implementierungsplanung

## Verwenden

Nicht triviale Änderungen mit mehreren Bereichen, offenen technischen Entscheidungen
oder relevanten Risiken planen. Kleine offensichtliche Änderungen benötigen keinen
eigenen Plan. Vorhandene ausführbare Pläne wiederverwenden.

## Vorgehen

1. Ziel, Scope, Nicht-Ziele und AC mit dem tatsächlichen Repository-Kontext abgleichen;
   benötigte Dateien, Issues und Dokumentation gezielt selbst lesen.
2. Fehlende wesentliche Produktentscheidungen zur
   [Anforderungsklärung](../requirements-clarification/SKILL.md) zurückgeben.
3. Betroffene Bereiche, Schnittstellen, heutige Risiken und erforderliche Änderungen
   festlegen. Neue Struktur mit dem
   [Current-Driver-Test](../../roles/developer/DEVELOPER.md#minimal-hinreichende-lösung)
   begründen; keine zukünftigen Consumer oder Anforderungen erfinden.
4. Zusammenhängende Arbeitspakete mit Reihenfolge, Ergebnis, Verifikation und
   Rücksprung bei echten Planbrüchen formulieren. Keine Dateimikroplanung ohne Evidenz.
5. Für einen terminalen GitHub-Task den
   [Task-Issue-Vertrag](../../github/ISSUE_TEMPLATES.md#task-issue-vertrag) vollständig
   liefern. Offene wesentliche Entscheidungen verhindern Terminalität.

## Grenzen und Ergebnis

Kein Produktivcode und keine GitHub-Mutation. Den Plan standardmäßig als Arbeitskontext
verwenden und den beauftragten Ablauf fortsetzen; nur bei benanntem Handoff oder
Dateiauftrag persistieren. Ergebnis: Scope, Pakete, reale Strukturtreiber, Nachweise
und offene Entscheidungen. Projektweite Phasen ersetzen diesen technischen Plan nicht.
