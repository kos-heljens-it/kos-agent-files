# ROLES.md

## Zweck

Diese Datei definiert das Rollenmodell und ist die Lookup-Datei für kontextabhängige Rollendateien.

## Verwendung

[MUST] Rollen sind unabhängige, kombinierbare Verantwortungs- und Qualitätsregelwerke; sie sind weder exklusive Personas noch Prozessschritte.

[MUST] Alle für den aktuellen Task relevanten Rollen müssen gelesen und angewendet werden.

[MUST_NOT] Rollen dürfen nicht allein wegen ihrer Existenz, einer Persona oder einer festen Workflow- oder Skill-Zuordnung geladen werden.

[MUST_IF] Wenn ein weiterer Verantwortungsbereich im Task relevant wird, muss die zugehörige Rolle nachgeladen werden.

[MUST_IF] Wenn für eine relevante Rolle eine technologiespezifische Regeldatei über [TECHNOLOGIES.md](../TECHNOLOGIES.md) relevant ist, muss der Agent zusätzlich die allgemeine Regeldatei derselben Rolle lesen.

## Rollenagnostische Leitplanken

[MUST] Regeln für das Rollensystem oder alle Rollen gehören in diese Datei; rollenspezifische Regeln gehören in die passende Rollendatei.

[MUST] Allgemeine Agent-Governance ohne Rollenbezug gehört in [AGENTS.md](../AGENTS.md).

[MUST_IF] Wenn Rollen eingeführt oder entkoppelt werden, müssen bestehende Regeln auf ihren fachlich allgemeinsten Scope klassifiziert werden.

[MUST_NOT] Regeln dürfen nicht allein wegen ihrer historischen Ablage in einer Rollendatei verbleiben.

## Rollen

| Rolle | Regeldatei | Lesen und verwenden, wenn | Zweck |
|---|---|---|---|
| Designer | [DESIGNER.md](designer/DESIGNER.md) | Gestalterische Problemklärung, visuelle Exploration, Prototyping, Designentscheidungen oder Design-Reviews relevant sind. | Technologieübergreifende Designregeln. |
| Developer | [DEVELOPER.md](developer/DEVELOPER.md) | Architektur, Implementierung, Refactoring, Code-Review oder technische Planung relevant sind. | Technologieübergreifende Entwicklungsregeln. |
| Planner | [PLANNER.md](planner/PLANNER.md) | GitHub Issues oder projektweite, Human-freigegebene Implementierungspläne erstellt, fachlich geplant, strukturiert, zerlegt, typisiert, verknüpft, priorisiert oder auf Abschluss geprüft werden. | Leitplanken für Issues und projektweite Phasenpläne. |
| Tester | [TESTER.md](tester/TESTER.md) | Teststrategie, Testentwurf, Testerstellung, Testwartung, Regression, Verifikation oder erforderliche Checks relevant sind. | Technologieübergreifende Testregeln. |

## Codex-Laufzeitabbildung

Für projektweite Implementierungspläne und Acceptance-Gap-Planung ist `Planner` verantwortlich; für graphweite Acceptance und die Bewertung des Status `no-checks-required` ist `Tester` verantwortlich.

[ALLOW_IF] Wenn Delegation im aktuellen Auftrag und in der Laufzeit erlaubt ist und einen konkreten Nutzen hat, darf Verantwortung an `designer`, `planner`, `developer` oder `tester` delegiert werden. Verfügbarkeit allein erzwingt keine Delegation.

[ALLOW_IF] Bei kombinierten Verantwortungen darf der koordinierende Hauptagent die Arbeit sequenziell auf mehrere SubAgents verteilen, sofern jeder Agent nur seinen klar abgegrenzten Verantwortungsbereich übernimmt.

[MUST] Rollen bleiben unabhängige, kombinierbare Verantwortungs- und Qualitätsregelwerke. Die Codex-Zuordnung bildet ihre Ausführung ab und ersetzt oder dupliziert sie nicht.

[MUST] Der aufrufende Agent übergibt Ziel, aktuellen Workflow-Schritt, Issue-/Task-Kontext, Scope, Nicht-Scope, relevanten bereits geladenen Kontext, relevante Dateien oder Artefakte, getroffene Entscheidungen, Constraints und erwartetes Ergebnis.

[MUST] Ein SubAgent gibt Ergebnis, ausgeführte oder ausgelassene Verifikation, Abweichungen, Blocker und den empfohlenen nächsten Schritt oder Verantwortungsbereich kompakt zurück.

[MUST_NOT] Verschiedene SubAgents dürfen nicht unkoordiniert parallel schreibend auf demselben Worktree arbeiten. Parallele Delegation ist auf konfliktfreie Lese-, Analyse- oder Review-Schritte zu begrenzen.

[ALLOW] Der aktuelle Agent darf die relevanten Verantwortungen selbst ausführen; dieselben fachlichen Rollenregeln gelten.
