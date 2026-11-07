---
name: c4-modeling
description: Entwirft oder aktualisiert C4-Systemkontext L1 und Container L2 mit Mermaid flowchart und subgraph aus geklärten Anforderungen und bekanntem Projektkontext.
metadata:
  version: "0.2.0"
  schema-version: "2"
  usable_in_phases: "analysis, design"
  kind: capability
---

# Skill: C4 Modeling

## Zweck

Systemgrenzen, externe Beteiligte und die Verantwortung von Anwendungen und Datenspeichern als zusammenhängende C4-Sichten dokumentieren.

## Verwenden

- Für die Makroarchitektur einer neuen Systemidee oder eine tatsächlich betroffene Architekturgrenze.
- Vorhandene aktuelle Sichten wiederverwenden und nur den vereinbarten Scope verändern.
- Detaillierte Ablaufreihenfolgen mit `sequence-modeling` bearbeiten. L3/L4 und Deployment-Sichten gehören nicht zum Scope dieses Skills.

## Eingaben

Geklärte Anforderungen und Kriterien, Systemgrenze, bekannte Nutzer und Fremdsysteme, tatsächliche oder ausdrücklich geplante Anwendungen/Datenspeicher, bestätigte Technologieentscheidungen, geltende Projekt-/Developer-Regeln und bestehende Diagramme übernehmen. Fehlenden Bestand vorgelagert erfassen lassen.

## Vorgehen

1. Scope und bekannte Architektur prüfen. Unbestätigte Technologie- oder Systementscheidungen markieren; bei wesentlichen offenen Richtungen durch den Aufrufer `brainstorming` oder gezielte Recherche veranlassen.
2. Beim ersten Systementwurf L1 erstellen. Die eigene Software als ein System darstellen, umgeben von direkt beteiligten Nutzerrollen und externen Systemen. Technische Innendetails nicht in diese Sicht aufnehmen.
3. Auf dieser Systemgrenze L2 aufbauen. Anwendungen und Datenspeicher innerhalb der Grenze mit Verantwortung und bekannten Technologien zeigen. Ein C4-Container bezeichnet eine Anwendung oder einen Datenspeicher und setzt keinen Docker-Container voraus.
4. Die Notation durchgehend mit Mermaid `flowchart` und `subgraph` schreiben. Namen, stabile Element-IDs, Typenkennzeichnung und eine Legende zwischen L1, L2 und späteren Sequenzen konsistent halten. L1 zeigt dasselbe System, das L2 aufgliedert.
5. Jede Beziehung mit Zweck und Richtung beschriften. In L2 bekannte Kommunikationsmechanismen/Protokolle ergänzen. Geplante oder ungeklärte Beziehungen und Technologien ausdrücklich kennzeichnen; sie nicht als bestehenden Implementierungsstand ausgeben.
6. Jeden zusätzlichen Container oder jede neue Integration auf aktuelle Anforderungen, vorhandene Grenzen oder konkrete Constraints zurückführen. Keine Datenbank, Queue, Cache oder Abstraktionsschicht nur wegen eines Beispiels einführen.
7. Mit [assets/context.md](assets/context.md) und [assets/container.md](assets/container.md) die beauftragten Sichten schreiben. Die Vorlagen zeigen Notation, keine vorgeschriebene Architektur: Elemente ohne konkreten Nachweis entfernen und nur tatsächlich erforderliche Elemente ergänzen. Im Gesamtworkflow lauten die gemeinsamen Pfade `docs/architecture/c4-context.md` und `docs/architecture/c4-containers.md`.
8. Syntax und sichtbare Lesbarkeit mit dem verfügbaren Mermaid-Renderer prüfen. Für GitHub dessen tatsächlich unterstützte Syntax berücksichtigen. Entwurf, bestehenden Stand und ausgeführte Prüfung auseinanderhalten.

## Output

- L1-/L2-Mermaid-Sichten im angeforderten Scope mit Legende und eindeutigem Systemnamen.
- Verzeichnis der stabilen Element-IDs, Verantwortungen und relevanten Story-/Kriterienreferenzen.
- Geänderte Architekturentscheidungen zur ADR-Erfassung und konkrete offene Fragen.
- Tatsächlich ausgeführte Syntax-/Sichtprüfung oder benannte Prüflücke.

## Grenzen und Qualitätskriterien

- Mermaid `C4Context`, `C4Container`, PlantUML und externe Bildformate nicht als Diagrammquellen verwenden.
- Keine Komponenten-/Klassenhierarchie oder umgebungsspezifische Deployment-Topologie in L2 hineinziehen.
- Keine Version, Skalierungsanforderung oder Fremdsystemintegration erfinden.
- Die Diagramme müssen mit den relevanten Kriterien vereinbar sein; sie belegen deren Erfüllung nicht.
- Als maßgebliche Semantik dienen [C4 System Context](https://c4model.com/diagrams/system-context) und [C4 Container](https://c4model.com/diagrams/container). Bei Semantikfragen die benötigte Primärquelle lesen. [Mermaid C4](https://mermaid.js.org/syntax/c4.html) beschreibt den experimentellen Spezialsyntax; dieses Paket verwendet stattdessen das festgelegte Flowchart-Profil.
- Deutsch beschriften; technische IDs und festgelegte Namen erhalten. Eigenständig nur die beauftragten Artefakte ändern.
