---
name: playwright-testing
description: Plant, erstellt und verifiziert automatisierte Playwright-Tests für Angular-Nutzerabläufe nach Heljens-Regeln; für E2E-Abdeckung, visuelle Referenzen und die Analyse konkreter Testfehler.
metadata:
  version: "1.0.0"
  schema-version: "2"
  usable_in_phases: "verification, acceptance"
  kind: capability
---

# Playwright Testing

## Ziel und Verwendung

Einen vereinbarten Angular-Nutzerablauf mit nachvollziehbaren Playwright-Nachweisen absichern. Bestehende Tests und Projektkonventionen übernehmen; fehlende Voraussetzungen von einem Produktfehler unterscheiden.

Für Testplanung, einen ausdrücklich beauftragten Test-Setup, neue oder geänderte Tests und gezielte Testläufe verwenden. Reine Browserbedienung ohne Testauftrag und explorative Design-Prototypen benötigen diesen Skill nicht automatisch.

## Verbindlicher Kontext

Die geltenden Einstiegsdateien und `PROJECT.md` des Zielprojekts kennen. Vollständige, hinreichend aktuelle Fassungen wiederverwenden; fehlende Regeln vor dem jeweiligen Schritt laden:

- [Tester](../../roles/tester/TESTER.md)
- [Tester Angular](../../roles/tester/TESTER.Angular.md)
- [Tester Angular Playwright](../../roles/tester/TESTER.Angular.Playwright.md)
- [Code Testing](../code-testing/SKILL.md) für die reine Ausführung vorhandener Prüfungen.

Technologiespezifische Developer-Regeln über `TECHNOLOGIES.md` nur laden, wenn Testcode, Konfiguration oder Anwendungscode tatsächlich geändert werden. Dokumenttitel beim Laden gemäß Heljens nennen. Dieser lokale Skill ergänzt die veröffentlichten Regeln und ersetzt sie nicht.

## Auftrag und Übergabe

Zielrepository, Scope, Ausgangsstand, relevante Stories/AC, Testumgebung und erwarteten Nachweis übernehmen. Testentwurf und Ergebnisbewertung an die verfügbare Tester-Rolle delegieren; beauftragte Code-/Konfigurationsänderungen gemäß dem aufrufenden Workflow an Developer-Verantwortung übergeben. Gemeinsame Dateien nicht unkoordiniert schreiben.

Vorhandene `package.json`, Lockfile, Playwright-Konfiguration, Fixtures und CI im betroffenen Scope lesen. Testpfade und Kommandos daraus ableiten. Fehlt noch eine Anwendung oder Testkonfiguration, einen konkreten Setup-Bedarf melden; keinen leeren Lauf als erfolgreichen E2E-Nachweis ausgeben.

## Planung und Erstellung

1. Fachliche Nutzerflows und interaktive Aktionen auf die vereinbarten AC abbilden. Für den Auftrag relevante Fehler-, Rollen-, Lade-, Disabled- und Tastaturzustände einschließen. Ein Test darf mehrere zusammengehörige Aktionen abdecken; nicht pro Klick künstlich eine eigene Spec erzwingen.
2. Zwei Nachweisarten unterscheiden: kontrollierte UI-Tests mit simulierten API-Antworten und echte Browser–API–Datenbank-Abläufe. Gemockte Persistenz nicht als nachgewiesene reale Speicherung melden. Kritische integrierte Abläufe gegen eine isolierte Testinstanz planen.
3. Unterstützte Browser, Themes und Viewports aus dem vereinbarten Projektkontext übernehmen. Fehlende Matrix explizit klären. Die von Heljens verlangten visuellen Referenzen für relevante Components und unterstützte Kombinationen in der Abdeckung berücksichtigen.
4. Kontrollierte Testidentitäten, Daten, Geschäftsdatum und Cleanup vorsehen. Anmeldung, Rechteprüfung und Persistenz nicht mit echten Mitarbeiterkonten prüfen. Fixture- und Spec-Ablage an den Heljens-Angular-Regeln und der gewählten Testart ausrichten.
5. Beobachtbare Ergebnisse über robuste Rollen-/Label-Locators und wiederholende Assertions prüfen. Weder feste Sleeps noch zufällige Warteverlängerungen als Reparatur verwenden. Vorhandene Hilfen wiederverwenden; Page Objects nur bei tatsächlichem Wiederverwendungsnutzen einführen.
6. Bei ausdrücklich beauftragtem Setup kompatible Versionen und Browser-Binaries festhalten; keine pauschalen Updates oder ungeprüften Scaffold-Überschreibungen. Nur die für den vereinbarten Prüfumfang erforderlichen Abhängigkeiten und Browser bereitstellen.

## Ausführung und Fehler

Vorhandene Tests über `code-testing` ausführen; den kleinsten aussagekräftigen Umfang passend zu AC und Änderung wählen. Produktive Konfiguration, Tests und Referenzbilder während eines reinen Prüflaufs nicht verändern.

Pro Fehler den betroffenen Test, Commit, sichtbaren Soll-/Istzustand und vorhandenen lokalen Trace/Report auswerten. Produktfehler an Developer, widersprüchliche Anforderungen an Planner/Orchestrator und Umgebungsprobleme als solche zurückmelden. Korrekturen bleiben im autorisierten Scope; anschließend den betroffenen Nachweis wiederholen.

Visuelle Abweichungen tatsächlich betrachten. Referenzbilder nur für eine beabsichtigte, überprüfte Designänderung aktualisieren; kein automatisches Akzeptieren eines roten Vergleichs. Fehlgeschlagene Prüfungen nicht durch Skip, schwächere Assertions oder zusätzliche Retries verstecken.

## Ergebnis

Kompakt berichten: geprüfter Stand und Umgebung, ausgeführte Kommandos, Ergebnis je relevantem AC/Flow, Mock-/Integrationsgrenze, visuelle Matrix, lokale Belege, nicht ausgeführte Prüfungen und nächster zuständiger Schritt. Screenshots, Traces und Auth-State können sensible Inhalte enthalten; nur kontrollierte Testdaten verwenden und Artefakte nicht ungeprüft veröffentlichen oder committen.

Der Skill autorisiert keine GitHub-Mutation, keinen Commit, Push oder Merge und keine Änderung fremder Systeme.

## Projektkontext

Testpfade, Browser, Themes und Viewports aus PROJECT.md und den aktuellen Design-/Testartefakten des Zielprojekts übernehmen. Keine projektspezifische Matrix voraussetzen.

## Technische Referenzen

Bei fehlenden oder versionsabhängigen Details gezielt die offiziellen [Best Practices](https://playwright.dev/docs/best-practices), [Assertions](https://playwright.dev/docs/test-assertions), [Authentication](https://playwright.dev/docs/auth) und [Trace Viewer](https://playwright.dev/docs/trace-viewer) lesen. Keine vollständigen Handbücher oder Heljens-Regeln in diesen Skill kopieren.
