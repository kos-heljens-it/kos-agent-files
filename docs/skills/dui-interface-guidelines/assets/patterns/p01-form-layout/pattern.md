# P01 Formularlayout

## Status und Zweck

Eigenständiger, gerenderter und geprüfter **Referenzkandidat** für Anordnung und Gruppierung einer Formularansicht. Der fachliche Bezug ist die Vortragserfassung aus den DUI-Übungen; der HTML/CSS-Entwurf ist eine neue Ausarbeitung. Er ist noch keine vom Nutzer bestätigte visuelle Vorgabe für ein bestimmtes Produkt.

Die Referenz ist besonders geeignet, wenn ein Formular viele unterschiedlich lange Labels, fachliche Gruppen und einen eindeutigen Handlungsabschluss benötigt. Sie illustriert 20 Regeln gemeinsam, ohne für jede Regel eine eigene Mini-Komponente einzuführen.

## Ausführen und Dateien

[index.html](index.html) direkt im Browser öffnen. Die Seite benötigt keinen Build, keinen Server und keine externen Schriftarten oder Bibliotheken. Oben lässt sich zwischen Referenz und ausdrücklich gekennzeichnetem Gegenbeispiel wechseln.

- [form-layout.css](form-layout.css): Layout, Abstände, Eingabeelemente und responsive Anpassung.
- [demo.js](demo.js): Variantenwahl, lokale Rückmeldung für Übernehmen und Zurücksetzen.
- [verification.json](verification.json): tatsächlich ausgeführte Prüfungen, Browserstand und Prüfsummen der drei Quelldateien.

Die Beispieldaten bleiben im Formular der geöffneten Seite. Übernehmen aktualisiert ausschließlich die lokale Vorschau. Neuladen stellt die Ausgangsdaten wieder her; es gibt weder eine Serververbindung noch dauerhafte Speicherung.

## Entscheidungen und abgedeckte Regeln

| Regeln | Entscheidung in diesem Muster | Prüfort |
|---|---|---|
| R009-R014 | Eine gemeinsame linke Kante für volle und halbe Felder; gemeinsame Textanfänge und regelmäßige Abstände. Das Grid wird durch tatsächliche Innenabstände ergänzt. | `.fields`, `.field`, gemeinsame Feldpositionen im Desktop-Nachweis. |
| R016 | Der Formularabschluss ist ein klar abgesetzter eigener Bereich. Seine rechte Ausrichtung verändert nicht den linken Lesefluss der Felder. | `.form-actions`. |
| R017-R019, R065 | Vortrag, Person, Ausstattung und Organisation bilden fachliche Gruppen. Labels und zugehörige Felder bleiben nah beieinander. Zwischen den Gruppen liegt mehr Freiraum als zwischen einzelnen Feldern. | `.form-section`, `.section-heading`, `label` und Feld. |
| R022 | Die Hauptgruppen werden durch Freiraum und Überschriften verständlich; sie haben keine einzelnen Kartenrahmen oder Schatten. Eine Linie trennt nur den Formularabschluss, eine weitere den zugewiesenen Termin. | Referenz mit dem Gegenbeispiel vergleichen. |
| R025-R027 | „Vortrag übernehmen“ und „Änderungen zurücksetzen“ beschreiben die jeweilige Handlung. „OK“ und „Abbrechen“ sind ausschließlich im gekennzeichneten Gegenbeispiel vorhanden. | Buttonbeschriftungen und lokales Verhalten. |
| R028, R030-R031 | Bei breiter Ansicht liegt der Abschluss rechts, das Zurücksetzen mit deutlichem Abstand links. Auf schmalen Ansichten stehen die Aktionen in Leserichtung untereinander; der Abschluss bleibt die letzte Aktion. | Desktop- und Mobilansicht; nicht als universelle Plattformregel übernehmen. |
| R066 | Labels stehen oberhalb ihrer Felder. Lange Beschriftungen umbrechen ohne Kürzung; das folgende Feld bleibt eindeutig zugeordnet. | Normaler und verlängerter Text bei 390 px. |
| R067 | Die Laptop-Alternativen sind eine exklusive Radiogruppe. Projektor, Tafel, Fotografieren und Aufzeichnen sind unabhängige Checkboxen. | `fieldset`, `legend`, native Eingabeelemente und ausgeführter Auswahltest. |

