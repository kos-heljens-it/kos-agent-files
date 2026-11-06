# P09 Eingaben wiederverwenden

**Status:** geprüfter Referenzkandidat. [Demo öffnen](index.html).

| Regeln | Im Beispiel |
|---|---|
| R015, R039 | Eine optionale Rechnungsadresse erscheint im bestehenden Raster und kann eingeklappt werden. Ihr Inhalt und die Entscheidung, sie zu verwenden, bleiben beim Einklappen erhalten. |
| R068-R069 | Deutschland ist ein änderbarer Beispiel-Standardwert. Die Lieferadresse dient zunächst auch als Rechnungsadresse; eine abweichende Adresse wird beim ersten Aktivieren vorausgefüllt. |
| R070-R071 | Das Enddatum darf nicht vor dem Startdatum liegen. Eine erneute Übernahme der Adresse wird direkt ausgeführt und lokal bestätigt. |
| R075, R147 | Die Übernahmeaktion steht direkt bei der Rechnungsadresse; Fehler erscheinen beim betroffenen Datumsfeld. |

**Ausprobieren:** Eine abweichende Rechnungsadresse aktivieren und bearbeiten. Zuklappen oder vorübergehendes Deaktivieren erhält die Werte. Erst „Lieferadresse erneut übernehmen“ überschreibt die abweichenden Felder ausdrücklich. Einen ungültigen Lieferzeitraum eingeben: Der ursprüngliche Wert bleibt zur Korrektur erhalten.

**Material:** [HTML](index.html), [CSS](reuse.css), [Verhalten](reuse.js). [Standardansicht](screenshots/default.png), [abweichende Adresse](screenshots/invoice.png), [Datumsfehler](screenshots/date-error.png), [mobil](screenshots/mobile.png).

[Geprüft](verification.json): Standardwert, initiale und erneute Übernahme, unabhängige Änderung und Erhalt beim Ein-/Ausklappen, Datumsgrenze, Fehlermeldung und Korrektur; 390 und 320 px ohne horizontalen Überlauf. Die vier Ansichten wurden in Edge betrachtet. Dies ist eine lokale Vorschau ohne Bestellung oder Speicherung; Werte und Standardland sind keine allgemeine Produktvorgabe.
