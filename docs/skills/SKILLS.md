# Skill-Katalog

<!-- Automatisch gepflegt: python scripts/skill_registry.py --write -->

Ein gemeinsamer Katalog für atomare Fähigkeiten und zusammengesetzte Verfahren.
Nur den passenden Skill und seine im aktuellen Schritt benötigten Referenzen laden.
Capabilities nennen Einsatzphasen; Workflows nennen abgedeckte Phasen. Die Listen sind keine Ausführungsreihenfolge.

[Registry-Vertrag](../REGISTRY.md) · [Maschinenkatalog](../registry.json)

| Skill | Phase | Art | Verwendung |
|---|---|---|---|
| [adr-authoring](adr-authoring/SKILL.md) | `design, planning` | `capability` | Dokumentiert wesentliche Architekturentscheidungen mit Kontext, Alternativen, Folgen und echtem Freigabestatus als ADR aus vorhandenen Entscheidungsgrundlagen. |
| [approved-pr-closeout](approved-pr-closeout/SKILL.md) | `integration, acceptance, closeout` | `workflow` | Schließt einen vom User ausdrücklich freigegebenen Pull Request nach geprüftem Merge mit Issue-Acceptance, AC-Pflege und sicherer Branch-Bereinigung ab. |
| [brainstorming](brainstorming/SKILL.md) | `discovery, analysis, design, planning` | `capability` | Entwickelt und vergleicht Lösungsoptionen bei offenen fachlichen oder technischen Richtungsentscheidungen. |
| [bugfix](bugfix/SKILL.md) | `analysis, preparation, planning, implementation, verification, review, integration` | `workflow` | Reproduziert und behebt einen Fehler auf dem aktuellen Branch; from-default erstellt ausdrücklich einen neuen Branch und PR. |
| [c4-modeling](c4-modeling/SKILL.md) | `analysis, design` | `capability` | Entwirft oder aktualisiert C4-Systemkontext L1 und Container L2 mit Mermaid flowchart und subgraph aus geklärten Anforderungen und bekanntem Projektkontext. |
| [code-analysis](code-analysis/SKILL.md) | `analysis, verification, observation` | `capability` | Liest relevanten Code und analysiert Verhalten, Abhängigkeiten oder Fehlerursachen; Modus read erfasst nur Kontext. |
| [code-change-summary](code-change-summary/SKILL.md) | `review, closeout` | `capability` | Erläutert einen abgegrenzten Commit-, Branch-, PR- oder lokalen Änderungssatz als Leseleitfaden für menschliches Code-Review mit Dateiüberblick, Vorher/Nachher, Begründung, Schnittstellen und veränderten Abläufen. |
| [code-diff-review](code-diff-review/SKILL.md) | `review, integration` | `capability` | Prüft einen Diff lesend auf Korrektheit, Scope, Risiken und belegte Notwendigkeit vor der Weitergabe. |
| [code-implementation](code-implementation/SKILL.md) | `implementation` | `capability` | Implementiert geklärtes Verhalten im vereinbarten Scope und prüft den betroffenen Stand. |
| [code-implementation-planning](code-implementation-planning/SKILL.md) | `planning` | `capability` | Plant nicht triviale technische Änderungen mit konkreten Arbeitspaketen, aktuellen Treibern und Verifikation. |
| [code-minimization](code-minimization/SKILL.md) | `implementation` | `capability` | Entfernt nach lokaler Konvergenz unbegründete Änderungsteile, ohne Acceptance, Security oder Invarianten zu schwächen. |
| [code-refactoring](code-refactoring/SKILL.md) | `analysis, planning, preparation, implementation, verification, review, integration` | `workflow` | Verbessert vorhandene Struktur bei nachweisbarem Verhaltenserhalt; secure ergänzt einen beauftragten Branch-/PR-Zyklus. |
| [code-testing](code-testing/SKILL.md) | `preparation, verification, acceptance, observation` | `capability` | Führt gezielte Build-, Unit-, Integrations-, E2E- oder manuelle Prüfungen aus und berichtet echte Evidenz. |
| [commit-history-summary](commit-history-summary/SKILL.md) | `analysis, closeout` | `workflow` | Liest vollständige Commit-/Merge-Historie eines Zeitraums und liefert Rohdaten oder eine fachliche bzw. technische Zusammenfassung. |
| [design-exploration](design-exploration/SKILL.md) | `discovery, design, review` | `workflow` | Koordiniert visuelle Richtungsfindung, Prototyping, Renderprüfung und Design-Handoff. |
| [design-prototyping](design-prototyping/SKILL.md) | `discovery, design` | `capability` | Erstellt leichte renderbare Prototypen für eine offene visuelle oder interaktive Designentscheidung. |
| [design-review](design-review/SKILL.md) | `design, review, acceptance` | `capability` | Bewertet tatsächlich gerenderte Oberflächen und Interaktionen gegen Ziel, Zustände und Designvorgaben. |
| [documentation](documentation/SKILL.md) | `analysis, design, planning, closeout` | `capability` | Erstellt oder aktualisiert beauftragte Projekt- und Nutzerdokumentation aus belastbaren Quellen. |
| [dui-interface-guidelines](dui-interface-guidelines/SKILL.md) | `design, implementation, review, acceptance` | `capability` | Wendet persönliche DUI-Gestaltungsrichtlinien bei UI-Entwurf, HTML/CSS/Angular-Implementierung und Usability-Reviews an; ordnet Bild- und Codereferenzen zu. Für Änderungen an sichtbaren Oberflächen und Interaktionen, nicht für reine Backend-, Build- oder Datenaufgaben ohne UI-Auswirkung. |
| [feature-finish](feature-finish/SKILL.md) | `verification, review, integration` | `workflow` | Finalisiert einen beauftragten Arbeitsbranch mit Verifikation und autorisiertem Merge in den vereinbarten Integrationsbranch. |
| [git-branch-operations](git-branch-operations/SKILL.md) | `preparation, integration, closeout` | `capability` | Erstellt einen Arbeitsbranch oder aktualisiert nach verifiziertem Merge dessen tatsächlichen Zielbranch per Fast-Forward. |
| [git-commit-push](git-commit-push/SKILL.md) | `integration` | `workflow` | Committet und/oder pusht einen geprüften Änderungssatz; commit, push und commit-push bleiben getrennte Modi. |
| [github-issue-ops](github-issue-ops/SKILL.md) | `intake, analysis, planning, acceptance, closeout` | `capability` | Liest GitHub-Issues oder erstellt, typisiert und verknüpft sie im ausdrücklich ausgewählten Operationsmodus. |
| [github-pr-ops](github-pr-ops/SKILL.md) | `review, integration, closeout` | `capability` | Erstellt Pull Requests, beobachtet erforderliche Checks oder führt einen ausdrücklich autorisierten Merge aus. |
| [insight-to-issue](insight-to-issue/SKILL.md) | `intake, analysis, planning` | `workflow` | Überführt eine beauftragte Erkenntnis oder Regelverbesserung in ein abgegrenztes GitHub-Issue. |
| [issue-acceptance-convergence](issue-acceptance-convergence/SKILL.md) | `acceptance, planning, implementation, verification` | `workflow` | Prüft Root und Child-Graph auf PASS, GAP oder BLOCKED; converge behebt nur ausdrücklich beauftragte Gaps. |
| [issue-graph-implementation](issue-graph-implementation/SKILL.md) | `intake, analysis, planning, preparation, implementation, verification, review, integration, acceptance` | `workflow` | Implementiert einen ausführbaren Issue-Graph sequenziell auf einem Branch bis zu einem geprüften finalen Pull Request. |
| [issue-implementation](issue-implementation/SKILL.md) | `analysis, design, planning, preparation, implementation, verification, review, integration` | `workflow` | Implementiert und verifiziert genau eine vereinbarte Arbeitseinheit ohne graphweite Koordination oder PR-Erstellung. |
| [issue-sanitize](issue-sanitize/SKILL.md) | `intake, planning` | `workflow` | Prüft native Issue-Types und Beziehungen eines Graphen und korrigiert eindeutig ableitbare Abweichungen im beauftragten Scope. |
| [issue-to-pr](issue-to-pr/SKILL.md) | `verification, review, integration` | `workflow` | Prüft bereits implementierte Änderungen und bereitet Commit, Push und Pull Request vor; implementiert und mergt nicht. |
| [issue-to-sub-issues](issue-to-sub-issues/SKILL.md) | `analysis, planning` | `workflow` | Zerlegt ein Issue rekursiv oder mit flat in genau eine materialisierte Child-Ebene. |
| [online-publication-check](online-publication-check/SKILL.md) | `verification, observation` | `workflow` | Vergleicht veröffentlichte Rohdateien der konfigurierten GitHub-Pages-Bibliothek mit dem erwarteten Commit. |
| [playwright-testing](playwright-testing/SKILL.md) | `verification, acceptance` | `capability` | Plant, erstellt und verifiziert automatisierte Playwright-Tests für Angular-Nutzerabläufe nach Heljens-Regeln; für E2E-Abdeckung, visuelle Referenzen und die Analyse konkreter Testfehler. |
| [project-design](project-design/SKILL.md) | `discovery, analysis, design, planning` | `workflow` | Führt die erste Gesamtprojektierung von einer Idee, freigegebenen Phase oder einem Epic über Stories, Mermaid-Architektur und ADR bis zu einem prüfbaren Design-Paket und optionalen GitHub-Issues. |
| [project-implementation-planning](project-implementation-planning/SKILL.md) | `discovery, analysis, planning` | `workflow` | Klärt ein projektweites Zielbild und bildet menschlich freigegebene Phasen oberhalb der Epic-Ebene. |
| [release](release/SKILL.md) | `review, integration` | `workflow` | Veröffentlicht den freigegebenen Stand von develop nach main nach der festgelegten Repository-Release-Politik. |
| [repository-baseline-configuration](repository-baseline-configuration/SKILL.md) | `preparation` | `capability` | Prüft oder ergänzt beauftragte Issue-Templates, Dependabot-Konfiguration und Codex-Agent-Vorlagen. |
| [requirements-clarification](requirements-clarification/SKILL.md) | `intake, discovery, analysis, planning` | `capability` | Klärt unklare Ziele, Scope-Grenzen und Akzeptanzkriterien vor Planung oder Umsetzung. |
| [research](research/SKILL.md) | `intake, discovery, analysis, design, planning, observation` | `capability` | Recherchiert aktuelle externe oder repositoryübergreifende Fakten mit prüfbaren Quellen. |
| [sequence-modeling](sequence-modeling/SKILL.md) | `analysis, design` | `capability` | Spezifiziert relevante Nutzer- und Integrationsabläufe als Mermaid-Sequenzen aus vorhandenen Stories, Kriterien und Architekturgrenzen. |
| [user-story-specification](user-story-specification/SKILL.md) | `discovery, planning` | `capability` | Formuliert fachliche User Stories und überprüfbare Akzeptanzkriterien aus geklärtem Scope als Design-Spezifikation vor der GitHub-Erstellung. |
