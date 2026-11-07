# P08 Dialog und Tastaturfokus

**Status:** geprüfter Referenzkandidat. [Demo öffnen](index.html).

**Regeln:** R025, R112, R124-R126, R128 und R150. Der Dialog wird durch eine ausdrückliche Handlung geöffnet, erklärt die Folgen und bietet einen Weg zurück. Der vorhandene Arbeitsbereich bleibt sichtbar. Escape erhält den Entwurf; beim Schließen kehrt der Fokus zum Auslöser zurück.

**Material:** [HTML](index.html), [CSS](dialog.css), [Verhalten](dialog.js), [Dialog](screenshots/dialog.png), [mobil](screenshots/mobile.png).

[Geprüft](verification.json): anfänglicher Dialogfokus, Escape, erhaltener Entwurf, explizites Verwerfen und Fokus nach Schließen; 390 px ohne horizontalen Überlauf. Beide Ansichten wurden in Edge betrachtet. Der Text wird nur in dieser lokalen Vorschau verändert; eine vollständige Screenreader- oder Browsermatrix wurde nicht geprüft.
