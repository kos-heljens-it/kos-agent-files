# N04 Prozesse, Wiederaufnahme und Anschlussaktionen

Bei langlaufenden Vorgängen, Konflikten und großen dynamischen Listen gezielt verwenden.

- **R098:** Falls ein Vorgang tatsächlich nicht abgebrochen werden kann, vor dem Start über diese Einschränkung und bekannte Dauer oder Abschlussbedingungen informieren. Unbekannte Restzeit als unbekannt behandeln.
- **R102:** Während eines laufenden Vorgangs andere sinnvolle Arbeit ermöglichen, sofern die Operation es erlaubt. Status und tatsächlich unterstützte Bedienmöglichkeiten erreichbar halten; keine Abbruch- oder Pausenfunktion simulieren, die das Backend nicht unterstützt.
- **R103:** Eine notwendige Korrektur dort anbieten, wo das Problem erkannt wird. Bei einem Namenskonflikt beispielsweise Namen im selben Ablauf ändern und erneut versuchen; ursprüngliche Eingaben erhalten.
- **R104:** Bei Bedarf vorhandene Daten und Teilobjekte wiederverwenden, ohne unverlangt Änderungen zu überschreiben. Vorhandene Komponenten und Fachregeln des Zielprojekts verwenden.
- **R120:** Beim Nachladen prüfen, ob ein zuvor sichtbarer Eintrag und der Rückweg auffindbar bleiben. Bei unbekannter Gesamtlänge keine erfundene Gesamtzahl anzeigen; Prüfumfang und tatsächliche Datenquelle festhalten.

**Prüfen:** Verzögerten Erfolg, relevanten Fehler und Wiederaufnahme mit der tatsächlichen oder ausdrücklich simulierten Datenquelle ausführen. Eine lokale Simulation belegt weder echte Abbruchsemantik noch Persistenz oder parallele Backend-Verarbeitung. Siehe [Prozessbeispiel](../../assets/patterns/p04-process/pattern.md), [Ereignisliste](../../assets/patterns/p16-event-history/pattern.md) und [Eingaben übernehmen](../../assets/patterns/p09-data-reuse/pattern.md).
