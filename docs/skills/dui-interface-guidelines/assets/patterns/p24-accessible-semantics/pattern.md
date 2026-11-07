# P24 Semantik und Textalternativen

**Status:** geprüfter Code-Referenzkandidat. [Beispiel öffnen](index.html).

| Regeln | Im Beispiel |
|---|---|
| R148 | `fieldset` und `legend` benennen eine Gruppe nativer Radio-Optionen; die Hilfebeschreibung ist mit der Gruppe verbunden. |
| R149 | Das informative Bild besitzt einen kontextbezogenen Alternativtext. Der Icon-Button hat einen eigenen zugänglichen Namen; sein dekoratives SVG ist für die Zugänglichkeitsausgabe ausgeblendet. |

**Material:** [HTML](index.html), [CSS](pattern.css), [Verhalten](pattern.js) und [Bilddatei](route.svg). Ein Screenshot ist für die beabsichtigte Semantik kein Nachweis und wurde hier nicht als Referenz angelegt.

[Geprüft](verification.json): Playwright-Rollen- und Namensabfragen für Gruppe, Optionen, Bild und Button sowie Bedienung per Tastatur in Edge. Das Bild wurde geladen. Das ist keine Prüfung mit Screenreader oder auf physischen Geräten und keine visuelle Abnahme; Textalternativen müssen für den tatsächlichen Inhalt angepasst werden.
