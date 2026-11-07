---
name: online-publication-check
description: "Vergleicht veröffentlichte Rohdateien der konfigurierten GitHub-Pages-Bibliothek mit dem erwarteten Commit."
metadata:
  version: "1.0.0"
  schema-version: "2"
  covers_phases: "verification, observation"
  kind: workflow
---

# Online Publication Check

## Verwendung

Nach tatsächlicher Veröffentlichung oder bei Zweifeln an deren Aktualität rein
lesend prüfen. `library.json` aus dem Bibliotheks-Checkout bestimmt Repository,
Pages-Basis und Publikationsbranch. Ohne Checkout entsprechende Werte explizit
vom aufrufenden Kontext übernehmen; kein fremdes Upstream-Repository voraussetzen.

## Ablauf

1. Erwartete Commit-SHA bestimmen und festhalten. Nicht versehentlich einen lokalen
   unveröffentlichten Arbeitsbranch mit dem Pages-Stand verwechseln.
2. Pages-Konfiguration und Deployment-/Build-Status über GitHub lesen: erwarteter
   Branch und `/docs`, erfolgreicher Stand und zugehörige Commit-SHA müssen passen.
   Bei Actions-Deployment dessen tatsächliche Source-/Deployment-SHA prüfen.
3. `AGENTS.md`, `registry.json`, alle im Katalog benannten Skill-Dateien/Ressourcen
   sowie die verlinkten gemeinsamen Regeln und Codex-Vorlagen über die konfigurierte
   Pages-Basis abrufen. HTTP-Status, vollständige Bytes und Rohdatei-Format prüfen.
4. Markdown-Erreichbarkeit gegen den erwarteten Git-Stand prüfen; fehlende Ziele
   und unerwartete HTML-/Jekyll-Transformation als Fehler ausweisen.
5. Inhalte und Hashes gegen genau den erwarteten Commit vergleichen. Bei Text nur
   CRLF/LF vereinheitlichen, binäre Ressourcen bytegenau prüfen. Hashes aus demselben
   unbestätigten Online-Katalog allein beweisen keine Übereinstimmung zum Git-Commit.
6. Bei einem Web-/Browser-Abruffehler einen verfügbaren HTTP-Shell-Fallback versuchen.
   Unerreichbare, gemischte oder veraltete Dateien mit konkreten URLs und SHAs melden.

## Ergebnis und Grenzen

Erwartete/tatsächliche SHA, Pages-Quelle, Deployment-Status, geprüfte Dateien,
Erreichbarkeit, Vernetzung und Inhaltsgleichheit berichten. Keine Publikation,
Pages-Einstellung oder versionierte Datei ändern. Lokale Validierung allein
beweist keine erfolgreiche Online-Veröffentlichung.
