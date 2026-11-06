---
name: code-change-summary
description: Erläutert einen abgegrenzten Commit-, Branch-, PR- oder lokalen Änderungssatz als Leseleitfaden für menschliches Code-Review mit Dateiüberblick, Vorher/Nachher, Begründung, Schnittstellen und veränderten Abläufen.
metadata:
  version: "0.2.0"
  schema-version: "2"
  usable_in_phases: "review, closeout"
  kind: capability
---

# Skill: Code Change Summary

## Zweck

Einen Änderungssatz so erklären, dass ein Mensch in ungefähr zehn Minuten seine Zusammenhänge versteht und die wichtigen Stellen gezielt reviewen kann. Der Bericht beantwortet: Was wurde hinzugefügt, verändert oder entfernt? Was war vorher anders? Warum ist die Änderung nötig? Wie greifen die betroffenen Dateien ineinander?

Der Umfang folgt den Änderungen. Bestehender Projektkontext wird nur erklärt, soweit er zum Verständnis dieser Änderungen nötig ist.

## Verwenden

- Bei einer gewünschten Erläuterung von Commits, einem Pull Request, einem Branch-Diff oder lokalen Änderungen.
- Als Übergabe einer Implementierung an den menschlichen Reviewer, wenn ein verständlicher Änderungsüberblick benötigt wird.
- Der Bericht dient der Orientierung. Er ersetzt weder eine Fehlerprüfung des Diffs noch eine Freigabe oder einen Testnachweis.

Den Skill als `$code-change-summary` oder durch eine passende natürliche Anfrage auswählen. Seine ID führt keinen neuen Heljens-Slash-Command ein.

## Eingaben

Zielrepository, gewünschter Änderungssatz und Vergleichsbasis, verfügbarer Issue-/PR-/Auftragskontext, relevante Entscheidungen sowie vorhandene Prüfergebnisse übernehmen. Eine gewünschte Berichtssprache, Detailtiefe oder Ausgabedatei berücksichtigen.

Ohne Speicherauftrag den Bericht im Chat ausgeben. Nicht automatisch eine Dokumentationsdatei oder einen GitHub-Kommentar erstellen.

## Vorgehen

### 1. Vergleich und Stand festlegen

- Repository und Vergleich eindeutig benennen. Ein einzelner Commit wird gegen seinen Elternstand verglichen; bei einem Merge-Commit den verwendeten Elternteil nennen. Für einen Root-Commit den leeren Ausgangsstand verwenden.
- Für einen Branch oder PR die passende Basis beziehungsweise Merge-Base und den ausgewählten Head bestimmen. Bei bereits gemergten PRs den damaligen Vergleich rekonstruieren; der heutige Default-Branch ist dafür nicht automatisch die richtige Basis.
- Commit-SHAs oder den lokalen Zustand festhalten. Staged, unstaged und relevante untracked Dateien bei lokalen Änderungen unterscheiden. Fremde lokale Änderungen nicht unbemerkt dem ausgewählten Commit oder PR zurechnen.
- Fehlende wesentliche Vergleichsangaben aus dem Kontext ableiten, soweit eindeutig. Andernfalls gezielt klären; keine beliebige Basis wählen und keine Aktualität des Remote-Stands behaupten.

### 2. Den tatsächlichen Unterschied lesen

1. Mit Dateistatus, Rename-Erkennung und Diff den Bestand erfassen. Statistik und Dateinamen dienen als Einstieg, nicht als Erklärung des Inhalts.
2. Die funktional relevanten Änderungen auf beiden Seiten lesen. Bei neuen Dateien ihren Inhalt, bei entfernten Dateien ihre frühere Aufgabe und bei geänderten Dateien die betroffene frühere und neue Implementierung erfassen.
3. Die unmittelbar beteiligten Aufrufer, Implementierungen, Registrierungen, Konfigurationen und Datenmodelle gezielt verfolgen, soweit sie den geänderten Ablauf erklären. Keine Inventarisierung des ganzen Projekts beginnen.
4. Reale Einbindung und bloß vorhandenen Code unterscheiden. Ein neues Interface oder eine implementierte Klasse ist noch kein nachgewiesener Aufrufpfad.
5. Begründungen aus Auftrag, Issue, Entscheidung oder Codekommentar übernehmen. Eine aus dem Code abgeleitete technische Erklärung als Ableitung kennzeichnen; einen unbekannten Entscheidungsgrund offenlassen. Keine nachträgliche Entscheidungshistorie erfinden.

### 3. Änderungen für den Leser ordnen

