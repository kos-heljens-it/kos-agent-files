# P23 Arbeitsansicht anpassen

**Status:** geprüfter Referenzkandidat. [Demo öffnen](index.html).

| Regeln | Im Beispiel |
|---|---|
| R132–R133 | Beschreibungen und Abstände lassen sich anpassen; „Standard wiederherstellen“ setzt beide Optionen zurück. |
| R134 | Einstellungen werden ausdrücklich pro Arbeitsbereich im Browser gespeichert und nach dem Neuladen wiederverwendet. Nicht gespeicherte Änderungen bleiben beim Wechsel des Bereichs bis zum Neuladen erhalten. |

**Ausprobieren:** Im Bereich „Atelier“ Beschreibungen ausblenden und kompakte Abstände wählen. Zwischen Bereichen wechseln und speichern; neu laden und die Einstellungen vergleichen. Die Standardansicht zurücksetzen und ausdrücklich speichern.

**Material:** [HTML](index.html), [CSS](pattern.css), [Verhalten](pattern.js); [Standard](screenshots/default.png), [angepasst](screenshots/custom.png), [mobil](screenshots/mobile.png).

[Geprüft](verification.json): Einstellungen und Entwürfe je Bereich, Speichern und Neuladen, Rücksetzen sowie Fehler beim Lesen und Schreiben in Edge; 390 und 320 px ohne horizontalen Überlauf. `localStorage` ist an diesen Browser gebunden, kann gelöscht oder gesperrt werden und ersetzt keine Benutzerkonten- oder Serverspeicherung.
