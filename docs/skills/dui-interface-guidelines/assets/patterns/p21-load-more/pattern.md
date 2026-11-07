# P21 Orientierung beim Nachladen

**Status:** geprüfter Referenzkandidat. [Demo öffnen](index.html).

| Regeln | Im Beispiel |
|---|---|
| R118 | Ein beschriftetes, per Tastatur scrollbar erreichbares Listenfenster zeigt einen angeschnittenen Eintrag und erklärt, dass weitere geladene Inhalte folgen. |
| R120 | Weitere Einträge werden angehängt; vorhandene Einträge und die Scrollposition bleiben erhalten. Solange weitere Daten möglich sind, wird keine Gesamtzahl behauptet. |

**Ausprobieren:** Im Listenfenster scrollen, „Weitere Einträge laden“ wählen und den sichtbaren Ausschnitt vergleichen. Danach zum ersten Eintrag zurückscrollen. Nach dem letzten Abschnitt wird das Ende benannt.

**Material:** [HTML](index.html), [CSS](pattern.css), [Verhalten](pattern.js); [Ausgangszustand](screenshots/default.png), [nach dem Laden](screenshots/loaded.png), [mobil](screenshots/mobile.png).

[Geprüft](verification.json): Tastaturscrollen, Nachladen, Positionserhalt und Rückweg zu alten Einträgen in Edge; 390 und 320 px ohne horizontalen Überlauf. Die Datenquelle und Ladezeit sind lokal simuliert; Netzwerkfehler, Browserhistorie und Serververhalten sind nicht implementiert.
