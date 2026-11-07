# P16 Ereignisse nachvollziehen

**Status:** geprüfter Referenzkandidat. [Demo öffnen](index.html).

| Regeln | Im Beispiel |
|---|---|
| R092–R093 | Das Ergebnis eines simulierten Hintergrundvorgangs erscheint in einer auffindbaren Ereignisliste. Neue Ereignisse stehen oben; es gibt keinen erzwungenen Ansichtswechsel. |
| R126 | Während der Vorgang endet, kann die Notiz weiterbearbeitet werden; das Ereignis zieht den Fokus nicht an sich. |

**Ausprobieren:** „Bericht vorbereiten“ starten und sofort in der Notiz schreiben. Nach dem Abschluss einen zweiten Bericht starten; beide Ereignisse bleiben in der Liste.

**Material:** [HTML](index.html), [CSS](pattern.css), [Verhalten](pattern.js); [Ausgangszustand](screenshots/default.png), [Ereignisse](screenshots/events.png), [mobil](screenshots/mobile.png).

[Geprüft](verification.json): zwei Ereignisse, sichtbarer Prozesszustand und Erhalt von Eingabe und Fokus in Edge; 390 und 320 px ohne horizontalen Überlauf. Die Ereignisse existieren nur bis zum Neuladen: Ein Produkt muss für dauerhafte Auffindbarkeit eine geeignete Speicherung ergänzen. Die Live-Region wurde nicht mit Screenreadern geprüft.
