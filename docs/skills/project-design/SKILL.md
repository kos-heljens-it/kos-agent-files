---
name: project-design
description: Führt die erste Gesamtprojektierung von einer Idee, freigegebenen Phase oder einem Epic über Stories, Mermaid-Architektur und ADR bis zu einem prüfbaren Design-Paket und optionalen GitHub-Issues.
metadata:
  version: "0.2.0"
  schema-version: "2"
  covers_phases: "discovery, analysis, design, planning"
  kind: workflow
---

# Workflow: Project Design

## Ziel

Eine freigegebene Zielvorstellung in zusammenhängende Anforderungsspezifikationen, Architektur und ausführbare Issue-Grundlagen überführen. Der Workflow koordiniert die vier mitgelieferten atomaren Skills und die bestehenden Heljens-Workflows. Die Umsetzung beginnt anschließend mit `/implement`.

## Verwenden

- Für die erste Gesamtprojektierung oder das Design einer freigegebenen Projektphase.
- Bei einem bestehenden Epic an dessen bekannten Designstand anschließen.
- Für eine einzelne Diagramm- oder ADR-Aufgabe den passenden atomaren Skill direkt verwenden.

## Eingaben und Betriebsart

Übernehmen: Zielvorstellung oder Phase/Epic, Zielrepository, geltende Regeln und `PROJECT.md`, bekannten Bestand, vorhandene Spezifikationen sowie bereits erteilte Freigaben.

- **Entwurf:** Design-Artefakte erstellen oder aktualisieren; dies ist die Betriebsart ohne Auftrag zur GitHub-Materialisierung.
- **GitHub:** Nach der Design-Freigabe den vereinbarten Scope materialisieren, wenn dies ausdrücklich beauftragt oder im aktuellen Auftrag bereits autorisiert ist.

Die Betriebsart wird aus der natürlichen Anfrage bestimmt und im Fortschrittsdokument genannt. Sie ist keine neue Slash-Command-Grammatik. Den lokalen Workflow als `$project-design` oder durch eine passende natürliche Anfrage auswählen; seine ID steht im gemeinsamen Skill-Katalog.

## Verwendete Skills und Workflows

- [User Story Specification](../user-story-specification/SKILL.md)
- [C4 Modeling](../c4-modeling/SKILL.md)
- [Sequence Modeling](../sequence-modeling/SKILL.md)
- [ADR Authoring](../adr-authoring/SKILL.md)
- Heljens `project-implementation-planning` für ein noch offenes projektweites Zielbild.
- Heljens `requirements-clarification` und `brainstorming` bei fachlichem Klärungsbedarf.
- Heljens `issue-to-sub-issues` und seine atomaren Skills für die abschließende Issue-Zerlegung.

Die Heljens-Quellen und die lokale Übergabegrenze stehen in [references/heljens-handoff.md](references/heljens-handoff.md). Diese Referenz zu Beginn der Orchestrierung lesen. Die vollständigen externen Regeln nur für den jeweils ausgewählten Schritt laden und dem User deren Dokumenttitel nennen. Einen atomaren Skill unmittelbar vor seiner Verwendung vollständig lesen. Fehlende Paketbestandteile als konkreten Blocker melden.

## Ablauf

### 1. Kontext und Fortschritt übernehmen

1. Zielrepository eindeutig bestimmen. Seine Root- und bereichsspezifischen Arbeitsregeln, `PROJECT.md` sowie relevante Artefakte lesen. Bekannten Bestand über die passenden vorgelagerten Skills erfassen; Anwendungstechnologien und Versionen aus dem Zielprojekt übernehmen.
2. Einen konkreten englischen Scope-Slug bestimmen. Das Fortschrittsdokument unter `docs/design/<scope>/design.md` mit [assets/design.md](assets/design.md) anlegen oder fortführen. Vorhandene Ergebnisse, Freigaben, Scope-Grenzen und den letzten abgeschlossenen Schritt übernehmen.
3. Vorhandene freigegebene Ergebnisse wiederverwenden. Wiederaufnahmen beginnen am ersten offenen oder durch eine Änderung betroffenen Schritt.
4. Human-Freigaben mit Umfang und Bezug dokumentieren. Eine bereits passende ausdrückliche Freigabe weiterverwenden; fehlende Freigaben nicht aus Schweigen, einem Dateistatus oder einer Agentenbewertung ableiten.

### 2. Zielbild und Phase klären

