# P28 Akzente und Warnfarben

**Status:** geprüfter Referenzkandidat. [Demo öffnen](index.html).

| Regeln | Im Beispiel |
|---|---|
| R042 | Eine Akzentfarbe hebt die nächste Handlung hervor; die übrigen Flächen und die Rücksetzfunktion bleiben zurückhaltend. |
| R043–R044 | Ein konkreter Fehler erhält eine Signalfarbe und zusätzlich eine Feldmarkierung und verständlichen Text. Die Bedeutung hängt nicht allein von der Farbe ab. |

**Ausprobieren:** Eine ungültige Adresse prüfen und den Feldfehler betrachten. Danach die Eingabe korrigieren oder zurücksetzen. Es wird keine E-Mail verschickt.

**Material:** [HTML](index.html), [CSS](pattern.css), [Verhalten](pattern.js); [Standard](screenshots/default.png), [Feldfehler](screenshots/error.png), [mobil](screenshots/mobile.png).

[Geprüft](verification.json): Fehler und Korrektur, Eingabeerhalt und Kontrast des Fehlertexts auf der verwendeten Fläche in Edge; 390 und 320 px ohne horizontalen Überlauf. Die lokale Formatprüfung bestätigt weder Existenz noch Erreichbarkeit der Adresse. Einzelne Farben und die gemessene Textkombination sind keine vollständige Kontrast- oder Barrierefreiheitsprüfung.
