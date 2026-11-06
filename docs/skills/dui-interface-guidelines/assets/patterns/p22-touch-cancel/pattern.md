# P22 Auslösen und Abbrechen bei Touch

**Status:** geprüfter Referenzkandidat. [Demo öffnen](index.html).

| Regeln | Im Beispiel |
|---|---|
| R080 | Die native Schaltfläche löst nicht beim Drücken aus. Wird der Finger vor dem Loslassen aus der Fläche bewegt oder die Eingabe abgebrochen, bleibt der Zähler unverändert. Ein Schutz unterdrückt dabei auch einen vom Browser nach dem Loslassen außerhalb erzeugten Pointer-Click; Tastaturaktivierung bleibt möglich. |
| R037, R131 | Dieselbe Aktion ist auch über die sichtbare Schaltfläche und per Tastatur erreichbar. |

**Ausprobieren:** Auf die Schaltfläche drücken, den Finger aus der Fläche bewegen und loslassen. Danach die Aktion normal antippen oder mit der Leertaste auslösen.

**Material:** [HTML](index.html), [CSS](pattern.css), [Verhalten](pattern.js); [Ausgangszustand](screenshots/default.png), [ausgelöst](screenshots/activated.png), [mobil](screenshots/mobile.png).

[Geprüft](verification.json): Touchstart, Loslassen auf der Fläche, Loslassen außerhalb und `touchCancel` mit emulierter Touch-Eingabe in Edge bei 390 px; Tastatur und Layout bei 390 und 320 px. Kein physisches Touchgerät und keine anderen Browser wurden geprüft. Das Bild allein belegt das Verhalten nicht.
