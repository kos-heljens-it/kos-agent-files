# Design: {{scope-title}}

## Fortschritt

- Scope-ID: `{{scope-slug}}`
- Status: `DRAFT`
- Betriebsart: `Entwurf` oder `GitHub`
- Zielrepository: {{repository}}
- Phase / bestehendes Epic: {{phase-or-epic}}
- Phasenquelle, eigener Status und Freigabe: {{phase-source-status-approval-or-not-applicable-for-independent-epic}}
- Letzter abgeschlossener Schritt: {{step}}
- Nächster Schritt: {{next-step}}
- Freigabe: {{decision-and-scope-or-pending}}
- Geprüfter Artefaktstand: {{references-or-revision}}

## Ziel und Grenzen

- Zielzustand: {{goal}}
- Scope: {{scope}}
- Nicht-Ziele: {{non-goals}}
- Constraints und bekannte Versionsbasis: {{constraints}}

## Artefakte

| Artefakt | Pfad / erreichbare Referenz | Stand und offene Punkte |
|---|---|---|
| User Stories | {{stories}} | {{status}} |
| C4 L1 / L2 | {{architecture}} | {{status}} |
| Sequenzen | {{sequences}} | {{status}} |
| ADR | {{decisions}} | {{status}} |

## Nachverfolgung

| Story / Kriterium | Designreferenzen oder begründete Nicht-Erforderlichkeit | Geplante Verifikation | GitHub-Issue nach Materialisierung |
|---|---|---|---|
| {{story-id}} / {{criterion-id}} | {{c4-sequence-adr}} | {{verification-plan}} | {{issue-url-or-not-yet-materialized}} |

Produktkriterien sind hier geplant und noch nicht als erfüllt nachgewiesen.

## Prüfungen und Freigaben

- Ausgeführte Syntax-/Sichtprüfungen: {{actual-checks}}
- Offene Prüflücken: {{gaps}}
- Human-Entscheidungen mit Umfang und Bezug: {{approvals}}

## Offene Fragen und Blocker

{{questions-and-blockers-or-none}}

## Materialisierung

- Auftrag / Autorisierung: {{authorization-or-pending}}
- Tatsächlich zurückgelesene Epic-/Story-/Task-URLs: {{issues-or-none}}
- Ergebnis der Graph-/Terminalitätsprüfung: {{result-or-not-run}}

Die Platzhalter beim Erzeugen des konkreten Artefakts ersetzen. Keine offenen Entscheidungen als bestätigte Werte einsetzen. Designstatus und Phasenstatus sind getrennte Aussagen; vor der GitHub-Übergabe einer Phase sind deren eigenes `READY`, Freigabe und kanonischer Phasenvertrag erforderlich.