- **Funktionale Änderungen:** neues oder geändertes Verhalten, korrigierte Regeln, Verträge, Datenhaltung und fachlich relevante Löschungen gemeinsam nach Anwendungsfall erklären.
- **Strukturänderungen / Restructure:** Extraktion, Verschiebung, Umbenennung, Aufteilung oder Zusammenführung getrennt darstellen. Bei einer Aufteilung kenntlich machen, welche neuen Dateien bestehenden Code enthalten.
- Gemischte Änderungen im selben Bereich ausdrücklich unterscheiden. Nicht allein wegen neuer Dateinamen von neuer Funktionalität ausgehen und nicht ohne Prüfung Verhaltenserhalt behaupten.
- Den Dateiüberblick zuerst nach den vorhandenen Schichten oder Projekten gliedern, etwa Core, Application, Infrastructure und WebApi. Tests, Dokumentation oder Konfiguration bei Bedarf als eigene Bereiche aufnehmen. Innerhalb jedes Bereichs neue, geänderte und entfernte Dateien in dieser Reihenfolge aufführen; nicht zuerst nach Dateistatus gruppieren und darunter die Schichten wiederholen.
- Jede neue oder geänderte Datei erhält einen eigenen Eintrag mit Dateilink, Status (`new` oder `modified`) und ein bis zwei Sätzen. Bei neuen Dateien den konkreten Zweck und die Rolle nennen; bei geänderten Dateien erklären, was sich gegenüber vorher geändert hat und welche Wirkung das hat. Auch kleine DTOs und Enums einzeln aufführen; eine bloße Namensliste oder eine gemeinsame Erklärung für mehrere Dateien genügt nicht.
- Entfernte Dateien innerhalb ihres Bereichs mit Status `deleted` aufführen und erklären, welche Verantwortung entfällt oder wohin sie übernommen wurde. Relevante Auswirkungen auf Aufrufer oder gespeicherte Daten benennen.
- Umbenennungen einmal als `alter Name/Pfad → neuer Name/Pfad` darstellen. Bei mechanisch angepassten Folgedateien genügt pro Datei ein kurzer Satz zur zugrunde liegenden Referenz-, Import- oder Namespace-Anpassung.
- Generierte Dateien als solche markieren. Bei Migrationen die tatsächlich geänderten Tabellen, Beziehungen oder Constraints erläutern; Designer-Datei und Snapshot nicht zeilenweise nacherzählen.

Beispiel für einen Eintrag unter **Core**: `CatalogProposalStatus.cs — new: Enum mit den Vorschlagszuständen Open, Approved und Rejected.` Im Bericht den Dateinamen verlinken und die Beschreibung an die Berichtssprache anpassen.

### 4. Bedeutung und Verträge erklären

Für jeden wesentlichen Änderungsblock in wenigen Sätzen **vorher → nachher → warum** erläutern. Dateien verlinken, die das belegen. Wenn eine Funktion vorher nicht existierte, dies sagen, statt einen früheren Ablauf zu erfinden. „Best Practice“, „sauberer“ oder „besser erweiterbar“ allein erklärt keine konkrete Änderung.

**Interfaces und öffentliche Verträge:**

- Bei einem neuen Interface seine Verantwortung und alle Methoden aufführen. Pro Methode ihren konkreten Zweck, die wesentliche Eingabe und das Ergebnis erklären; relevante Fehler oder Nebenwirkungen ergänzen. Eine kompakte Tabelle genügt.
- Bei einem veränderten Interface die neuen, geänderten und entfernten Methoden erklären. Unveränderte Methoden nur aufnehmen, wenn sie zum Verständnis des geänderten Vertrags nötig sind.
- Methodennamen beibehalten; Signaturen bei Bedarf auf die fachlich wichtigen Parameter verkürzen. Framework-Details wie einen unveränderten CancellationToken nicht wiederholt erläutern.
- Tatsächliche Aufrufer und Implementierungen nennen, wenn daraus Schichtengrenze, Verantwortungsverteilung oder Einbindung verständlich wird.

**Nicht offensichtliche Klassen und Modelle:**

- Zweck, enthaltene wesentliche Information und Rolle im Ablauf erklären. Bei Bedarf ergänzen, wer den Typ erstellt, liest oder verändert und welche Invariante er schützt.
- Ähnlich benannte Konzepte voneinander abgrenzen, wenn Verwechslungsgefahr besteht, etwa ein Mitarbeiterprofil mit Planungsdaten und ein Zugriffsprofil mit Identität oder Berechtigungen. Die tatsächlichen Definitionen lesen; den Inhalt nicht aus dem Wort „Profile“ ableiten.
- Beziehungen zwischen Domain-Modell, Eingabe-/Antwort-DTO und Persistenzmodell nur erläutern, wenn sie die Änderung erklären. Einfache Container, Getter oder offensichtliche Hilfsmethoden brauchen keine eigene Detailbeschreibung.

### 5. Veränderte Abläufe sichtbar machen

