# Strategie für Bildreferenzen und Codebeispiele

## Auswahl

Die vollständige Zuordnung je Regel steht in [reference-map.md](reference-map.md); dieselben Daten sind unter [reference-map.json](reference-map.json) maschinenlesbar. Sie ist eine redaktionelle Empfehlung für den Aufbau der Sammlung, keine Pflicht, jede Regel mit einer eigenen Datei zu belegen.

| Referenzart | Wann sie hilft | Grenze |
|---|---|---|
| Screenshot | Räumliche Anordnung, Hierarchie, Farbwirkung, Iconensemble und Vorher/Nachher verstehen. | Beweist keine Semantik, Interaktion oder Zustandsübergänge. |
| Code | Zustandslogik, Semantik, Tastaturbedienung, Wiederverwendung und asynchrone Abläufe nachvollziehen. | Beweist für sich allein keine tatsächlich gute Darstellung. |
| Beides | Sichtbare Ausprägung und korrektes Verhalten eines interaktiven Patterns gemeinsam festlegen. | Screenshot und Code müssen zum selben Stand und Zustand gehören. |
| Ablaufnotiz | Prinzipien, Entscheidungskonflikte und Testorganisation erklären. | Zusätzliche Bilder oder Widgets bringen hier häufig wenig Nutzen. |

**Priorität A**: frühe Beispiele mit hohem Wiederverwendungswert. **Priorität B**: ergänzen, sobald das Pattern tatsächlich benötigt wird. **Priorität C**: kurze Erläuterung reicht zunächst. Das sind Sammelprioritäten, keine allgemeine Schweregradbewertung von Regelverstößen.

## Erste gemeinsame Beispielpakete

| Paket | Schwerpunkt und wichtige Regeln | Material | Zuerst zeigen |
|---|---|---|---|
| P01 Formularlayout | R009-R032, R065-R067 | HTML/CSS plus Screenshots; Angular erst für die funktionale Einbindung | Gemeinsame Kanten und Grundlinien, Labels, fachliche Gruppen, konkrete Abschlussaktionen, schmale und breite Ansicht. |
| P02 Zustände und Zielflächen | R033-R040, R073-R080 | HTML/CSS, Angular-Zustände und Screenshots | Normal, Fokus, Auswahl, Disabled; große Trefferflächen ohne überlappende Nachbaraktionen. |
| P03 Eingabe und Validierung | R068-R072, R081-R088 | Angular plus HTML/CSS und Zustandsbilder | Fehler am Feld, erhaltene Eingabe, verständliche Ursache, Korrektur und erneuter Versuch. |
| P04 Lange Vorgänge | R089-R104 | Ablaufcode und mehrere Screenshots; optional kurze Aufnahme | Warten, aussagekräftiger Fortschritt, Fehler, Erfolg; Pause und Abbruch nur bei unterstützter Semantik. |
| P05 Navigation und Übergänge | R105-R120 | HTML/CSS, bei Bedarf Routerbeispiel und Screenshots | Aktuelle Position, stabiler Rahmen, Breadcrumbs oder Tabs, Rückweg und lange Inhalte. |
| P06 Typografie und Palette | R041-R056 | CSS-Tokens und Vergleichsbilder | Gleicher Inhalt mit kurzen und langen Labels; unterstützte Themes und ruhige Hervorhebung. |
| P07 Icons im Ensemble | R057-R064 | Beschriftete Screenshots; Code für Benennung und Tooltips | Gleicher Satz mit klaren Gesamtformen, konsistentem Gewicht und ergänzendem Text. |
| P08 Tastatur Fokus und Modi | R121-R152, soweit betroffen | Semantisches HTML, Angular-Verhalten, ausgeführter Bedienablauf und Zustandsbilder | Aktueller Modus, sichtbarer Fokus, verständliche Reihenfolge und Rückkehr nach einer Unteransicht. |

Zu Beginn P01, P03 und P05 priorisieren: Sie verbinden viele Regeln in alltäglichen Ansichten. P02 und die für die Aufgabe relevante Zugänglichkeit unmittelbar mitprüfen. Es werden keine 160 isolierten Mini-Komponenten benötigt.

## Inhalt einer späteren Referenz

Eine neue Referenz bekommt eine stabile Kennung und die folgenden tatsächlich bekannten Angaben:

- abgedeckte R-IDs und die konkrete Eigenschaft, die übernommen werden soll;
- Rolle der Referenz: Inspiration, Gegenbeispiel, Kandidat oder bestätigte Projektausprägung;
- Herkunft, gegebenenfalls Link oder Quellpfad, sowie Stand oder Commit;
- betroffene Ansicht, Zustand, Viewport und Theme;
- vorhandene Dateien und tatsächlich ausgeführte Sicht- beziehungsweise Verhaltensprüfung;
- bekannte Grenzen, etwa „statischer Entwurf“ oder „API-Antwort simuliert“.

Eine kurze Vergleichsnotiz erklärt, warum eine Variante besser zur Aufgabe passt. Gegenbeispiele ausdrücklich kennzeichnen, damit sie nicht als Sollvorlage kopiert werden. Fremden Code vor Übernahme prüfen und an Projektkonventionen anpassen.

## Ablage bei tatsächlichem Material

Bestätigte projektspezifische Ausprägungen beim Zielprojekt halten, beispielsweise unter `docs/design/ui-references/`. Wiederverwendbare neutrale Patterns können später unter `assets/patterns/` dieses Skills liegen. Solange noch kein Material vorliegt, keine Platzhalterbilder, leeren Komponenten oder angeblich bestätigten Beispiele erzeugen.

Die Muster P01 bis P23 sind als geprüfte Referenzkandidaten mit HTML/CSS/JavaScript und Bildnachweisen vorhanden. P24 ist ein geprüfter Code-Referenzkandidat ohne Bildnachweis; die Prüfung betrifft Rollen, Namen und Tastaturverhalten. P25 bis P28 sind geprüfte Kandidaten mit Code und Zustandsbildern; Bewegung wird zusätzlich durch Ausführung geprüft. Die Arbeitsnotizen N01 bis N04 ergänzen aufgabenbezogene Entscheidungen ohne Bild oder behauptete Ausführungsprüfung. Der [Auswahlstand](reference-backlog.md) unterscheidet sinnvolle nächste Beispiele von Regeln, deren Text oder Notiz zunächst genügt. Der [Schnelleinstieg](quick-index.md) führt direkt zum passenden Muster; die tatsächlich abgedeckten Regeln stehen in der Regelmatrix. Die Pakete decken jeweils konkrete Teilaspekte ab und ersetzen keine projektspezifische Prüfung.
