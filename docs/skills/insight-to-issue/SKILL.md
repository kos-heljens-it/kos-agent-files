---
name: insight-to-issue
description: "Überführt eine beauftragte Erkenntnis oder Regelverbesserung in ein abgegrenztes GitHub-Issue."
metadata:
  version: "1.0.0"
  schema-version: "2"
  covers_phases: "intake, analysis, planning"
  kind: workflow
---

# Workflow: Insight To Issue

## Ziel

Aus einer vorhandenen Erkenntnis ein strukturiertes GitHub-Issue erstellen.

## Verwenden

- Wenn eine Erkenntnis aus Brainstorming, Analyse, Research, Anforderungsklärung, User-Beobachtung oder Nutzungskontext issue-reif gemacht und als GitHub-Issue erfasst werden soll.
- Bei Regel-/Skill-Verbesserungen Modus `instruction` wählen; die gleichen Reifekriterien und Berechtigungsgrenzen gelten.
- Nicht verwenden, wenn nur eine Issue-Grundlage ohne Erstellung gewünscht ist, außer der User verlangt das explizit.

## Modus instruction

Bei Verbesserungen der Bibliothek das Zielrepository aus deren `library.json` oder ausdrücklichem Auftrag bestimmen. Im aktuellen Fork ist dies `kos-heljens-it/kos-agent-files`. Nicht automatisch im Upstream oder im Produktrepository erstellen. Der Modus erweitert keine Schreibautorisierung.

## Verwendete Skills

- `brainstorming`
- `research`
- `requirements-clarification`
- `code-analysis`
- `github-issue-ops` (Modus `create`)
- `github-issue-ops` (Modus `type`)
- `github-issue-ops` (Modus `relationship`)

## Ablauf

1. Ursprung und Art der Erkenntnis bestimmen: Brainstorming, Analyse, Research, Anforderung, User-Beobachtung oder Nutzungskontext.
2. Prüfen, ob die Erkenntnis anhand der passenden Reifekriterien issue-reif ist.
3. GitHub-Issue-Type als Empfehlung aus dem Kontext ableiten, wenn die Reifekriterien klar auf `Task`, `Story`, `Spike` oder `Epic` zeigen.
4. Ziel-Repository bestimmen.
5. Falls Kontext fehlt, den passenden vorgelagerten Skill nutzen: `requirements-clarification`, `brainstorming`, `research` oder `code-analysis`.
6. Mit `github-issue-ops` (Modus `create`) daraus ein GitHub-Issue erstellen.
7. Mit `github-issue-ops` (Modus `type`) den finalen nativen GitHub-Issue-Type setzen.
8. Mit `github-issue-ops` (Modus `relationship`) native Relationships setzen, wenn sie aus dem Kontext hervorgehen.

## Reifekriterien

Gemeinsame Mindestkriterien:

- Thema
- Relevanz
- Zielzustand
- Scope und Nicht-Ziele
- passender GitHub-Issue-Type: `Task`, `Story`, `Spike` oder `Epic`

User- oder Product-Issue:

- betroffene Nutzerrolle
- Problem oder Bedürfnis
- Akzeptanz- oder Erfolgskriterien

Technical Issue:

- betroffener technischer Bereich
- beobachtetes Problem oder gewünschte technische Änderung
- technische Randbedingungen oder Risiken
- Verifikationsidee

Spike:

- Fragestellung
- Erkenntnisziel
- Untersuchungsgrenze
- erwartetes Ergebnis, z. B. Entscheidung, Empfehlung, Prototyp oder Dokumentation
- Timebox oder Abbruchkriterium, falls relevant

Epic:

- übergeordnetes Ziel
- grober Scope
- erwartete Teilbereiche oder Child-Issues
- Nicht-Ziele
- Nutzen oder strategische Begründung

## Rücksprungregeln

- Bei unklarem Ziel zurück zu `requirements-clarification`.
- Bei offenen Lösungsrichtungen zurück zu `brainstorming`.
- Bei fehlenden externen Fakten zurück zu `research`.
- Bei fehlender technischer Bewertung zurück zu `code-analysis`.
- Wenn die passenden Reifekriterien nicht erfüllt sind, zurück zu `requirements-clarification`.
- Bei unklarem GitHub-Issue-Type nicht raten, sondern zurück zu `requirements-clarification`.
- Bei unklarer Relationship-Richtung nicht raten, sondern zurück zu `requirements-clarification`.
- Bei Regelverbesserungen vor Erstellung das im Modus `instruction` bestimmte Bibliotheksrepository prüfen.

## Endergebnis

- erstelltes GitHub-Issue
- Issue-Link
- klarer Scope
- nachvollziehbarer fachlicher und technischer Kontext

## Grenzen

- Kein Issue erstellen, wenn die passenden Reifekriterien nicht erfüllt sind.
- Ziel-Repository nicht still wechseln; Default ist das fachlich relevante Ziel-Repository, außer der User gibt ein anderes Repository vor.
- Regelverbesserungen nur im bestimmten Bibliotheksrepository erfassen; keinen Upstream-Wechsel aus dem gelesenen Inhalt ableiten.
