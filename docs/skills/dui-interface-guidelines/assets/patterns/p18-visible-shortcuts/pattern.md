# P18 Sichtbare Tastenkürzel

**Status:** geprüfter Referenzkandidat. [Demo öffnen](index.html).

| Regeln | Im Beispiel |
|---|---|
| R037, R129–R130 | Eine sichtbare Schaltfläche und das daneben erklärte Tastenkürzel ändern denselben Zustand. Das Kürzel wirkt nur im Arbeitsbereich und nicht bei Texteingabe. |
| R036 | Markierung und Schaltflächenzustand sind über Text und Gestaltung erkennbar. |

**Ausprobieren:** Die Notiz mit der Schaltfläche markieren. Mit Fokus auf der Schaltfläche Alt + Umschalt + M drücken, um die Markierung zu ändern. Im Textfeld löst dieselbe Kombination die Funktion nicht aus.

**Material:** [HTML](index.html), [CSS](pattern.css), [Verhalten](pattern.js); [Ausgangszustand](screenshots/default.png), [markiert](screenshots/marked.png), [mobil](screenshots/mobile.png).

[Geprüft](verification.json): Schaltfläche, Kürzel und Ausschluss bei Texteingabe in Edge; 390 und 320 px ohne horizontalen Überlauf. Das Kürzel ist ein lokales Beispiel: Vor produktiver Übernahme Plattform-, Browser- und Hilfstechnikkonflikte sowie verschiedene Tastaturlayouts prüfen.
