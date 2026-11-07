# Datenflussanalyse

**Verwenden:** Werte werden falsch, gehen verloren oder unterscheiden sich zwischen Schichten.
**Eingaben:** konkreter Datenfall, erwartetes Ergebnis, bekannte Ein-/Ausgangsstellen.
**Ergebnis:** erste belegte Abweichung und verletzter Vertrag an einer Grenze.
**Stopp:** Abweichung lokalisiert oder nötige Beobachtungsmöglichkeit fehlt.

1. Den konkreten Wert vom Eingang über Validierung, Mapping, Fachlogik und Persistenz
   bis zur Ausgabe verfolgen. Bei Bedarf rückwärts vom falschen Ergebnis eingrenzen.
2. An relevanten Grenzen Typ, Einheit, Null-/Default-Semantik, Zeit-/Zeitzone und
   Serialisierung prüfen. Bestehende Logs oder kontrollierte Tests verwenden.
3. Den ersten nachweislich falschen Übergang bestimmen; keine lückenlose Spur vortäuschen.
4. Direkte Ursache und nachgelagerte Symptome trennen, betroffene Fälle und Nachweis nennen.

Keine Secrets oder personenbezogenen Echtdaten als Diagnoseausgabe übernehmen.
