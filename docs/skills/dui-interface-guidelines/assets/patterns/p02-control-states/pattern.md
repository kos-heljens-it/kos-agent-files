# P02 Zustände und Zielflächen

**Status:** geprüfter Referenzkandidat, keine bestätigte Produktvorgabe. [Demo öffnen](index.html).

| Regeln | Im Beispiel |
|---|---|
| R033-R034, R037-R038 | Sichtbare, erkennbare Auswahlmöglichkeiten mit kurzer Erklärung; die Optionen sind direkt verfügbar. |
| R036 | Auswahl, Tastaturfokus und deaktivierter Button sind unterscheidbar. Ein sichtbarer Hinweis erklärt, warum die Aktion zunächst nicht verfügbar ist. |
| R073-R074, R076 | Die gesamte Beschriftungsfläche einer Checkbox ist bedienbar. Die Icon-Schaltfläche ist 44 × 44 CSS-Pixel groß und deutlich größer als das sichtbare Zeichen. |
| R077 | Beschriftungsfläche und benachbarter Icon-Button sind getrennt und ihre Ziele überlappen nicht. |

**Ausprobieren:** Browser als Kanal auswählen: „Auswahl übernehmen“ wird aktiv. Nach Übernahme ist der Button wieder deaktiviert; durch Zurückändern zum zuletzt übernommenen Stand ebenfalls. Die Stern-Schaltflächen lassen sich unabhängig wählen und haben einen zugänglichen Namen und `aria-pressed`. Die lokale Vorschau speichert nichts dauerhaft.

**Dateien:** [HTML](index.html), [CSS](controls.css), [Verhalten](controls.js). [Ausgangszustand](screenshots/initial.png), [Auswahl und Tastaturfokus](screenshots/selected-focus.png), [mobile Ansicht](screenshots/mobile.png).

Die drei Screenshots wurden in Edge betrachtet. [Prüfergebnis](verification.json): Auswahl über den Rand der Label-Fläche, Aktivierung und Deaktivierung der Hauptaktion, 44-Pixel-Ziel und Zustandswechsel des Icons sowie Layout bei 390 und 320 px. Der sichtbare Fokus wurde per Tastatur geprüft. Keine Netzwerkzugriffe; keine echte Benachrichtigungsfunktion, Backend-Anbindung oder vollständige Barrierefreiheitsprüfung. Werte und Gestaltung sind kontextabhängige Beispiele.
