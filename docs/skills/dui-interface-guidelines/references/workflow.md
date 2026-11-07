# Einbindung in den lokalen Workflow

## Zuständigkeiten

| Verantwortung | Anwendung der DUI-Regeln | Übergabe |
|---|---|---|
| Orchestrator | Relevanten Scope, bestätigte Entscheidungen und passenden bestehenden Workflow bestimmen. | Nur benötigte Regel-IDs, Referenzen und Prüferwartungen weitergeben. |
| Designer | Anordnung, Hierarchie, Aktionsführung und sichtbare Zustände entwerfen und gerendert beurteilen. | Designrichtung, Variantenentscheidung, Zustandsbilder, Regeln und begründete Abweichungen. |
| Developer | Das abgestimmte Verhalten in vorhandenen HTML/CSS/Angular-Strukturen implementieren. | Betroffene Komponenten, umgesetzte Zustände und ausführbare Prüfmöglichkeiten. |
| Tester | Beobachtbares Verhalten sowie den vereinbarten visuellen Umfang prüfen. | Geprüfte Zustände und Umgebungen, tatsächliche Befunde und Nachweise. |

Das sind Verantwortungsbereiche. Ob der Hauptagent sie ausführt oder an vorhandene Custom Agents delegiert, bestimmen die geltenden Rollenregeln der konkreten Laufzeit. Der persönliche Skill installiert keine eigenen Agent-Personas und ändert keine Modellzuordnung.

## Passende Einstiegspunkte

| Bestehender Einstieg | Ergänzung durch diesen Skill |
|---|---|
| `project-design` | Bei einem UI-relevanten Arbeitspaket die betroffenen Regeln als konkrete Akzeptanz- oder Prüfkriterien übernehmen. Architekturdiagramme allein benötigen keinen UI-Review. |
| Heljens `design-exploration` | Die Regeln als Kriterien für Entwurf und Vergleich verwenden; relevante Beispiele auswählen, rendern, betrachten und begründet iterieren. |
| Heljens `design-review` | Tatsächliche sichtbare oder interaktive Ergebnisse anhand der einschlägigen Regeln beurteilen. |
| Heljens Implementierungsworkflow | Bereits bestätigte Designentscheidungen und Referenzen an die technische Umsetzung übergeben. Keine neue globale Planungsrunde auslösen. |
| Lokales `playwright-testing` | Die für den Auftrag relevanten Zustände, Bedienwege und gegebenenfalls visuellen Vergleiche in den bestehenden Prüfplan aufnehmen. |

Diese Anknüpfungen sind lokale Ergänzungen. In einem Heljens-Projekt die geltenden Einstiegsdateien und die für den ausgewählten Schritt nötigen Originalregeln lesen. Der gemeinsame Skill-Katalog und die geltenden Aufrufkonventionen bleiben maßgeblich.

## Ablauf nach Aufgabengröße

Bei einer kleinen Änderung: relevante Regeln lesen, bestehendes Pattern anpassen, passende Sicht- oder Verhaltensprüfung ausführen und das Ergebnis kurz berichten.

Bei einer neuen Ansicht oder wesentlichen Interaktionsänderung:

1. Ziel und entscheidende Zustände klären; Produkt- und Projektvorgaben übernehmen.
2. Wenige einschlägige Regeln und vorhandene Referenzen auswählen.
3. Falls die Designrichtung offen ist, einen leichten Entwurf rendern und beurteilen. Einen Prototyp nicht automatisch als Produktimplementierung behandeln.
4. Die geklärte Ausprägung im vorhandenen Komponenten- und Zustandsmodell umsetzen.
5. Relevante visuelle Eigenschaften und Interaktionen prüfen; gefundene Abweichungen im autorisierten Scope korrigieren.

Vorhandene Freigaben und Prüfergebnisse weiterverwenden, soweit sie zur Änderung passen. Zusätzliche Freigaben nur für tatsächlich neue wesentliche Entscheidungen nach den geltenden Regeln einholen.

## Beispiel einer konkreten Prüfaussage

Statt „DUI-konform“: „Bei einem fehlgeschlagenen Speichern bleibt die Eingabe erhalten; die Fehlermeldung steht am betroffenen Feld und ein erneuter Speicherversuch ist möglich (R072, R082, R085).“

Designreferenz und Screenshot bestätigen nur die jeweils sichtbare Ausprägung. Ein Interaktionstest bestätigt den geprüften Ablauf; eine echte Persistenzprüfung benötigt darüber hinaus den tatsächlich verwendeten Datenpfad.

## Projektkontext

Aktuelle Produktentscheidungen, Themes, Browser und Viewports aus PROJECT.md und den aktuellen Design-/Testartefakten des Zielprojekts lesen. Keine Matrix oder Freigabe aus einem früheren Projekt übernehmen.

## Geprüfte Quellen zur Integration

- [Heljens Rollen](../../../roles/ROLES.md)
- [Heljens Skills](../../SKILLS.md)
- [Heljens Workflows](../../../workflows/WORKFLOWS.md)
- [Heljens Technologien](../../../TECHNOLOGIES.md)
- [Codex lokale Skills](https://learn.chatgpt.com/docs/build-skills)
- [Codex AGENTS.md](https://learn.chatgpt.com/docs/agent-configuration/agents-md)

Die Quellen wurden für diese Einbindung am 29. Oktober 2026 gelesen. Das ersetzt keine spätere Prüfung geänderter projektspezifischer Regeln.
