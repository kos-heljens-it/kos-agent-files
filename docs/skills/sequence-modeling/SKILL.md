---
name: sequence-modeling
description: Spezifiziert relevante Nutzer- und Integrationsabläufe als Mermaid-Sequenzen aus vorhandenen Stories, Kriterien und Architekturgrenzen.
metadata:
  version: "0.2.0"
  schema-version: "2"
  usable_in_phases: "analysis, design"
  kind: capability
---

# Skill: Sequence Modeling

## Zweck

Umsetzungsrelevante Interaktionen, Verantwortungen und Fehlerverhalten eines bekannten Szenarios so dokumentieren, dass daraus konkrete technische Planung und spätere Prüfungen entstehen können.

## Verwenden

- Für einen nicht offensichtlichen Ablauf über mehrere Beteiligte oder eine wichtige Systemgrenze.
- Für relevante Nebenläufigkeit, Transaktionsgrenzen, Wiederholungen oder Teilfehler, wenn sie zum vereinbarten Scope gehören.
- Triviale interne Aufrufe brauchen keine zusätzliche Diagrammserie.

## Eingaben

Story und vollständige Kriterien, bekannte Architekturteilnehmer mit stabilen Namen/IDs, Vorbedingungen, bestätigte Verträge und Entscheidungen sowie relevante Fehler-/Betriebsconstraints übernehmen. Fehlende Produkt- oder Architekturentscheidungen durch den Aufrufer klären lassen.

## Vorgehen

1. Ein klar benanntes Szenario wählen und mit Story-/Kriterien-IDs verbinden. Vorbedingungen, Auslöser und beobachtbares Ergebnis festhalten.
2. Teilnehmer aus der vorhandenen Architektur übernehmen. Ein nötiges neues Systemelement als Architekturänderung an `c4-modeling` zurückgeben; keine isolierte neue Integration in einer Sequenz erfinden.
3. Den Hauptablauf mit Mermaid `sequenceDiagram` in tatsächlicher beziehungsweise ausdrücklich geplanter Reihenfolge beschreiben. Nachrichten zeigen Zweck und bekannten Vertrag. Noch nicht entschiedene API-Details als offen markieren. Steuerzeichen in Beschriftungen berücksichtigen: ein Semikolon im Nachrichtentext als `#59;` schreiben oder den Text umformulieren; das Wort `end` bei Bedarf einklammern.
4. Relevante Alternativen mit `alt`, bedingte Schritte mit `opt` und tatsächliche Wiederholungen mit `loop` zeigen. `par` nur bei bestätigter Nebenläufigkeit verwenden. Kritische Rechte-, Validierungs- oder Fehlerfälle aus den Kriterien aufnehmen.
5. Bei echten externen Nebenwirkungen relevante Timeouts, Wiederholbarkeit, Teilfehler und Konsistenzgrenzen beschreiben. Nur bestätigte Kompensations-/Transaktionsentscheidungen darstellen; ein ungeklärter Zustand bleibt eine offene Architekturentscheidung.
6. Für jedes relevante Ergebnis eine spätere Verifikationsidee angeben. Protokollcodes, Timeout-Werte oder Idempotenzmechanismen nur verwenden, wenn bekannt oder ausdrücklich entschieden.
7. Mit [assets/sequence.md](assets/sequence.md) im beauftragten Pfad schreiben. Im Gesamtworkflow gilt `docs/design/<scope>/sequences/<scenario>.md`. Teilnehmer und Zweige der Notationsvorlage an den tatsächlichen Scope anpassen.
8. Gegen C4, Kriterien und ADR abgleichen und die verfügbare Mermaid-Syntax-/Sichtprüfung ausführen. Bei einem Syntaxfehler die Quelle korrigieren und erneut prüfen. Ungeprüfte Darstellungen ausdrücklich benennen.

## Output

- Eindeutig benanntes Szenario mit Vorbedingungen und Kriterienreferenzen.
- Mermaid-Sequenz mit Hauptablauf und den relevanten Alternativen/Teilfehlern.
- Erwartete sichtbare Ergebnisse, geplante Verifikation und offene Entscheidungen.
- Konsistenz-/Renderprüfergebnis mit tatsächlicher Evidenz oder Prüflücke.

## Grenzen und Qualitätskriterien

- Keine Anwendung implementieren, Tests ausführen oder GitHub-Issues erstellen.
- Keine neuen Kriterien oder künstlichen Fehlermechanismen hinzufügen.
- Keine verteilte Operation allein durch parallele Pfeile als atomar oder konsistent darstellen.
- Teilnehmer müssen zum beschriebenen Architekturstand passen. Neue bedeutende Entscheidungen zur ADR-Erfassung zurückgeben.
- Bei Syntaxfragen die benötigten Abschnitte der [Mermaid-Sequence-Dokumentation](https://mermaid.js.org/syntax/sequenceDiagram.html) lesen.
- Deutsch formulieren; technische IDs und festgelegte Vertragsnamen erhalten. Eigenständig nur beauftragte Artefakte ändern.
