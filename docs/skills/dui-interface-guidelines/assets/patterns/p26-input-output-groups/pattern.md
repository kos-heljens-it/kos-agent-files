# P26 Eingabe, Ausgabe und Gruppen

**Status:** geprüfter Referenzkandidat. [Demo öffnen](index.html).

| Regeln | Im Beispiel |
|---|---|
| R017–R018, R023–R024 | Fahrtdaten und Reisenotiz sind fachlich gruppiert und durch Abstand sowie dezente Flächen getrennt. Flächen sind eine mögliche Unterstützung, keine allgemeine Pflicht. |
| R035 | Das editierbare Zahlenfeld hat einen sichtbaren Feldrand; Beispielsatz und berechneter Betrag sind als Ausgaben ohne Eingabefeld erkennbar. |
| R072 | Eine ungültige Zahl bleibt zur Korrektur im Feld; der Fehler wird dort erklärt und der Betrag vorübergehend nicht berechnet. |

**Ausprobieren:** Kilometer ändern und das Ergebnis betrachten. Eine Zahl über 500 eingeben und korrigieren; die optionale Notiz ist davon unabhängig.

**Material:** [HTML](index.html), [CSS](pattern.css), [Verhalten](pattern.js); [Standard](screenshots/default.png), [ungültige Eingabe](screenshots/invalid.png), [mobil](screenshots/mobile.png).

[Geprüft](verification.json): benannte Gruppen, Eingabe- und Ausgabeelement, Berechnung und Fehlererhalt in Edge; 390 und 320 px ohne horizontalen Überlauf. Der Satz ist frei gewählt und weder eine fachliche noch eine rechtliche Vorgabe; es erfolgt keine Abrechnung.
