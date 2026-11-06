# P15 Änderungen rückgängig machen

**Status:** geprüfter Referenzkandidat. [Demo öffnen](index.html).

| Regeln | Im Beispiel |
|---|---|
| R100 | Mehrere Änderungen an Aufgaben lassen sich schrittweise rückgängig machen und wiederherstellen. Eine neue Änderung nach einer Rücknahme verwirft den bisherigen Wiederherstellungspfad. |
| R106 | Beide Aktionen bleiben an ihrem Platz und sind deaktiviert, wenn keine entsprechende Änderung verfügbar ist. Ein Hinweis zeigt die verfügbare Historie. |

**Ausprobieren:** Zwei Aufgaben abhaken, zweimal rückgängig machen und wiederherstellen. Anschließend eine Änderung zurücknehmen und eine andere Aufgabe ändern: Die alte Wiederherstellung ist nicht mehr verfügbar.

**Material:** [HTML](index.html), [CSS](pattern.css), [Verhalten](pattern.js); [Ausgangszustand](screenshots/default.png), [Historie](screenshots/history.png), [mobil](screenshots/mobile.png).

[Geprüft](verification.json): mehrere Rücknahmen und Wiederherstellungen sowie eine neue Änderung nach Rücknahme in Edge; 390 und 320 px ohne horizontalen Überlauf. Die Historie existiert nur im Arbeitsspeicher. Reale Daten, irreversible Aktionen und konkurrierende Änderungen benötigen eigene Produktsemantik.
