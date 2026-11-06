# P12 Sichtbare Arbeitsmodi

**Status:** geprüfter Referenzkandidat. [Demo öffnen](index.html).

| Regeln | Im Beispiel |
|---|---|
| R106 | Die Übernahmeaktion bleibt an ihrem Platz und ist deaktiviert, solange sie nicht verfügbar ist; ein Hinweis erklärt die Voraussetzung. |
| R123–R125 | Ansichts- und Bearbeitungsmodus sind sichtbar, der aktive Modus und seine Auswirkung werden benannt. Ein ausdrücklicher Wechsel in beide Richtungen ist möglich. |

**Ausprobieren:** In den Bearbeitungsmodus wechseln, den Text ändern und zwischen den Modi wechseln. Der Entwurf bleibt erhalten. Nach dem Übernehmen wird die Aktion wieder deaktiviert und der Fokus zum Textfeld zurückgegeben.

**Material:** [HTML](index.html), [CSS](modes.css), [Verhalten](modes.js); [Ansicht](screenshots/default.png), [Bearbeitung](screenshots/editing.png), [mobil](screenshots/mobile.png).

[Geprüft](verification.json): Moduswechsel, Erhalt des Entwurfs, Verfügbarkeit und Fokus nach Übernahme in Edge; 390 und 320 px ohne horizontalen Überlauf. Die Übernahme ist simuliert und speichert nicht dauerhaft.
