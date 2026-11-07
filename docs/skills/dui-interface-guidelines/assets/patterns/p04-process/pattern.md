# P04 Vorgänge und Fortschritt

**Status:** geprüfter Referenzkandidat. [Demo öffnen](index.html).

**Regeln:** R081, R089-R091, R094, R097 und R099. Der Fortschritt zeigt bearbeitete Dokumente. Der lokale Vorgang lässt sich starten, pausieren, fortsetzen und abbrechen; nach Abbruch beginnt ein neuer Versuch bei null.

**Material:** [HTML](index.html), [CSS](process.css), [Verhalten](process.js), [pausiert](screenshots/paused.png), [abgeschlossen](screenshots/completed.png), [mobil](screenshots/mobile.png).

[Geprüft](verification.json): Start, Pause, unveränderter Fortschritt während der Pause, Fortsetzung, Abbruch, Neustart, Abschluss und 390 px ohne horizontalen Überlauf. Alle drei Ansichten wurden in Edge betrachtet. Der Fortschritt ist eine lokale Simulation; es werden keine Dateien übertragen. Das Beispiel begründet keine Restzeitschätzung oder generelle Verwendung eines modalen Dialogs.
