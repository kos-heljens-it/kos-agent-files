# P07 Icons im Ensemble

**Status:** geprüfter Referenzkandidat. [Demo öffnen](index.html).

| Regeln | Im Beispiel |
|---|---|
| R057 | Jedes Icon wird von einer sichtbaren Textbeschriftung begleitet. |
| R059-R060 | Die Zeichen reduzieren Objekte auf unterschiedliche Gesamtformen: Raster, Dokument, Kalender und Person. |
| R061-R062 | Gleiche Größe, Strichstärke und Farbwirkung bilden ein ruhiges Ensemble. Der Auswahlzustand wird am Button sichtbar und mit `aria-pressed` vermittelt. |

**Ausprobieren:** Kategorien mit Maus oder Tastatur auswählen. Die Liste und die Anzahl passen sich der Auswahl an. Icons sind als ergänzende Darstellung mit `aria-hidden` gekennzeichnet; der Text benennt die Funktion.

**Material:** [HTML mit SVG](index.html), [CSS](icons.css), [Verhalten](icons.js). [Alle Kategorien](screenshots/all.png), [Dokumente ausgewählt](screenshots/documents.png), [mobile Ansicht](screenshots/mobile.png).

[Geprüft](verification.json): Beschriftungen, sichtbarer Auswahlzustand, Tastaturauswahl, Filterergebnisse und 390/320 px ohne horizontalen Überlauf. Die drei Ansichten wurden in Edge betrachtet; keine Netzwerkzugriffe. Die vier handgezeichneten Zeichen illustrieren das Prinzip und sind kein vollständiger, getesteter Icon-Satz. In einem Produkt einen vorhandenen passenden Satz verwenden und die Bedeutung mit der Zielgruppe prüfen. Die Liste verwendet lokale Beispieldaten.