Die Gruppenlabels 01 bis 04 unterstützen die sichtbare Gliederung; sie erzwingen keine Bearbeitungsreihenfolge. Die zugewiesenen Termindaten sind eine reine Ausgabe, keine deaktivierten Eingabefelder. Im Dokument stehen sie vor dem Formular; auf breiten Ansichten stehen sie visuell daneben.

## Bewusstes Gegenbeispiel

Das Gegenbeispiel verwendet dasselbe Formular, verändert aber gezielt einige Gestaltungsentscheidungen: wechselnde Feldkanten, rechtsbündige Labels, wiederholte enge Rahmen, zentrierte Gruppenüberschriften und generische, eng benachbarte Aktionen links.

Es ist ein Vergleichsmaterial und keine alternative Sollvorlage. Die Semantik und die Beispieldaten bleiben weitgehend gleich, damit der visuelle Unterschied nachvollziehbar bleibt.

## Bildnachweise

- [Breite Referenz](screenshots/reference-desktop.png): Viewport 1440 × 1100, vollständige Seite.
- [Schmale Referenz](screenshots/reference-mobile.png): Viewport 390 × 844, vollständige Seite.
- [Gegenbeispiel](screenshots/counterexample-desktop.png): Viewport 1440 × 1100, vollständige Seite.
- [Lange Labels](screenshots/reference-long-labels.png): Viewport 390 × 844, zwei absichtlich verlängerte Labels.
- [200 Prozent Textgröße](screenshots/reference-text-200.png): Viewport 768 × 1024, durch CSS verdoppelte Wurzelschriftgröße. Dies ist ein Textgrößentest und kein Nachweis für sämtliche Browser-Zoomverfahren.

Die Screenshots gehören zum durch Prüfsummen bezeichneten Quellstand. Bei einer Änderung an HTML, CSS oder JavaScript die betroffenen Prüfungen und Bildnachweise erneuern.

## Verifikation

Automatisiert ausgeführt mit Playwright und installiertem Microsoft Edge im Headless-Modus:

- Layout bei 1440, 768, 390 und 320 px Breite: kein horizontaler Seitenüberlauf und keine außerhalb der Inhaltsfläche liegenden Controls;
- vorhandene Label-Zuordnung aller Eingabefelder;
- gemeinsame linke Feldkante, rechte Abschlussaktion und stärkere Absetzung zwischen Gruppen;
- lange Labels bei 390 px und 200 Prozent Textgröße bei 768 px;
- Tastaturwechsel vom Titel zur Sprache, exklusive Radiogruppe und unabhängige Checkboxen;
- Übernehmen und Zurücksetzen der Ausgangswerte;
- Kennzeichnung des Gegenbeispiels; keine JavaScript-Fehler oder HTTP-Netzwerkzugriffe.

Die fünf Bildnachweise wurden zusätzlich betrachtet. Die erste Textgrößenprüfung fand ein Überlaufen der Varianten-Navigation; das Umbrechen wurde korrigiert und erneut geprüft. Dieser Stand ist kein vollständiges Accessibility-Audit, keine Geräteabnahme und keine Browsermatrix eines Produktprojekts.

Der Prüflauf liegt im Quellprojekt unter `scripts/verify_p01.cjs`. Er benötigt eine Node-Laufzeit mit verfügbarem `playwright`-Paket und standardmäßig einen installierten Edge. Das Paket enthält die fertigen Nachweise; seine normale Nutzung benötigt diese Testwerkzeuge nicht.

## Übernahme in HTML CSS und Angular

Die fachlichen Gruppen, Labels, Auswahltypen und die Aktionshierarchie übernehmen. Abstände, Farben, Schrift und Layoutübergänge anhand der Tokens und realen Inhalte des Zielprojekts festlegen. Die konkreten Werte und der Grünton dieses Beispiels sind keine allgemeinen DUI-Vorgaben.

Für Angular die bestehende Formular- und Komponentenstruktur verwenden. Die `fieldset`-/`legend`-Beziehungen, eindeutige Feld-IDs und DOM-Reihenfolge erhalten; die bestehenden Bindings und Validatoren mit dem Template verbinden. Den Democode und die Gegenbeispiel-Styles nicht in die Produktlogik kopieren.

Dieses P01-Muster enthält absichtlich keine Angular-Abhängigkeit. Es liefert geprüfte HTML/CSS-Grundlagen; asynchrone Validierung und tatsächliche Angular-Integration werden erst in einem dafür passenden Muster oder Zielprojekt nachgewiesen.
