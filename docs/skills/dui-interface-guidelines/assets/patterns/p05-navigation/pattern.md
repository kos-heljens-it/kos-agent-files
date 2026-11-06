# P05 Navigation und Orientierung

**Status:** geprüfter Referenzkandidat, keine bestätigte Produktvorgabe. [Demo öffnen](index.html).

| Regeln | Im Beispiel |
|---|---|
| R105, R107 | Die Hauptnavigation bleibt bei Bereichswechseln an derselben Stelle und in derselben Reihenfolge. |
| R111, R113 | Kategorien bleiben im jeweiligen Arbeitsbereich eingebettet; Inhalte sind fachlich gruppiert. |
| R114-R115 | Aktueller Bereich und erreichbare Hauptbereiche sind sichtbar, auch auf schmalen Ansichten. Breadcrumb führt zum Arbeitsbereich. |
| R117 | Gleichrangige Kategorien sind direkt erreichbar; die aktuelle Kategorie ist optisch und mit `aria-current` gekennzeichnet. |

**Ausprobieren:** Zwischen Übersicht, Projekten und Team wechseln; unter Projekten das Archiv öffnen und den Browser-Zurück-Button verwenden. Links lassen sich über das Adressfragment direkt öffnen. Die Kategorien sind Navigationslinks, keine ARIA-Tab-Komponente.

**Dateien:** [HTML](index.html), [CSS](navigation.css), [Verhalten](navigation.js). [Übersicht Desktop](screenshots/desktop-overview.png), [Projektarchiv Desktop](screenshots/desktop-projects.png), [Projektarchiv mobil](screenshots/mobile-projects.png).

Die drei Screenshots wurden in Edge betrachtet. [Prüfergebnis](verification.json): stabile Position und aktive Markierung, Wechsel per Tastatur mit erhaltenem Fokus, direkter Link, Browserverlauf und mobile Navigation bei 390 px. Keine Netzwerkzugriffe. Die Daten und Navigation sind lokal; Angular-Routing, Backend, echtes Nutzerkonto und vollständige Accessibility-Prüfung sind nicht Bestandteil des Musters. Im Zielprojekt die vorhandenen Router- und Komponenten-Konventionen übernehmen.
