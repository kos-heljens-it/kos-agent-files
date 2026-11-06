# P03 Eingabe und Rückmeldung

**Status:** geprüfter Referenzkandidat, keine bestätigte Produktvorgabe. [Demo öffnen](index.html).

| Regeln | Im Beispiel |
|---|---|
| R072 | Fehlerhafte und übrige Eingaben bleiben zur Korrektur erhalten. |
| R081-R082 | Nach dem Speichern erscheint sofort ein Status; Feldfehler stehen direkt am Feld. |
| R083-R085 | Eine konkrete Meldung erklärt den Fehler und bietet den erneuten Versuch an. |
| R086-R087 | Der Button benennt die Handlung; eine zusätzliche Bestätigung ist nicht erforderlich. |

**Ablauf:** Ungültige Adresse eingeben und speichern. Der Fokus springt auf das Feld; Fehlertext und `aria-invalid` sind dem Eingabefeld zugeordnet. Nach Korrektur wird beim ersten gültigen Versuch ein Fehler simuliert, beim zweiten ein Erfolg. Die Werte bleiben erhalten. Während des kurzen simulierten Vorgangs sind die Felder schreibgeschützt und der Button gesperrt.

**Dateien:** [HTML](index.html), [CSS](validation.css), [Verhalten](validation.js). [Feldfehler](screenshots/field-error.png), [Speicherfehler](screenshots/save-error.png), [mobiler Feldfehler](screenshots/field-error-mobile.png) und [Ausgangszustand](screenshots/initial.png).

Die Screenshots wurden in Edge betrachtet. [Prüfergebnis](verification.json): Feldfehler, Fokus, Erhalt der Eingaben, Ladezustand und wiederholter Versuch; mobiler Feldfehler bei 390 px; keine Netzwerkzugriffe. Der Ablauf ist lokal simuliert und speichert nichts. Es handelt sich um HTML/CSS/JavaScript, keine geprüfte Angular- oder Backend-Integration und kein vollständiges Accessibility-Audit. Beim Übertragen in Angular die bestehende Formularbibliothek und Fehlerverarbeitung des Zielprojekts verwenden.
