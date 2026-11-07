# Auswirkungsanalyse

**Verwenden:** Änderung an einem bestehenden Modul, Datenmodell oder Vertrag.
**Eingaben:** geplante Änderung, bekannte Consumer und betroffener Repository-Stand.
**Ergebnis:** betroffene Consumer, Verträge, Daten und passende Verifikation.
**Stopp:** relevante Abhängigkeiten ausreichend eingegrenzt oder Zugriffslücke benannt.

1. Direkte Aufrufer, öffentliche APIs, Persistenz und Konfigurationsverbraucher suchen.
2. Rückwärts zu Eingaben und vorwärts zu tatsächlich betroffenen Ergebnissen verfolgen.
   Textsuche allein beweist weder Vollständigkeit noch Laufzeitnutzung.
3. Verhalten, Schema, Fehlerformen und Kompatibilitätsanforderungen abgleichen.
4. Pro relevanter Auswirkung konkrete Datei/Schnittstelle, Risiko und Nachweis nennen.
5. Unbekannte externe Consumer markieren; keine erfundenen Abhängigkeiten aufnehmen.

Nicht automatisch das ganze Repository auditieren oder fremde Consumer ändern.