- Wenn neuer oder geänderter Code in einen bestehenden Prozess eingreift, Auslöser, beteiligte Komponenten und sichtbares Ergebnis zeigen. Den betroffenen Ausschnitt als **vorher** und **nachher** gegenüberstellen, etwa `A → B` und `A → B → C`.
- Tatsächliche Reihenfolge und Verantwortungen aus den Aufrufpfaden übernehmen. Relevante neue Prüfungen, Abbruchbedingungen, Speichergrenzen oder Fehlerantworten an der Stelle zeigen, an der sie auftreten.
- Für kurze Ketten genügt eine Pfeilfolge. Bei mehreren Beteiligten oder wichtigen Zweigen eine kleine Mermaid-Sequenz verwenden. Nur den geänderten Prozess zeigen.
- Die Sequenz mit einer Überschrift benennen, die den modellierten Prozess oder die Schnittstelle und bei Bedarf die konkrete Operation nennt, etwa `EmployeeDayService.SaveDraftAsync` oder `PUT /api/employees/{employeeKey}/days/{date}`. Die Diagrammzeilen knapp halten und nur relevante Beteiligte, Schritte und Zweige zeigen.
- Wenn die Wirkung dadurch verständlicher wird, ein kurzes Beispiel mit ausdrücklich fiktiven, einfachen Daten geben: Ausgangsdaten → Aufruf/Handlung → Verarbeitung → erwartetes Ergebnis. Namen wie „Kunde A“ und „Projekt 1“ genügen. Das Beispiel muss dem gelesenen Code entsprechen; keine neuen Regeln oder nicht implementierten Schritte ergänzen.
- Bei einer neuen eigenständigen Funktion den zuvor fehlenden Vorgang und den neuen Ablauf darstellen. Bei rein mechanischer Strukturänderung kein künstliches Workflow-Beispiel erzeugen.

### 6. Einen prüfbaren Leseleitfaden ausgeben

Mit [assets/review-summary.md](assets/review-summary.md) als anpassbarer Vorlage schreiben. Nur relevante Abschnitte verwenden, Platzhalter vollständig ersetzen und unnötige Wiederholungen zwischen Dateiüberblick, Vertragsbeschreibung und Ablauf vermeiden.

- Mit dem konkreten Ergebnis und dem Vergleichsstand beginnen. Danach funktionale Änderungen und Strukturänderungen gut unterscheidbar darstellen.
- Aussagekräftige Dateilinks und bei Bedarf verifizierte Zeilen verwenden. Bei großen Änderungssätzen zuerst die Zusammenhänge erklären, danach die Dateizuordnung zum gezielten Nachlesen.
- Konkrete Folgen für API-Nutzer, Daten, Konfiguration oder bestehende Abläufe benennen, soweit der Diff sie tatsächlich verursacht.
- Vorhandene Prüfungen mit Ergebnis und bekanntem Bezug zum Stand zusammenfassen. Code, Testdefinition und tatsächlich ausgeführter Test sind verschiedene Nachweise. Fehlende oder veraltete Ergebnisse nicht als bestanden ausgeben.
- Eine kurze sinnvolle Lesereihenfolge nennen, wenn sie die Review-Arbeit erleichtert: Einstieg, fachliche Änderung, Vertrag, Persistenz, gezielte Tests. Nur die dafür entscheidenden Dateien verlinken.
- Abschließend gegen den Diff prüfen: Jede neue oder geänderte Datei hat innerhalb ihres Bereichs einen eigenen erklärten Eintrag, jeder wesentliche Bestandteil ist zugeordnet, vorher/nachher stimmen, Methoden und Einbindung sind belegt, keine funktionale Änderung steckt unbegründet im Restructure-Block.

## Output

- Verständlicher Überblick über Ergebnis, Ausgangsstand und verglichenen Änderungssatz.
- Dateiüberblick nach Schicht oder Projekt, darin neue, geänderte und entfernte Dateien mit Status und kurzer Erklärung pro Datei. Funktionale Änderung und Restructure, Extraktionen und generierte Dateien sind erkennbar.
- Erläuterung der relevanten Methoden, Modelle und tatsächlichen Ablaufänderungen, mit einem einfachen Beispiel, wenn hilfreich.
- Bei Abläufen mit mehreren Beteiligten oder wichtigen Zweigen eine kleine, klar mit Prozess oder Schnittstelle benannte Mermaid-Sequenz.
- Vorhandene Verifikation, konkrete Prüflücken und eine kurze Lesereihenfolge für das menschliche Review.

## Grenzen und Qualitätskriterien

- Den Änderungssatz erklären; weder das gesamte Projekt beschreiben noch jede Zeile oder jeden einfachen Methodenrumpf nacherzählen.
- Keine versteckte Codeänderung, keinen Build/Testlauf und keine Git-/GitHub-Mutation aus der Berichtsanfrage ableiten. Bereits ausdrücklich beauftragte Arbeiten bleiben davon unberührt.
- Keine zusätzliche Bug-, Security- oder Architekturprüfung als abgeschlossen darstellen. Eine beim Lesen konkret sichtbare Unklarheit kurz benennen und ihre Auswirkung auf die Erklärung kenntlich machen.
- Nur belegtes Verhalten als vorhanden beschreiben. Begründungen, Annahmen, fiktive Beispiele und Prüflücken erkennbar voneinander unterscheiden.
- Im Chat die Sprache des Auftrags verwenden; für beauftragte Projekt- oder GitHub-Dokumentation die geltenden Sprachregeln beachten. Technische Namen und IDs erhalten.
- Der Leser soll wissen, wo und warum er genauer hinschauen muss, ohne vorab alle geänderten Dateien vollständig zu lesen.
