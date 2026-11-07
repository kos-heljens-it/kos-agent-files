# P17 Seitennavigation und Direktsprung

**Status:** geprüfter Referenzkandidat. [Demo öffnen](index.html).

| Regeln | Im Beispiel |
|---|---|
| R029, R119 | Die aktuelle Seite, Gesamtzahl und Eintragsbereich sind sichtbar. Zurück und Vor stehen links beziehungsweise rechts; eine Seitenzahl erlaubt den direkten Sprung. |
| R072, R114 | Eine ungültige Seitenzahl bleibt zur Korrektur im Feld. Der Fehler steht am Feld; nach gültiger Navigation erhält die Listenüberschrift den Fokus. |

**Ausprobieren:** Eine Seite weiter und zurück wechseln, zu Seite 7 springen und die Zahl 8 eingeben. Der ungültige Wert bleibt erhalten; die aktuelle Seite ändert sich nicht.

**Material:** [HTML](index.html), [CSS](pattern.css), [Verhalten](pattern.js); [erste Seite](screenshots/default.png), [letzte Seite](screenshots/last-page.png), [mobil](screenshots/mobile.png).

[Geprüft](verification.json): Seitengrenzen, Direktsprung, Feldfehler und Fokus in Edge; 390 und 320 px ohne horizontalen Überlauf. Die 42 Einträge sind lokal erzeugt; URL, Browserverlauf und Serverabfragen sind nicht integriert.
