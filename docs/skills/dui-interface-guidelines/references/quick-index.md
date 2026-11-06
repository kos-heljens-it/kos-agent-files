# Schnelleinstieg für DUI-Referenzen

Nur den betroffenen Themenblock und Eintrag öffnen. Muster sind geprüfte Kandidaten; Arbeitsnotizen erläutern Entscheidungen und sind keine Prüfnachweise. Bestätigte Vorgaben des Zielprojekts haben Vorrang.

## Formulare, Eingaben und Rückmeldung

| Aufgabe | Zuerst lesen | Kernentscheidungen |
|---|---|---|
| Formularlayout, Ausrichtung, Gruppierung, Buttons | [P01 Formularlayout](../assets/patterns/p01-form-layout/pattern.md) | Gemeinsame Fluchtlinien; Gruppen durch Abstand; Labels nahe am Feld; konkrete Aktionen. |
| Feldfehler, Speichern, Rückmeldung und erneuter Versuch | [P03 Eingabe und Rückmeldung](../assets/patterns/p03-validation/pattern.md) | Eingaben erhalten; Fehler lokal und konkret; Reaktion sofort; nächste Handlung anbieten. |
| Eingaben übernehmen, optionale Felder, abhängige Werte | [P09 Eingaben wiederverwenden](../assets/patterns/p09-data-reuse/pattern.md) | Änderbare Standardwerte, Datenübernahme und nachvollziehbare Einschränkungen. |
| Grober Regler und genauer Wert | [P10 Grobe und genaue Eingabe](../assets/patterns/p10-precise-input/pattern.md) | Grobe und genaue Eingabe kombinieren; Näherung kennzeichnen; Fehler erhalten. |
| Schrittweise Bearbeitung und Zwischenstand | [P13 Freiwilliger Ablauf und Zwischenstand](../assets/patterns/p13-guided-draft/pattern.md) | Geführten Ablauf freiwillig halten; Eingaben erhalten; unvollständigen Zwischenstand ermöglichen. |
| Namenskonflikt und erneuter Versuch | [P19 Namenskonflikt direkt lösen](../assets/patterns/p19-name-conflict/pattern.md) | Fehler am Feld erklären; Eingaben erhalten; direkt korrigieren und erneut versuchen. |
| Gruppen, Eingabefelder und berechnete Ausgaben | [P26 Eingabe, Ausgabe und Gruppen](../assets/patterns/p26-input-output-groups/pattern.md) | Fachliche Gruppen trennen; editierbare Felder von Ausgaben unterscheiden. |

## Navigation, Listen und Arbeitsbereiche

| Aufgabe | Zuerst lesen | Kernentscheidungen |
|---|---|---|
| Navigation, aktuelle Position, Kategorien, Browserverlauf | [P05 Navigation und Orientierung](../assets/patterns/p05-navigation/pattern.md) | Navigation stabil und sichtbar halten; Position anzeigen; Rückweg ermöglichen. |
| Überlappende Objekte, Raster, Position | [P11 Auswahl und Positionierung](../assets/patterns/p11-overlap-snap/pattern.md) | Alternative Auswahl und Positionierung; abschaltbares Raster; Auswahl sichtbar machen. |
| Arbeitsmodi und zeitweise inaktive Aktionen | [P12 Sichtbare Arbeitsmodi](../assets/patterns/p12-visible-modes/pattern.md) | Modus und Wirkung benennen; Wechsel ermöglichen; inaktive Aktion erklären. |
| Suche in einer räumlichen Übersicht | [P14 Suche im räumlichen Kontext](../assets/patterns/p14-context-search/pattern.md) | Treffer markieren und Anordnung erhalten, wenn der räumliche Kontext wichtig ist. |
| Seiten, Gesamtumfang und Direktsprung | [P17 Seitennavigation und Direktsprung](../assets/patterns/p17-pagination/pattern.md) | Position und Umfang zeigen; direkt springen; fehlerhafte Eingabe erhalten. |
| Reihenfolge ändern und Einfügeposition zeigen | [P20 Reihenfolge mit Vorschau ändern](../assets/patterns/p20-reorder-preview/pattern.md) | Ziel vor dem Ablegen zeigen; Schaltflächen als alternativen Bedienweg anbieten. |
| Scrollfenster und schrittweise Nachladung | [P21 Orientierung beim Nachladen](../assets/patterns/p21-load-more/pattern.md) | Fortsetzung zeigen; Scrollposition und Rückweg erhalten; unbekannten Umfang benennen. |
| Ansichtseinstellungen je Arbeitsbereich | [P23 Arbeitsansicht anpassen](../assets/patterns/p23-view-settings/pattern.md) | Ansicht ändern, ausdrücklich speichern und Standard wiederherstellen. |
| Zugehörigkeit von Status und Aktion | [P27 Beziehungen sichtbar halten](../assets/patterns/p27-spatial-relationships/pattern.md) | Zusammengehörige Elemente über Anordnung und eindeutige Benennung verbinden. |

## Bedienung und Zugänglichkeit