1. Bei offener projektweiter Zielvorstellung Heljens `project-implementation-planning` einschließlich seines Human-Gates verwenden. Sein Ergebnis sind große Phasen oberhalb der Epic-Ebene.
2. Eine freigegebene Phase für den aktuellen Durchlauf auswählen. Ihre Quelle, ihren eigenen Status und die Phasenfreigabe getrennt vom Designstatus dokumentieren. Bei mehreren Phasen die gemeinsame Architektur wiederverwenden und jeweils nur den vereinbarten Phasenscope weiter detaillieren.
3. Ein bereits vorhandenes passendes Epic übernehmen. Eine wesentliche ungeklärte Scope-Grenze zuerst klären; den Umfang nicht automatisch auf Geschwister oder andere Phasen ausdehnen.

### 3. User Stories spezifizieren

1. Mit `user-story-specification` die fachlichen Szenarien und Akzeptanzkriterien unter `docs/design/<scope>/stories.md` formulieren.
2. Scope, Nicht-Ziele, relevante Qualitätsanforderungen und Annahmen prüfen. Diese Stories sind Anforderungsspezifikationen; der endgültige native Issue-Baum wird später gebildet.
3. Die Kriterien in die Nachverfolgung des Fortschrittsdokuments übernehmen. Noch keine technische Task-Zerlegung oder Dateimikroplanung vorziehen.

### 4. Architektur und Verhalten entwerfen

1. Mit `c4-modeling` einen L1-Kontext und L2-Container entwerfen oder gezielt aktualisieren. Projektweite Diagramme unter `docs/architecture/c4-context.md` und `docs/architecture/c4-containers.md` wiederverwenden. Phasenspezifische Änderungen eindeutig kennzeichnen.
2. Mit `sequence-modeling` die umsetzungsrelevanten Nutzer- und Integrationsabläufe unter `docs/design/<scope>/sequences/` beschreiben.
3. Wesentliche Architekturentscheidungen während ihrer Klärung mit `adr-authoring` festhalten. Vor dem nächsten Schritt die ADR vollständig gegen die getroffenen Entscheidungen prüfen.
4. Namen, Systemgrenzen, Zuständigkeiten und relevante Fehlerfälle zwischen Stories, C4 und Sequenzen abgleichen. Diagramme nur für tatsächlich relevante Struktur oder Verhalten erzeugen.

### 5. Design prüfen und freigeben

1. Scope und Kriterien mit Architektur, Sequenzen und ADR abgleichen. Pro Kriterium dessen Referenzen und die geplante spätere Verifikation erfassen. Nicht benötigte Diagramm-/ADR-Referenzen begründet als nicht erforderlich kennzeichnen.
2. Prüfen, dass keine Kriterien verloren gehen, keine unbeauftragten Anforderungen hinzukommen und wesentliche Entscheidungen entweder getroffen oder konkret blockiert sind. Ein technisch offener Bereich kann als ausdrücklich vereinbarter Spike weitergegeben werden; ihn nicht als ausführbaren Implementierungs-Task ausweisen.
3. Mermaid-Blöcke mit dem verfügbaren Renderer prüfen. Die Syntax des Ziel-GitHub-Renders berücksichtigen; nur tatsächlich ausgeführte Syntax- und Sichtprüfungen als erfolgreich berichten. Fehlende Renderverifikation benennen.
4. Das vollständige Design-Paket mit noch offenen Entscheidungen zur Human-Freigabe vorlegen. Passende bereits erteilte Freigaben weiterverwenden. Ohne Freigabe bleibt das Paket `DRAFT`; bei einem Hindernis, das den vereinbarten Abschluss verhindert, `BLOCKED` mit konkretem Grund setzen.
5. Nach ausdrücklicher Freigabe und aufgelösten wesentlichen Designfragen `READY` setzen. Das bedeutet Designreife und keine bereits erfüllten Produkt-Akzeptanzkriterien.
6. In Betriebsart Entwurf das Ergebnis mit Artefaktpfaden, Prüfergebnis und nächstem offenen Schritt übergeben.

### 6. In GitHub materialisieren

