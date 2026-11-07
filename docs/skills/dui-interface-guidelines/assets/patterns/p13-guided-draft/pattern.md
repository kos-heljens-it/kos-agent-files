# P13 Freiwilliger Ablauf und Zwischenstand

**Status:** geprüfter Referenzkandidat. [Demo öffnen](index.html).

| Regeln | Im Beispiel |
|---|---|
| R029 | Im zweistufigen Ablauf steht Zurück links und die nächste Handlung rechts. |
| R101 | Ein unvollständiger Zwischenstand lässt sich für die Dauer der Vorschau merken und ausdrücklich wiederherstellen. Die Endprüfung verlangt einen Titel. |
| R124–R125, R136 | Der geführte Ablauf ist freiwillig. Der Wechsel zur freien Bearbeitung ist jederzeit möglich und erhält die Eingaben. |

**Ausprobieren:** Ohne Titel einen Zwischenstand merken, schrittweise zur Beschreibung und zurück wechseln, Eingaben ändern und den Zwischenstand wiederherstellen. Die Prüfung ohne Titel zeigt den Fehler am Feld.

**Material:** [HTML](index.html), [CSS](pattern.css), [Verhalten](pattern.js); [freie Bearbeitung](screenshots/default.png), [Schritt 2](screenshots/guided.png), [mobil](screenshots/mobile.png).

[Geprüft](verification.json): Moduswechsel, Navigation und Eingabeerhalt, unvollständiger Zwischenstand, Wiederherstellung und Fehlerfall in Edge; 390 und 320 px ohne horizontalen Überlauf. Der Zwischenstand liegt nur im Arbeitsspeicher und geht beim Neuladen verloren; eine dauerhafte Speicherung muss das Zielprojekt selbst implementieren.
