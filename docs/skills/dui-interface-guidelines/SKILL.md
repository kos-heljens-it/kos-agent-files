---
name: dui-interface-guidelines
description: Wendet persönliche DUI-Gestaltungsrichtlinien bei UI-Entwurf, HTML/CSS/Angular-Implementierung und Usability-Reviews an; ordnet Bild- und Codereferenzen zu. Für Änderungen an sichtbaren Oberflächen und Interaktionen, nicht für reine Backend-, Build- oder Datenaufgaben ohne UI-Auswirkung.
metadata:
  version: "1.0.0"
  schema-version: "2"
  usable_in_phases: "design, implementation, review, acceptance"
  kind: capability
---

# DUI Interface Guidelines

## Aufgabe und Geltung

Die persönlichen DUI-Richtlinien als ergonomische Grundlage für konkrete Oberflächenentscheidungen verwenden. Vorhandene Produktentscheidungen, den Stack und geltende Projektregeln übernehmen. Der Skill ergänzt vorhandene Heljens-Rollen und -Workflows; er definiert keine zusätzliche Rolle oder Slash-Command-Syntax.

Die Regeln sind kontextbezogene Gestaltungsempfehlungen. Ein begründeter Konflikt wird am betroffenen Element gelöst, nicht durch ein pauschales Redesign. Leserichtung, Plattform, Eingabetechnik und fachliche Aufgabe beachten. Ein genehmigtes Dark Theme beispielsweise nicht wegen einer allgemeinen Vorlesungspräferenz abschaffen.

## Einstieg und gezieltes Laden

1. Den vereinbarten UI-Scope, vorhandene Komponenten, Design-Tokens, Projektregeln und bestätigte Referenzen erfassen. Eine kleine Korrektur braucht keine neue Designphase.
2. Im [Schnelleinstieg](references/quick-index.md) den passenden vorhandenen Referenzkandidaten wählen. Für weitere Details nur die betroffenen R-IDs aus [rules-book.txt](references/rules-book.txt) gezielt lesen, beispielsweise mit `rg '^R0(72|8[1-7]) '`. Den vollständigen Katalog nicht automatisch laden oder in Übergaben kopieren.

| Änderung | Relevante Regeln |
|---|---|
| Allgemeine Entscheidungen und Konsistenz | R001-R008 |
| Layout, Gruppierung und Aktionen | R009-R040 |
| Farbe, Typografie und Icons | R041-R064 |
| Formulare, Eingaben und Zielflächen | R065-R080 |
| Rückmeldung, Fortschritt und Prozesskontrolle | R081-R104 |
| Übergänge, Navigation und Modi | R105-R128 |
| Bedienwege, Anpassung und Sprache | R129-R144 |
| Zugänglichkeit und gestalterische Evaluation | R145-R160 |

3. Für Produktivcode zusätzlich [frontend-application.md](references/frontend-application.md) lesen. Technologien und Bibliotheksversionen aus dem Zielprojekt übernehmen.
4. Bei einer rollenübergreifenden Aufgabe [workflow.md](references/workflow.md) lesen. Den aktiven Workflow fortsetzen; keinen zweiten parallelen Freigabeprozess beginnen.
5. Nur beim Auswählen oder Ergänzen von Beispielen [reference-strategy.md](references/reference-strategy.md) und die betroffenen Zeilen in [reference-map.md](references/reference-map.md) laden.

## Anwendung

- Für die konkrete Änderung die entscheidenden Regel-IDs auswählen und in prüfbare Aussagen übersetzen: welches Element, welcher Zustand, welches erwartete Verhalten. Keine ritualisierte Liste aller 160 Regeln führen.
- Gemeinsame Ausrichtungen und Abstände, fachliche Gruppen, konkrete Aktionsnamen, gut treffbare Ziele, lokale Rückmeldung und stabile Orientierung zusammen betrachten.
- Bildreferenzen auf sichtbare Eigenschaften begrenzen. Aus einem Screenshot kein Verhalten, keine semantische Zugänglichkeit und keine serverseitige Speicherung ableiten.
- Codereferenzen an das vorhandene Projekt anpassen. Ein fremdes Beispiel begründet keine neue Abhängigkeit, Framework-Migration oder zusätzliche Produktfunktion.
- Bei Verhalten neben dem Normalzustand die tatsächlich relevanten Lade-, Fehler-, Fokus-, Disabled-, Auswahl- und Erfolgszustände prüfen. Fehlende Referenzen allein blockieren eine ansonsten geklärte Änderung nicht.
- Visuelle Aussagen anhand eines tatsächlich betrachteten Renderings prüfen; Interaktion anhand einer passenden Ausführung. Ohne geeignete Laufzeit diese Grenze konkret benennen. Einen erfolgreichen Build nicht als visuelle Abnahme ausgeben.
- Wesentliche Befunde mit Regel-ID, betroffenem Element und beobachteter Folge begründen. Bei einer Korrektur die relevanten Nachweise wiederholen. Routineprüfungen im Abschluss zusammenfassen.

## Referenzen und Übergabe

Bestätigte projektbezogene Referenzen vor allgemeinen Inspirationsbeispielen verwenden. Ein Beispiel als Inspiration, verworfene Alternative oder festgelegte Projektausprägung kennzeichnen. Fehlende Beispiele nicht als bereits vorhandene Dateien oder bestandene Tests ausweisen.

Der [Schnelleinstieg](references/quick-index.md) verlinkt vorhandene Muster direkt nach Aufgabe. Bei einem passenden Muster zunächst dessen kurze Dokumentation, danach nur benötigte Quell- oder Bilddateien lesen. Arbeitsnotizen sind kompakte Entscheidungshilfen und kein Nachweis einer durchgeführten Prüfung. Beispielwerte und Breakpoints sind keine pauschalen Produktvorgaben.

Für eine größere Übergabe kann [ui-review.md](assets/ui-review.md) verwendet werden. Ein kleiner Fix benötigt kein eigenes Dokument. Die Vorlage dokumentiert nur den vereinbarten Scope und tatsächlich geprüfte Zustände.

Das Paket enthält den transportablen generierten Regelstand mit Herkunft und Prüfsumme in den Referenzdaten. Die lokale Erstellungsumgebung ist keine Laufzeitvoraussetzung. Bei fehlenden Original-PDFs weiterhin mit diesem Regelstand arbeiten; keine erneute PDF-Auswertung vortäuschen.
