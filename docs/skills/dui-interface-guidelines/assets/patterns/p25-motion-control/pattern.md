# P25 Bewegung steuern

**Status:** geprüfter Referenzkandidat. [Demo öffnen](index.html).

| Regeln | Im Beispiel |
|---|---|
| R095 | Eine einzelne, gleichmäßige Laufbewegung lässt sich pausieren und fortsetzen. Die Animation ergänzt einen Text und trägt keine alleinige Zustandsinformation. |
| R145 | Die Systemeinstellung für reduzierte Bewegung schaltet die Animation aus; Text und Erklärung bleiben verfügbar. |

**Ausprobieren:** Bewegung pausieren und fortsetzen. In einer Umgebung mit aktivierter Einstellung für reduzierte Bewegung ist sie ausgeschaltet. Eine vorher manuell gesetzte Pause bleibt beim Wechsel der Systemeinstellung erhalten.

**Material:** [HTML](index.html), [CSS](pattern.css), [Verhalten](pattern.js); [Ausgangszustand](screenshots/default.png), [pausiert](screenshots/paused.png), [reduzierte Bewegung](screenshots/reduced.png), [mobil](screenshots/mobile.png).

[Geprüft](verification.json): Animationsstatus, Tastaturbedienung, Fokus und simulierte Änderung der `prefers-reduced-motion`-Einstellung in Edge; 390 und 320 px ohne horizontalen Überlauf. Die Warteanzeige ist simuliert; die Schaltfläche pausiert keinen Prozess. Das Zustandsbild beweist die Bewegung nicht; sie wurde zusätzlich im Browser ausgeführt.
