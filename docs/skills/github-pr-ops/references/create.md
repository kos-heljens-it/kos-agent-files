# Pull Request erstellen oder wiederverwenden

## Vorgehen

1. Repository, Remote, aktuellen Branch, gepushten Head-SHA und gewünschte Base
   aus Auftrag, PROJECT.md und eindeutigem Workflow-Kontext bestimmen. Ein Tracking-
   Branch allein beweist keine PR-Base. Bei Mehrdeutigkeit vor Erstellung klären.
2. Bereits implementierten Scope, Diff, Commits, AC, Teststatus und Risiken lesen.
   Kein neues Feature implementieren; fehlenden Commit/Push an dessen Auftrag zurückgeben.
3. Offene PRs suchen. Nur bei identischem Zielrepository, Head-Owner/Branch und
   gewünschter Base wiederverwenden. Gleichnamige Branches anderer Forks oder PRs
   zu einer anderen Base sind kein Treffer. Bei mehreren exakten Treffern stoppen.
4. Bei passendem PR die URL zurückgeben. Titel/Body nicht ungefragt ändern; Kommentare
   nur im beauftragten Handoff und einen Draft nur bei ausdrücklichem Ready-Auftrag ändern.
5. Andernfalls einen kurzen deutschen Titel und Body mit Problem, Änderung,
   Verifikation und relevanten Risiken erstellen. Default ist Draft; Ready nur bei
   entsprechender ausdrücklicher Anweisung des Users oder aufrufenden Workflows.
6. PR-Identität, tatsächliche Base/Head und gespeicherten Body zurücklesen.
   Erfolg erst nach bestätigtem Inhalt und tatsächlicher Erstellung ausgeben.

## Issue-Verknüpfungen

- `Closes #<nummer>` nur für vollständig durch diesen PR erfüllte Scope-Issues;
  mehrere solcher Issues dürfen jeweils einzeln verknüpft werden.
- Kontextuelle, externe oder noch unvollständige Issues mit `Refs #<nummer>` verlinken.
  Den gelesenen Rohgraphen nicht automatisch als Closure-Liste übernehmen.
- GitHub-Closing-Keywords wirken abhängig vom Default-Branch. Bei einem PR nach
  `develop` keinen bereits erfolgten Issue-Abschluss behaupten. Release oder
  ausdrücklich autorisierter fachlicher Closeout entscheidet den späteren Abschluss.

## Sicherer Texttransport

Mehrzeilige Bodies/Kommentare als strukturiertes Connector-Argument oder UTF-8-Datei
ohne BOM über `--body-file <pfad>` übergeben. Keine interpolierten Shell-Bodies.
Backticks, Backslashes, Umlaute und absichtliche literale Escapes erhalten.
Gespeicherten Body beziehungsweise den neu erstellten Kommentar exakt zurücklesen
und ordinal mit dem Solltext vergleichen: ausschließlich CRLF zu LF normalisieren,
nicht trimmen und keine Escape-/Unicode-Normalisierung vornehmen.
Bei Abweichung konkrete Encoding-, Escape- oder Steuerzeichenbefunde melden.
Eigene temporäre Dateien nur im verifizierten engen Temp-Verzeichnis bereinigen.

## CLI-Fallback

```powershell
gh pr list --repo <owner/repo> --head <head-owner:branch> --base <base> --state open
gh pr create --repo <owner/repo> --draft --title <title> --body-file <body-path> --base <base> --head <head-owner:branch>
gh pr view <pr-number> --repo <owner/repo> --json title,body,state,isDraft,url,baseRefName,headRefName,headRefOid
```

Die genaue Head-Identität zusätzlich mit verfügbaren API-Feldern prüfen. Platzhalter
konkret auflösen. Kein Merge, keine lokalen Git-Mutationen und keine unbeauftragten
Reviewer, Assignees oder Labels. Ergebnis: URL, Base, Head-SHA, Draft-/Ready-Status,
verifizierter Text und offene Prüfungen.
