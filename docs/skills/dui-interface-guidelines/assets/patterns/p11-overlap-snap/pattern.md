# P11 Auswahl und Positionierung

**Status:** geprüfter Referenzkandidat. [Demo öffnen](index.html).

| Regeln | Im Beispiel |
|---|---|
| R079 | Überlappende Objekte lassen sich zusätzlich über eine Liste wählen; die Auswahl ist markiert. Das Raster für das Ziehen ist abschaltbar. Zahlenfelder erlauben unabhängig davon genaue Positionen. |
| R036–R037, R150 | Auswahl und Fokus sind sichtbar. Objekte lassen sich auch ohne Ziehen auswählen und per Tastatur oder Zahlenfeld positionieren. |

**Ausprobieren:** Objekt B über die Liste auswählen, Koordinaten eingeben und mit den Pfeiltasten verschieben. Ziehen mit und ohne Raster vergleichen; die Ausgangsanordnung wiederherstellen.

**Material:** [HTML](index.html), [CSS](objects.css), [Verhalten](objects.js); [Standard](screenshots/default.png), [Auswahl](screenshots/selected.png), [mobil](screenshots/mobile.png).

[Geprüft](verification.json): alternative Auswahl, exakte Eingabe, Pfeiltasten, Ziehen mit der Maus mit und ohne Raster sowie Fehlererhalt in Edge; 390 und 320 px ohne horizontalen Überlauf. Die Vorschau speichert keine Änderungen. Die Tastaturprüfung ersetzt keine umfassende Barrierefreiheitsprüfung.
