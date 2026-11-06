---
name: user-story-specification
description: Formuliert fachliche User Stories und überprüfbare Akzeptanzkriterien aus geklärtem Scope als Design-Spezifikation vor der GitHub-Erstellung.
metadata:
  version: "0.2.0"
  schema-version: "2"
  usable_in_phases: "discovery, planning"
  kind: capability
---

# Skill: User Story Specification

## Zweck

Geklärte Anforderungen in eigenständig verständliche Nutzer- oder fachliche Szenarien mit überprüfbaren Kriterien überführen. Das Ergebnis dient der Architektur und der späteren Issue-Zerlegung.

## Verwenden

- Nach einer ausreichend geklärten Zielvorstellung oder für den vereinbarten Scope einer Phase/eines Epics.
- Für Spezifikationsentwürfe im Chat oder in einem beauftragten Design-Artefakt.
- GitHub-Erstellung und technische Task-Zerlegung werden durch die nachgelagerten Heljens-Workflows gesteuert.

## Eingaben

Bekannten Kontext übernehmen: Ziel und Nutzen, Nutzerrollen, Scope und Nicht-Ziele, Constraints, vorhandene Stories, bestätigte Entscheidungen und relevante Erfolgskriterien. Fehlende Quellinformationen durch den aufrufenden Agenten bereitstellen lassen.

## Vorgehen

1. Ziel, Grenzen und Nutzerrollen auf ausreichende Klarheit prüfen. Bei wesentlichen Lücken Heljens [Anforderungsklärung](../requirements-clarification/SKILL.md) mit ihrem vollständigen Regelwerk verwenden. Vorliegende Freigaben und Annahmen unterscheidbar übernehmen.
2. Bestehende passende Stories wiederverwenden. Fachliche Ziele so schneiden, dass jede Story genau ein verständliches Ergebnis beschreibt; keine künstliche Zieltiefe oder technische Schichtliste erzeugen.
3. Je Story stabile IDs wie `US-001` und Kriterien-IDs wie `US-001-AC-01` vergeben. Bestehende IDs bei Überarbeitung erhalten; eine zusammengelegte oder entfernte Story mit ihrer Nachfolgerzuordnung dokumentieren.
4. Rolle, gewünschte Fähigkeit und Nutzen formulieren. Für rein fachliche/systembezogene Anforderungen eine natürliche Form wählen, ohne eine erfundene Nutzerrolle einzuführen.
5. Kontext, Scope, Nicht-Ziele, wesentliche Constraints und prüfbare Kriterien ergänzen. Relevante Fehlerfälle, Rechte und Qualitätsanforderungen nur aus dem tatsächlichen Auftrag ableiten. Messbare Anforderungen mit ihren bekannten Bedingungen und Schwellenwerten angeben; unbekannte Werte als offene Entscheidung markieren.
6. Für szenarische Kriterien `Gegeben / Wenn / Dann` verwenden, wenn dies die Prüfung präzisiert. Eine einfache überprüfbare Bedingung braucht keine künstliche Gherkin-Struktur. Pro Kriterium die mögliche spätere Verifikation nennen; keine bereits erfüllte Acceptance behaupten.
7. Prüfen, dass der vereinbarte Scope abgedeckt ist und Stories sich nicht semantisch duplizieren. Anforderungen nicht durch gewählte technische Lösungen ersetzen. Betroffene Designentscheidungen als Referenzen oder offene Fragen erfassen.
8. Mit [assets/story.md](assets/story.md) im vom Aufrufer beauftragten Artefakt speichern oder im angeforderten Chat-Format ausgeben. Im `project-design`-Workflow ist der Zielpfad `docs/design/<scope>/stories.md`.

## Output

- Stabile Stories und Kriterien mit Ziel, Nutzen, Kontext, Grenzen und geplanter Verifikation.
- Zuordnung zum übergeordneten Scope und bekannte offene Fragen.
- Änderungen bestehender IDs mit Nachfolgerzuordnung, falls erforderlich.
- Entwurfs-/Freigabekontext, wenn er vom Aufrufer vorliegt.

## Grenzen und Qualitätskriterien

- Keine GitHub-Issues erstellen, Types setzen oder Relationships ändern.
- Keine Umsetzung, API-Endpunkte, Dateipfade oder technischen Arbeitspakete erfinden.
- Wesentlich offene Ziele oder Constraints nicht als bestätigte Anforderungen ausgeben.
- Kriterien müssen beobachtbar sein und sich auf das jeweilige Ziel beziehen. Wörter wie „schnell“ oder „sicher“ ohne konkrete Anforderung präzisieren oder als offen kennzeichnen.
- Die Struktur ist mit dem [Heljens-Story-Template](../../github/issue-templates/story.yml) vereinbar; das Template ist keine Erlaubnis zur GitHub-Erstellung.
- Deutsch formulieren; technische IDs unverändert erhalten. Bei eigenständigem Aufruf Dateien nur im angeforderten Artefaktscope ändern.
