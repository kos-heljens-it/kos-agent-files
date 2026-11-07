# P10 Grobe und genaue Eingabe

**Status:** geprüfter Referenzkandidat. [Demo öffnen](index.html).

| Regeln | Im Beispiel |
|---|---|
| R078 | Der Regler bewegt sich in Minutenschritten; ein Zahlenfeld erlaubt die sekundengenaue Position. Ein nur ungefährer Reglerwert ist als „ca.“ gekennzeichnet und verändert den exakten Wert nicht. |
| R072, R081–R082 | Änderungen erscheinen unmittelbar an der Position. Ungültige Zahlen bleiben im Feld und werden dort erklärt. |

**Ausprobieren:** 89 Sekunden eingeben und den ungefähren Reglerwert vergleichen. Den Regler mit den Pfeiltasten bedienen. Eine Zahl über 3600 eingeben und korrigieren.

**Material:** [HTML](index.html), [CSS](precision.css), [Verhalten](precision.js); [Standard](screenshots/default.png), [genauer Wert](screenshots/precise.png), [mobil](screenshots/mobile.png).

[Geprüft](verification.json): Eingabe, Fehlererhalt, Tastaturbedienung des Reglers und lokale Rückmeldung in Edge; 390 und 320 px ohne horizontalen Überlauf. Die Vorschau verändert keine Datei.
