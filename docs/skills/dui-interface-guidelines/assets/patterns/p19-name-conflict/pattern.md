# P19 Namenskonflikt direkt lösen

**Status:** geprüfter Referenzkandidat. [Demo öffnen](index.html).

| Regeln | Im Beispiel |
|---|---|
| R072, R082, R085 | Ein vergebener Name bleibt im Feld; der Fehler erklärt direkt dort die Ursache und die Korrektur. Die Notiz bleibt erhalten. |
| R103 | Der Name kann im selben Ablauf geändert und erneut geprüft werden. |

**Ausprobieren:** Den vorbelegten Namen „Projektplan“ prüfen, dann einen anderen Namen eingeben und erneut versuchen. Die Notiz bleibt bei beiden Versuchen erhalten.

**Material:** [HTML](index.html), [CSS](pattern.css), [Verhalten](pattern.js); [Ausgangszustand](screenshots/default.png), [Konflikt](screenshots/conflict.png), [mobil](screenshots/mobile.png).

[Geprüft](verification.json): Konflikt, leeres Feld, Fokus, Eingabeerhalt und Korrektur in Edge; 390 und 320 px ohne horizontalen Überlauf. Die vorhandenen Namen sind lokal simuliert; es gibt weder Speicherung noch Serverprüfung oder Schutz vor gleichzeitigem Anlegen.
