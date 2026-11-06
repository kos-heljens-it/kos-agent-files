# TESTER.Angular.md

Stand: 2026-10-30

## Zweck

Diese Datei definiert Testregeln für Angular-Anwendungen. Allgemeine Tester-Regeln werden über [TESTER.md](TESTER.md), weitere technologiespezifische Regeldateien über [TECHNOLOGIES.md](../../TECHNOLOGIES.md) aufgelöst.

## Tests

[MUST] Die zu einem Produktionsartefakt gehörende `*.spec.ts` muss direkt neben diesem Artefakt liegen.

[MUST_IF] Wenn eine Spec eigene Helper, Fixtures, Builder, Mocks, Fakes, Stubs oder Testdaten benötigt, müssen diese unter `src/app/spec/` in einer zum Produktionsartefakt passenden Struktur liegen.

[MUST_NOT] Produktivcode darf `src/app/spec/` oder `@spec` nicht importieren.

[MUST] Für Playwright-Tests gilt [TESTER.Angular.Playwright.md](TESTER.Angular.Playwright.md).
