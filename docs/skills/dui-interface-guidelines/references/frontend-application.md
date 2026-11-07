# Anwendung in HTML CSS und Angular

## Vom Prinzip zur Implementierung

| Regelbereich | HTML | CSS | Angular und Verhalten | Sinnvoller Nachweis |
|---|---|---|---|---|
| R009-R024 Ausrichtung und Gruppen | Fachlich zusammengehörige Inhalte gemeinsam strukturieren; Beschriftung und Feld zuordnen. | Bestehendes Grid/Flex-Layout, gemeinsame Kanten, Grundlinien und Abstandstokens verwenden. | Bedingte Inhalte so einfügen, dass die Umgebung nachvollziehbar bleibt. | Rendering mit kurzen und langen Labels sowie schmaler und breiter Ansicht. |
| R025-R040 Aktionen und Erkennbarkeit | Echte Buttons für Aktionen und Links für Navigation verwenden; konkrete Namen und passenden Buttontyp setzen. | Interaktive Elemente, Auswahl und Inaktivität deutlich darstellen. | Verfügbarkeit und Auslösung an den fachlichen Zustand koppeln. | Screenshot plus tatsächliches Auslösen der Aktion. |
| R041-R056 Farbe und Text | Sinnvolle Textstruktur und Überschriften verwenden. | Vorhandene Typografie-, Farb- und Theme-Tokens anwenden; Lesbarkeit und Textvergrößerung beachten. | Vom Projekt unterstützte Themes und Einstellungen übernehmen. | Tatsächlich gerenderte unterstützte Themes; lange Inhalte und Vergrößerung betrachten. |
| R057-R064 Icons | Bildliche Aktionen textlich benennen; dekorative Zeichen von bedeutungstragenden unterscheiden. | Vorhandenen Iconsatz und konsistente optische Größen verwenden. | Tooltip oder eingeblendete Hilfe ergänzend behandeln; Bedeutung nicht nur darüber vermitteln. | Sichtprüfung sowie Prüfung der Benennung mit den vorhandenen Zugänglichkeitstools. |
| R065-R080 Eingaben und Zielflächen | Native passende Eingabeelemente und eine eindeutige Label-Zuordnung verwenden. | Bedienbare Flächen und Abstände prüfen; Vergrößerung darf keine Nachbaraktion überlagern. | Bestehende Forms-Struktur nutzen; gültige Varianten tolerieren, Eingaben erhalten und Abhängigkeiten explizit behandeln. | Korrektur einer Fehleingabe, Tastaturablauf und gezielte Randfälle ausführen. |
| R081-R104 Rückmeldung und Prozesse | Meldung und Handlung im passenden Kontext zugänglich machen. | Feldnahe Rückmeldung, klare Lade- und Erfolgszustände darstellen. | Warten, Erfolg und Fehler unterscheiden; erneuten Versuch, Pause oder Abbruch nur anbieten, wenn die jeweilige Operation dies tatsächlich unterstützt. | Ein kontrollierter Ablauf mit Erfolg, Fehler und verzögertem Ergebnis; Screenshot allein genügt nicht. |
| R105-R128 Kontinuität Navigation und Modi | Navigationsstruktur und aktuelle Position verständlich ausdrücken. | Rahmen und Anordnung stabil halten; unnötige Bewegung vermeiden. | Bestehende Router- und Zustandskonventionen übernehmen; Fokus nicht unbemerkt entziehen, Auswahl und Kontext erhalten. | Bereichswechsel, Rückweg, Fokus und gegebenenfalls Scrollposition ausführen. |
| R129-R152 Bedienwege und Zugänglichkeit | Native Semantik und bedienbare Reihenfolge erhalten. | Fokus sichtbar lassen und Layout bei Vergrößerung prüfen. | Tastaturwege, vom Projekt vorgesehene Einstellungen und eine verständliche lineare Ausgabe berücksichtigen. | Tastatur- und je nach Scope Assistenzprüfung zusätzlich zu Screenshots. |

Die HTML-/CSS-/Angular-Zuordnung ist eine technische Ableitung für die praktische Umsetzung, keine zusätzliche historische Aussage aus den Vorlesungen. Konkrete APIs und Syntax nach der vorhandenen Projektversion wählen; ein Beispiel ist keine Begründung, Forms-, State- oder Komponentenbibliotheken zu wechseln.

## Sinnvoller Schnitt eines Codebeispiels

Ein statisches Pattern kann aus einer kleinen eigenständigen HTML-Datei und einer CSS-Datei bestehen. Es zeigt Semantik und Layout ohne die Architektur einer Anwendung vorzugeben.

Ein Angular-Pattern ist erst dann zusätzlich sinnvoll, wenn Bindings, Formzustände, Routerverhalten, asynchrone Rückmeldung oder Fokussteuerung relevant sind. Dann Template, Styling und die minimal benötigte Zustandslogik gemeinsam betrachten; aussagekräftige Tests nur für das tatsächlich demonstrierte Verhalten hinzufügen.

In produktiven Projekten die vorhandene Component Library bevorzugen. Ein Pattern illustriert eine Entscheidung und soll keine zweite Button-, Dialog- oder Forms-Bibliothek neben dem Bestand erzeugen.

## Prüfung nach Risiko

Ein statischer Abstand-Fix benötigt meist eine passende Sichtprüfung. Ein Formular mit asynchronem Speichern benötigt zusätzlich einen ausgeführten Fehler- und Erfolgsablauf. Ein Dialog benötigt je nach Änderung eine Prüfung von Beschriftung, Fokus, Tastaturbedienung und Rückkehr zum Ausgangselement.

Eine statische HTML-Demo beweist weder die Angular-Integration noch das Backend-Verhalten. Eine Angular-Demo mit simulierten Antworten beweist den simulierten UI-Ablauf. Visuelle Regressionen vergleichen gegen eine geprüfte Baseline; neue Sollbilder erst nach tatsächlicher Betrachtung übernehmen.
