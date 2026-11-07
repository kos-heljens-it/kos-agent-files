# Heljens-Übergabe

## Quellen und Zuständigkeiten

Die veröffentlichten Regeln bleiben maßgeblich. Bereits vollständig und ausreichend aktuell geladene Fassungen nach deren Wiederverwendungsregel nutzen. Bei nötigem Neuabruf Dokumenttitel nennen; scheitert der Webabruf, einen verfügbaren Shell-Abruf versuchen. Bleibt eine notwendige Quelle unerreichbar, den betroffenen Schritt mit konkretem Grund stoppen.

| Schritt | Vollständig lesen, wenn ausgewählt |
|---|---|
| Einstieg und Lookup | [AGENTS.md](../../../AGENTS.md), [ROLES.md](../../../roles/ROLES.md), [SKILLS.md](../../SKILLS.md), [WORKFLOWS.md](../../../workflows/WORKFLOWS.md), `PROJECT.md` des Zielrepositories; Kataloge und Rollen nur soweit für Auswahl und Schritt erforderlich |
| Offenes projektweites Ziel | [Project Implementation Planning](../../project-implementation-planning/SKILL.md) |
| Unklare Anforderungen | [Anforderungsklärung](../../requirements-clarification/SKILL.md) |
| Tragfähige Alternativen | [Brainstorming](../../brainstorming/SKILL.md) |
| Fehlende externe Fakten | [Research](../../research/SKILL.md) |
| Bekannter technischer Bestand | [Code Reading](../../code-analysis/SKILL.md), bei nötiger Bewertung [Code Analysis](../../code-analysis/SKILL.md) |
| Epic-Materialisierung | [GitHub Issue Erstellen](../../github-issue-ops/SKILL.md), [Type Setting](../../github-issue-ops/SKILL.md), bei tatsächlicher Beziehung [Relationship Setting](../../github-issue-ops/SKILL.md) |
| Issue-Baum | [Issue To Sub Issues](../../issue-to-sub-issues/SKILL.md), dessen ausgewählte Teilworkflows und Skills |
| Technischer Leaf-Task | [Code Implementierungsplanung](../../code-implementation-planning/SKILL.md), [Task-Issue-Vertrag und Templates](../../../github/ISSUE_TEMPLATES.md) |

Die relevante Rolle aus dem Lookup bestimmen. Fachliche Phasen-/Issue-Planung gehört zum Planner; technische Architektur zum Developer; eine fachliche Teststrategie zum Tester. Technische Diagramme allein aktivieren keine Designer-Rolle. Technologie-Mappings nur für bereits relevante Rollen und den tatsächlichen Zielstack laden.

## Lokale Erweiterung

`project-implementation-planning` endet mit freigegebenen großen Phasen. `project-design` schließt danach eine separate Designrunde mit Anforderungsspezifikationen und Architektur an. Vor GitHub entstehen fachliche US-/AC-IDs, noch keine native Issue-Hierarchie und keine vorgezogene technische Task-Mikroplanung.

Der ursprüngliche Phase-zu-Epic-Vertrag bleibt bei der Materialisierung erhalten: eine ausgewählte freigegebene Phase entspricht einem Epic. Vor ihrer Materialisierung den vollständigen kanonischen Phasenvertrag aus `project-implementation-planning` laden und prüfen. Die Phase muss selbst `READY` und freigegeben sein; Quelle und Freigabekontext dokumentieren. Das Design-`READY` ersetzt diese Prüfung nicht. Ein unabhängig bestehendes Epic benötigt keinen erfundenen Phasenursprung. Der technische Issue-Baum wird danach mit `issue-to-sub-issues` gebildet. Das Design-Paket liefert zusätzlich geklärte Anforderungen und Architekturentscheidungen als Kontext. Diese Erweiterung gilt nur im beauftragten Design-Scope und begründet keine GitHub-Schreibberechtigung.

`flat` bedeutet beim bestehenden `/sub-issues` eine materialisierte Child-Ebene. Es ist kein Entwurfsmodus. `github-issue-ops` (Modus `create`) erstellt tatsächlich Issues. Diese Schritte nicht während einer reinen Designrunde ausführen.

## Übergabevertrag für GitHub

Übergeben:

- exakt bezeichnetes Zielrepository und bestehendes Epic oder freigegebene Phase;
- bei einem Phase-Epic die Phasenquelle mit eigenem `READY`, erfülltem Phasenvertrag und tatsächlicher Freigabe;
- Ziel, Scope, Nicht-Ziele und bestätigte Entscheidungen samt Freigabekontext;
- User Stories und vollständige Akzeptanzkriterien mit stabilen Spezifikations-IDs;
- relevante C4-/Sequence-Referenzen, ADR und verfügbare Versionen;
- bekannten technischen Repository-Kontext für `code-implementation-planning`;
- geplante Verifikation, bekannte Blocker und ausdrücklich vereinbarte Spikes;
- bestehende Issue-URLs und Kriterienzuordnungen bei Wiederaufnahme;
- konkrete Autorisierung für die externe Materialisierung.

Der aufrufende Agent prüft anschließend tatsächliche Types, Beziehungen, Kriterienabdeckung und Task-Terminalität. Lokale Entwurfsprüfung ist kein Nachweis erfüllter Produktkriterien. Globale Regeln nicht in Issue-Bodies kopieren.
