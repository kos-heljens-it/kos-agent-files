# P27 Beziehungen sichtbar halten

**Status:** geprüfter Referenzkandidat. [Demo öffnen](index.html).

| Regeln | Im Beispiel |
|---|---|
| R020 | In der breiten Ansicht stehen Freigabe, Status und zugehörige Aktion in derselben Zeile; die wiederkehrende Anordnung unterstützt die Zuordnung trotz Abstand. |
| R021 | Jede Aktion gehört räumlich und in ihrer zugänglichen Benennung zu einer bestimmten Freigabe. Auf schmalen Ansichten bleiben die Elemente derselben Freigabe in einer Gruppe. |

**Ausprobieren:** Die zweite Freigabe auswählen und die konkrete Rückmeldung lesen. Auf einem schmalen Bildschirm prüfen, ob die Aktion weiterhin ihrem Eintrag zugeordnet ist.

**Material:** [HTML](index.html), [CSS](pattern.css), [Verhalten](pattern.js); [Standard](screenshots/default.png), [Auswahl](screenshots/selected.png), [mobil](screenshots/mobile.png).

[Geprüft](verification.json): Zuordnung der drei Bezeichnungen, Status und Aktionen sowie Tastaturauswahl in Edge; 390 und 320 px ohne horizontalen Überlauf. Die Auswahl ist lokal simuliert; das Beispiel ist keine Screenreader-Prüfung.