| Aufgabe | Zuerst lesen | Kernentscheidungen |
|---|---|---|
| Auswahl, Fokus, deaktivierte Aktionen, kleine Icons | [P02 Zustände und Zielflächen](../assets/patterns/p02-control-states/pattern.md) | Zustände erkennbar machen; große, getrennte Ziele und sichtbaren Tastaturfokus anbieten. |
| Dialog, Tastaturfokus, Abbrechen | [P08 Dialog und Tastaturfokus](../assets/patterns/p08-dialog-focus/pattern.md) | Dialog bewusst öffnen, Escape ermöglichen und Fokus zurückgeben. |
| Sichtbare Aktionen und Tastenkürzel | [P18 Sichtbare Tastenkürzel](../assets/patterns/p18-visible-shortcuts/pattern.md) | Kürzel erklären; sichtbare Alternative anbieten; Texteingabe schützen. |
| Touch: Auslösen und Abbrechen | [P22 Auslösen und Abbrechen bei Touch](../assets/patterns/p22-touch-cancel/pattern.md) | Erst beim Aktivieren auslösen; Abbruch und Tastaturweg prüfen. |
| HTML-Semantik und Textalternativen | [P24 Semantik und Textalternativen](../assets/patterns/p24-accessible-semantics/pattern.md) | Benannte Gruppen, Optionen, Bildalternative und Iconbutton im Code prüfen. |
| Bewegung pausieren, reduzierte Systemeinstellung | [P25 Bewegung steuern](../assets/patterns/p25-motion-control/pattern.md) | Bewegung abschaltbar machen; Text auch ohne Animation verfügbar halten. |
| Touch, Screenreader, Textalternativen | [N01 Bedienung und zugängliche Semantik](notes/accessibility.md) | Bedienwege und Semantik gezielt prüfen; Bilder ersetzen keine Assistenzprüfung. |

## Vorgänge und Wiederherstellung

| Aufgabe | Zuerst lesen | Kernentscheidungen |
|---|---|---|
| Fortschritt, Pause und Abbruch | [P04 Vorgänge und Fortschritt](../assets/patterns/p04-process/pattern.md) | Fortschritt sichtbar halten; Pause und Abbruch anbieten, sofern tatsächlich unterstützt. |
| Mehrstufiges Rückgängigmachen und Wiederherstellen | [P15 Änderungen rückgängig machen](../assets/patterns/p15-undo-redo/pattern.md) | Änderungen schrittweise umkehren; verfügbaren Verlauf erklären. |
| Hintergrundereignisse und Weiterarbeiten | [P16 Ereignisse nachvollziehen](../assets/patterns/p16-event-history/pattern.md) | Ereignisse auffindbar halten; Eingabe und Fokus erhalten. |
| Nicht abbrechbare Vorgänge, Konflikte, Nachladen | [N04 Prozesse und Anschlussaktionen](notes/process-and-recovery.md) | Tatsächliche Prozessgrenzen, Korrekturmöglichkeit und Orientierung prüfen. |

## Darstellung und Sprache

| Aufgabe | Zuerst lesen | Kernentscheidungen |
|---|---|---|
| Schrift, Farben, Hell und Dunkel | [P06 Typografie und Farbe](../assets/patterns/p06-type-colour/pattern.md) | Lesbare Hierarchie, ruhige Palette und beschriftete Zustände. |
| Icons, Beschriftung und unterscheidbare Formen | [P07 Icons im Ensemble](../assets/patterns/p07-icon-ensemble/pattern.md) | Einfache Gesamtformen, gleiches visuelles Gewicht und Textbeschriftungen. |
| Farbgewicht, Akzent und Fehlerfarbe | [P28 Akzente und Warnfarben](../assets/patterns/p28-colour-emphasis/pattern.md) | Akzent gezielt einsetzen; Fehler zusätzlich mit Text und Feldmarkierung kennzeichnen. |
| UI-Texte, Kennungen und Lokalisierung | [N02 Sprache und Lokalisierung](notes/language-localization.md) | Begriffe konsistent halten; Übersetzung im Zusammenhang und regionale Formate prüfen. |

## Gestaltung prüfen

| Aufgabe | Zuerst lesen | Kernentscheidungen |
|---|---|---|
| Nutzertests und Gestaltungsentscheidungen | [N03 Gestaltung in der Nutzung prüfen](notes/usability-evaluation.md) | Aufgabe und Beobachtung festlegen; tatsächliche Tests nicht durch Screenshots ersetzen. |

Andere UI-Aufgaben: [Themenübersicht im SKILL](../SKILL.md) und bei Bedarf gezielt R-IDs im [Regelkatalog](rules-book.txt) suchen. Nur passende Regeln lesen; fehlende Muster begrenzen die Umsetzung nicht.

Die [vollständige Regelmatrix](reference-map.md) und [nächste sinnvolle Referenzen](reference-backlog.md) dienen der Pflege und gezielten Recherche. Nicht jede Regel braucht ein Bild oder ein eigenes Beispiel. Der [Musterindex](../assets/patterns/index.json) enthält maschinenlesbare Zuordnungen und Prüfnachweise.
