# P14 Suche im räumlichen Kontext

**Status:** geprüfter Referenzkandidat. [Demo öffnen](index.html).

| Regeln | Im Beispiel |
|---|---|
| R107–R108 | Die Suche markiert Treffer in einer bestehenden Übersicht. Alle sechs Bereiche bleiben sichtbar und behalten ihre Position. |
| R146 | Ein Treffer ist zusätzlich zur Farbe mit Rahmen und „Treffer“ gekennzeichnet. Die Anzahl oder ein Ergebnis ohne Treffer wird als Text ausgegeben. |

**Ausprobieren:** „Plan“ eingeben, einen Suchbegriff ohne Treffer versuchen und die Suche zurücksetzen. Die Suchaktion ändert weder Reihenfolge noch Position der Karten innerhalb desselben Viewports.

**Material:** [HTML](index.html), [CSS](pattern.css), [Verhalten](pattern.js); [Übersicht](screenshots/default.png), [markierter Treffer](screenshots/search.png), [mobil](screenshots/mobile.png).

[Geprüft](verification.json): Treffer, kein Treffer, unveränderte Kartenpositionen und Zurücksetzen in Edge; 390 und 320 px ohne horizontalen Überlauf. Dieses Muster eignet sich für eine räumliche Übersicht; es schreibt nicht vor, dass jede Suchergebnisliste ungefiltert bleiben muss.