1. Nur in Betriebsart GitHub und im freigegebenen Scope fortfahren. Fehlenden Erstellungsauftrag als ausstehenden Übergabeschritt nennen; neue Freigaben nur für tatsächlich neue oder wesentlich geänderte Entscheidungen anfordern.
2. Vor jedem externen Schreibzugriff die vollständigen einschlägigen Heljens-Regeln gemäß der Übergabereferenz laden. Zielrepository, vorhandene Issues, Templates, native Typen/Beziehungen und Berechtigungen prüfen.
3. Vor der Materialisierung einer Phase deren kanonischen Vertrag aus `project-implementation-planning` prüfen: eigener Status `READY` und tatsächliche Phasenfreigabe mit Quelle müssen vorliegen. Design-`READY` ersetzt dies nicht. Pro ausgewählter Phase genau ein passendes Epic wiederverwenden oder mit `github-issue-ops` (Modus `create`) und `github-issue-ops` (Modus `type`) materialisieren. Bei einem unabhängig vorhandenen Epic dessen vereinbarten Scope erhalten; ihm keinen erfundenen Phasenursprung zuweisen.
4. Das freigegebene Design-Paket als Kontext an Heljens `issue-to-sub-issues` übergeben und die rekursive Zerlegung ausführen. Vorhandene passende Children wiederverwenden. Die Spezifikations-IDs helfen bei der Zuordnung; sie erzwingen keine künstliche eins-zu-eins-Abbildung auf GitHub-Issues.
5. Für die technische Task-Planung bekannten Repository-Kontext vorgelagert bereitstellen. `code-implementation-planning` prüft fehlenden technischen Kontext gezielt selbst. Jeder als ausführbar bezeichnete Task muss den kanonischen Task-Issue-Vertrag erfüllen; unbekannte Dateien und Entscheidungen nicht erfinden.
6. Erforderlicher Designkontext muss im Issue selbst oder in nachweislich erreichbaren Referenzen verfügbar sein. Unveröffentlichte lokale Dateipfade nicht als funktionierende GitHub-Links ausgeben. Dokumente nur bei entsprechender Autorisierung committen/pushen; andernfalls nötigen aufgabenspezifischen Kontext eigenständig verständlich in den Body aufnehmen oder den konkreten Übergabeblocker melden.
7. Kriterienabdeckung, native Types, Parent/Child und erforderliche `blocked by`-Beziehungen zurücklesen und prüfen. Issue-URLs und Verifikationspläne in die Nachverfolgung eintragen. Issues nicht schließen.

## Rücksprungregeln

- Unklare Anforderung: zu Schritt 2 oder 3 und `requirements-clarification` zurückkehren.
- Offene Architekturentscheidung: betroffenen C4-/Sequence-Schritt mit `brainstorming` oder gezielter Recherche vorbereiten.
- Widerspruch zwischen Artefakten: den frühesten verursachenden Schritt korrigieren und dessen betroffene Folgeartefakte als `DRAFT` markieren. Danach nur betroffene Prüfungen und Freigaben erneuern.
- Neue oder wesentlich geänderte Anforderungen: ihren Scope mit dem Human klären. Freigegebene Grenzen nicht still erweitern.
- Wiederaufnahme nach teilweiser GitHub-Materialisierung: den tatsächlichen Graphen zurücklesen, bereits erstellte URLs übernehmen und passende Issues wiederverwenden. Externe Zustände nicht nur aus dem lokalen Fortschrittsdokument ableiten.

## Artefakte und Endergebnis

- Design-Fortschritt mit Scope, Status, Freigabekontext, Artefakten und nächstem Schritt.
- User Stories mit überprüfbaren Kriterien; C4 L1/L2; relevante Sequenzen; wesentliche ADR.
- Nachverfolgung von Kriterien zu Designreferenzen, geplanten Nachweisen und optionalen Issue-URLs.
- In Betriebsart GitHub ein verifizierter Issue-Baum mit ausführbaren Tasks oder ausdrücklich geplanten Spikes und benannten Blockern.

## Grenzen

- Keine Anwendung implementieren und `/implement`, `/acceptance` oder `/finish` nicht automatisch starten.
- Keine unbestätigte Produktentscheidung als freigegeben behandeln.
- Keine Technologie, zusätzliche Schicht oder Integration aus einem Vorlagenbeispiel ableiten.
- Die lokalen Anforderungsspezifikationen erweitern die Übergabe nach der Phasenplanung; sie verändern nicht die globalen Aliase oder die vollständigen Regeln der Heljens-Issue-Zerlegung.
- Dokumentation und GitHub-Issues deutsch verfassen; technische IDs und Dateinamen englisch halten. Autorisierte Commit-Nachrichten sind englisch.
- Zuständigkeiten gemäß den relevanten Heljens-Rollen delegieren, wenn die entsprechenden Agents verfügbar sind. Schreibende Übergaben sequenziell koordinieren.
