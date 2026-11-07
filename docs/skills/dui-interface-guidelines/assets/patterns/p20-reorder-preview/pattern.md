# P20 Reihenfolge mit Vorschau ändern

**Status:** geprüfter Referenzkandidat. [Demo öffnen](index.html).

| Regeln | Im Beispiel |
|---|---|
| R110 | Beim Ziehen mit der Maus markiert eine Linie vor dem Loslassen die Einfügeposition. Erst das Ablegen ändert die Reihenfolge. |
| R037, R129 | Sichtbare Schaltflächen verschieben Schritte auch ohne Drag-and-drop; die neue Position wird als Text gemeldet. |

**Ausprobieren:** Einen Schritt mit der Maus ober- oder unterhalb eines anderen halten und erst danach loslassen. Ein Ziehen außerhalb der Liste abbrechen. Alternativ „Nach oben“ oder „Nach unten“ per Tastatur auslösen.

**Material:** [HTML](index.html), [CSS](pattern.css), [Verhalten](pattern.js); [Ausgangszustand](screenshots/default.png), [Einfügelinie während des Ziehens](screenshots/drag-preview.png), [mobil](screenshots/mobile.png).

[Geprüft](verification.json): Mausziehen mit Vorschau, Ablegen und Abbruch außerhalb sowie Schaltflächen und Fokus in Edge; 390 und 320 px ohne horizontalen Überlauf. Die Schaltflächen sind der alternative Bedienweg; Touch-Drag und Screenreader wurden nicht geprüft. Reihenfolge wird nicht gespeichert.
