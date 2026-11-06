---
name: adr-authoring
description: Dokumentiert wesentliche Architekturentscheidungen mit Kontext, Alternativen, Folgen und echtem Freigabestatus als ADR aus vorhandenen Entscheidungsgrundlagen.
metadata:
  version: "0.2.0"
  schema-version: "2"
  usable_in_phases: "design, planning"
  kind: capability
---

# Skill: ADR Authoring

## Zweck

Eine bedeutende, umsetzungsrelevante Architekturentscheidung und ihre Begründung dauerhaft nachvollziehbar festhalten.

## Verwenden

- Bei einer tatsächlich getroffenen oder konkret vorgeschlagenen Architekturentscheidung mit relevanten Alternativen oder Folgen.
- Beim Überarbeiten eines Designs, wenn eine bestehende Entscheidung ersetzt werden soll.
- Eine offensichtliche Detailbeschreibung ohne bedeutsame Entscheidung benötigt keinen eigenen ADR.

## Eingaben

Fragestellung, konkreter heutiger Bedarf, Constraints, bekannte Optionen und Evidenz, Entscheidung samt tatsächlichem Freigabekontext, relevante Stories/Diagramme sowie bestehende ADR übernehmen.

## Vorgehen

1. Prüfen, ob ein passender ADR bereits existiert und die Entscheidung tatsächlich den vereinbarten Scope betrifft. Die Notwendigkeit aus aktuellen Anforderungen oder konkreten Constraints begründen.
2. Bei offenen wesentlichen Alternativen durch den Aufrufer `brainstorming` oder Recherche veranlassen. Eine Empfehlung mit Status `PROPOSED` festhalten, solange die erforderliche Human-Entscheidung fehlt.
3. Die bereits beschlossenen Optionen und deren Begründungen korrekt übernehmen. Alternativen nicht nachträglich als tatsächlich untersuchte Optionen erfinden; eine nur erwogene Option als solche kennzeichnen.
4. Bei Speicherung den nächsten freien vierstelligen ADR-Index oberhalb der vorhandenen Nummern bestimmen; einen konkreten englischen Slug für `docs/adr/NNNN-<decision>.md` verwenden. Vorhandene IDs erhalten und keine Datei mit anderem Inhalt überschreiben.
5. Mit [assets/adr.md](assets/adr.md) Kontext, Treiber, bekannte Optionen, Entscheidung, Begründung, Folgen und Referenzen schreiben. Nutzen, Kosten und relevante Nachteile konkret benennen.
6. Status nachvollziehbar setzen: `PROPOSED`, `ACCEPTED`, `SUPERSEDED` oder `REJECTED`. `ACCEPTED` benötigt die tatsächliche passende Freigabe; den Entscheidungsbezug und sein bekanntes Datum aufnehmen, keine Historie erfinden.
7. Eine ersetzte angenommene Entscheidung durch einen neuen ADR dokumentieren. Den alten Inhalt historisch erhalten, dessen Status und Nachfolgerreferenz aktualisieren und im neuen ADR auf den Vorgänger verweisen. Die Ersetzung selbst benötigt die passende Freigabe.
8. Entscheidung, Diagramme und Kriterienreferenzen auf Übereinstimmung prüfen. Änderungen an Annahmen oder Folgen als Anlass für gezielte erneute Klärung melden.

## Output

- ADR mit stabiler ID, Entscheidung, konkreter Begründung, Folgen und Status.
- Relevante Kriterien-/Architekturreferenzen sowie echter Freigabekontext oder offener Entscheidungsbedarf.
- Vorgänger-/Nachfolgerverbindung bei einer ersetzten Entscheidung.

## Grenzen und Qualitätskriterien

- Keine neue Produktanforderung, Architekturentscheidung oder Human-Freigabe erfinden.
- Keine Issues, Produktivimplementierung oder technischen Mikropläne erstellen.
- Ein ADR ist ein Entscheidungsnachweis und keine allgemeine Beschreibung des gesamten Systems.
- Unveröffentlichte lokale Referenzen entsprechend kennzeichnen; erreichbare externe Links nur mit tatsächlichem Bezug angeben.
- Deutsch formulieren. Technische IDs und englische Dateislugs erhalten. Eigenständig nur die beauftragten ADR-Artefakte ändern.
