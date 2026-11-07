# N01 Bedienung und zugängliche Semantik

Bei Änderungen an interaktiven Elementen gezielt verwenden; die Beispiele erklären Entscheidungen und sind keine bestandene Screenreader- oder Touchprüfung.

- **R064, R149:** Einen Icon-Button mit einem verständlichen zugänglichen Namen versehen; Tooltip nur ergänzend. Ein informatives Bild braucht eine zum Kontext passende Textalternative, ein rein dekoratives Bild `alt=""`. Vorhandene Komponenten und Benennungskonventionen übernehmen.
- **R148:** Fachliche Gruppen im DOM nachvollziehbar strukturieren. Zum Beispiel verbindet `<fieldset><legend>Lieferart</legend>…</fieldset>` mehrere Optionen mit ihrer gemeinsamen Frage. Visuelle Position allein erklärt die Beziehung bei linearer Ausgabe nicht.
- **R080, R131:** Eine Aktion darf nicht nur per Geste erreichbar sein. Bei Touch eine begonnene Aktion vor der Auslösung abbrechen können, soweit die Aufgabe dies erlaubt. Native Buttons bevorzugen; bei eigener Pointerlogik auch `pointercancel` und das Verlassen der Zielfläche betrachten.

**Prüfen:** Mit Tastatur durch den konkreten Ablauf gehen; Name, Rolle und Zustand mit den verfügbaren Accessibility-Werkzeugen prüfen. Für Screenreader und Touch die tatsächlich unterstützte Kombination aus Gerät und Technik ausführen und Ergebnisse getrennt dokumentieren. Ein DOM-Check oder Screenshot ersetzt diese Prüfung nicht. Siehe [Dialog und Fokus](../../assets/patterns/p08-dialog-focus/pattern.md), [alternative Auswahl](../../assets/patterns/p11-overlap-snap/pattern.md) und [Icons](../../assets/patterns/p07-icon-ensemble/pattern.md).
