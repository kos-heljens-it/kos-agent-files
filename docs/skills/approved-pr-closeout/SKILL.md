---
name: approved-pr-closeout
description: Schließt einen vom User ausdrücklich freigegebenen Pull Request nach geprüftem Merge mit Issue-Acceptance, AC-Pflege und sicherer Branch-Bereinigung ab.
metadata:
  version: "0.2.0"
  schema-version: "2"
  covers_phases: "integration, acceptance, closeout"
  kind: workflow
---

# Workflow: Approved PR Closeout

## Ziel

Einen nach menschlichem Review ausdrücklich zur Fertigstellung freigegebenen Pull Request vom geprüften Merge bis zum fachlichen Issue-Abschluss begleiten. Der Workflow verwendet die bestehenden Heljens-Verfahren für Merge, Checks und graphweite Acceptance, ergänzt deren Übergabe um das Markieren bestandener Acceptance Criteria und die sichere Bereinigung des Arbeitsbranches.

## Verwenden

- Wenn der User nach seinem Review ausdrücklich beauftragt, einen konkreten Pull Request fertigzustellen, zu mergen und den zugehörigen Issue-Scope abzuschließen.
- Wenn die Implementierung bereits im Pull Request vorliegt und keine weitere fachliche oder technische Änderung beauftragt ist.
- Nicht als Ersatz für Issue-Implementierung, lokale Verifikation, Code-Review oder graphweite Acceptance verwenden.
- Nicht allein aufgrund von „sieht gut aus“, einer Planfreigabe ausführen. Eine bereits erteilte, weiterhin passende ausdrückliche Freigabe gilt fort. Der Auftrag muss die Fertigstellung des konkreten Pull Requests eindeutig autorisieren.

## Eingaben

Pull-Request-URL oder eindeutige Repository-/PR-Angabe sowie das zugehörige Root-Issue übernehmen. Eindeutige Verknüpfungen aus PR und Issue dürfen verwendet werden. Bei mehreren passenden Issues, widersprüchlicher Zuordnung oder unklarem Acceptance-Root zuerst klären.

## Verwendete Heljens-Verfahren

- [Issue Reading](../github-issue-ops/SKILL.md) für Issue-Body, Kommentare und native Beziehungen.
- [PR Checks Observation](../github-pr-ops/SKILL.md) für erforderliche Checks des aktuellen PR-Heads.
- [GitHub PR Merge](../github-pr-ops/SKILL.md) für den autorisierten Merge und dessen Verifikation.
- [Default Branch Update](../git-branch-operations/SKILL.md) für den sicheren lokalen Wechsel auf die aktuelle Standardbasis.
- [Issue Acceptance Convergence](../issue-acceptance-convergence/SKILL.md) für die vollständige Kriterienprüfung des Root-Issues und seines nativen Child-Graphen.

Die Regeln der genannten Verfahren werden nicht kopiert oder abgeschwächt. Dieser Skill koordiniert ihre Reihenfolge und führt die ausdrücklich beauftragten Issue- und Branch-Abschlussschritte aus.

## Ablauf

### 1. Scope und aktuelle Freigabe prüfen

1. Repository-Regeln, Root- und gegebenenfalls bereichsspezifische PROJECT.md, Pull Request, Issue, Kommentare, Status, native Issue-Types und native Parent/Child-/blocked-by-Beziehungen lesen.
2. Sicherstellen, dass PR und Issue zusammengehören und der Root-Issue-Typ für die Acceptance-Prüfung zulässig ist. Den Root und alle rekursiv erreichbaren Children als Abschluss-Scope erfassen; Parent-Issues oberhalb des Roots und Geschwister bleiben Kontext.
3. Den tatsächlichen Base-Branch, Source-Branch, PR-Head-SHA und den aktuellen Repository-Standardbranch aus GitHub ermitteln. Branch-Namen wie master oder develop nicht voraussetzen.
4. Eine ausdrückliche, weiterhin gültige User-Autorisierung muss den Abschluss dieses konkreten PR-Scope abdecken; sie darf aus einem früheren Auftrag derselben Unterhaltung stammen. Eine bloße Planfreigabe, ein allgemeines Lob oder ein früheres Review ist keine Merge- oder Issue-Schließautorisierung.

### 2. Merge-Bedingungen prüfen und den Merge verifizieren

1. PR-Status, Draft-Status, Mergeability, Review-Entscheidung, aktuellen Head-SHA, konfigurierte Merge-Methode und erforderliche Checks lesen.
2. Prüfen, dass erforderliche Reviews und Checks zum aktuellen unveränderten PR-Head gehören. Bei neueren Commits nach der relevanten Review-Entscheidung, unklarem Head, Konflikten, fehlenden erforderlichen Checks, fehlenden erforderlichen Reviews oder fehlenden Rechten stoppen.
3. Ein Draft-PR darf nicht gemergt werden. Nur wenn der aktuelle Auftrag den Abschluss einschließlich Bereitstellung ausdrücklich umfasst, den PR über den unterstützten GitHub-Ablauf als reviewbereit markieren; danach Reviews, Regeln und Checks erneut für den aktuellen Head prüfen.
4. Bei einem offenen PR die erforderlichen Checks bis zu einem terminalen Ergebnis beobachten und anschließend ausschließlich über GitHub PR Merge mergen. Keine administrativen Umgehungen, keine erzwungene Merge-Methode und kein automatisches Merge aktivieren.
5. Bei bereits gemergtem PR den Merge-Status erneut lesen. Erfolg nur bei GitHub-Status MERGED mit Merge-Zeitpunkt und Merge-Commit annehmen.
6. Verifizieren, dass der Merge-Commit in den tatsächlichen Base-Branch integriert ist. Auch ein in PROJECT.md oder im Auftrag bestimmter Integrationsbranch wie `develop` ist zulässig. Acceptance gegen diesen tatsächlichen integrierten Zielstand prüfen; ein späteres Release nach `main` ist ein eigener Auftrag.
7. Wenn der lokale Working Tree sauber ist, nach der bestätigten Integration den tatsächlichen Base-Branch mit Git Branch Operations (Modus `update-target`) holen, auschecken und ausschließlich per Fast-Forward aktualisieren. Lokale Änderungen nicht verwerfen. Wenn der Working Tree dirty ist, ihn unverändert lassen; erforderliche Acceptance-Prüfungen am exakten Merge-Commit müssen dennoch belastbar möglich sein, andernfalls BLOCKED melden.

### 3. Acceptance am integrierten Stand prüfen

1. Mit Issue Acceptance Convergence im Modus `evaluate` das Root-Issue und seinen vollständigen nativen Child-Graph gegen den integrierten Merge-Commit prüfen.
2. Jedes AC unabhängig anhand konkreter Code-, Test-, Produkt- oder manueller Evidenz als PASS, GAP oder BLOCKED bewerten. Issue-, PR-, Commit- und CI-Status allein beweisen kein fachliches Kriterium.
3. Fehlende ACs, widersprüchliche Beziehungen, offene relevante Blocker und nicht belastbar prüfbare Kriterien konkret dokumentieren. Fehlende Kriterien sind kein PASS.
4. Bei GAP oder BLOCKED keine Scope-Erweiterung und keine automatische Remediation durchführen. PASS-Kriterien können einzeln markiert werden; nicht bestandene Kriterien bleiben offen und betroffene Issues werden nicht geschlossen. Die Ergebnisse auf Deutsch im Issue dokumentieren und zur Umsetzung oder Klärung zurückgeben.

### 4. Issue-ACs aktualisieren und Issues schließen

1. Vor einer Änderung den vollständigen Issue-Body erneut lesen. Die Checkbox jedes einzeln belegten PASS-Kriteriums aktualisieren, auch wenn andere Kriterien oder Children noch GAP/BLOCKED sind. Vorhandenen Text, Reihenfolge und nicht betroffene Markierungen erhalten.
2. GitHub-Issue-Inhalte und Abschlusskommentare auf Deutsch verfassen. Kriterien mit GAP oder BLOCKED unmarkiert lassen.
3. Ein Issue nur schließen, wenn alle eigenen ACs PASS sind, alle rekursiven Children darunter ebenfalls PASS sind und keine ungelöste native Relationship dem Abschluss widerspricht. Bei einem teilweise bestandenen Graphen dürfen vollständig bestandene Leaf-Issues geschlossen werden; unvollständige Parent-Issues bleiben offen.
4. Bereits geschlossene Issues mit offenen, nun belegten PASS-Checkboxen aktualisieren. Parent-Issues oberhalb des ausgewählten Roots, Geschwister und nicht erreichbare Issues nicht schließen.
5. Issue-Änderungen nach dem Schreiben erneut lesen und Checkboxen sowie Issue-Status verifizieren. Fehlgeschlagene oder unbekannte Schreiboperationen nicht als erfolgreich melden.

### 5. Arbeitsbranches sicher bereinigen

Branch-Bereinigung erfolgt erst nach verifiziertem Merge und vollständigem PASS des gesamten ausgewählten Acceptance-Graphen. Bei GAP oder BLOCKED bleiben die Branches verfügbar, damit sie für die Remediation herangezogen werden können.

1. Prüfen, ob GitHub den Source-Branch bereits automatisch gelöscht hat. Einen fehlenden Remote-Branch als bereits bereinigt melden.
2. Einen noch vorhandenen Remote-Branch nur dann löschen, wenn der PR-Merge verifiziert ist und der Branch keine nicht integrierten Commits enthält. Keine Branch-Namen raten und keine fremden Branches löschen.
3. Einen lokalen Branch nur bei sauberem Working Tree, nach erfolgreich ausgeführtem Zielbranch-Update und mit einer nicht erzwungenen Löschung entfernen.
4. Keine lokalen Änderungen verwerfen oder stashen. Bei dirty Working Tree, aktivem Worktree, nicht integrierten Commits, fehlendem Fast-Forward oder unklarer Branch-Zuordnung die betroffene lokale Bereinigung auslassen und den konkreten Grund melden.

### 6. Abschluss berichten

Kompakt berichten: Repository und PR, Base-Branch, geprüfter PR-Head, Merge-Commit, Ergebnis der erforderlichen Checks, Acceptance-Ergebnis pro Issue, aktualisierte oder offene ACs, geschlossene oder offene Issues sowie Status der Remote- und lokalen Branch-Bereinigung. Nicht ausgeführte Schritte und Blocker ausdrücklich nennen.

Bei Squash- oder Rebase-Merge sind ursprüngliche Branch-Commits möglicherweise nicht
per Ancestry als integriert erkennbar. Dann keine Löschung erzwingen; die Bereinigung
mit konkretem Grund auslassen, sofern die Integration nicht anderweitig eindeutig
nachweisbar ist. Vor jeder Remote-Löschung den Branch-Head erneut mit dem geprüften
PR-Head vergleichen; neue Commits verhindern die Löschung.

## Stop- und Rücksprungregeln

- Unklare PR-/Issue-Zuordnung oder Scope: vor jeder externen Mutation klären.
- Fehlende ausdrückliche Fertigstellungsautorisierung: nichts mergen, schließen oder löschen.
- PR-Head geändert, notwendige Reviews/Checks nicht erfolgreich, Konflikt oder Merge nicht bestätigt: bei Merge stoppen; Issues und Branches nicht als abgeschlossen behandeln.
- Acceptance mit GAP/BLOCKED: betroffene unvollständige Issues und ihre unvollständigen Parents offen lassen, nicht bestandene Kriterien unmarkiert lassen und Branches erhalten. Unabhängig vollständig bestandene Leaf-Issues dürfen gemäß Schritt 4 geschlossen werden.
- Dirty Working Tree oder aktive/verknüpfte Worktrees: keine lokale Branch-Löschung und keine Änderungen verwerfen.
- Unklare API-Schreibantwort: Zustand erneut lesen. Schreibfehler, Timeouts oder unklare Ergebnisse nicht als Erfolg darstellen.

## Grenzen

- Keine Codeänderungen, neuen Commits, Scope-Erweiterungen oder zusätzlichen Issues erstellen.
- Keine Checks, Reviews, Branch-Regeln oder Merge Queue umgehen.
- Keine Issues außerhalb des explizit ausgewählten Root-Child-Graphen schließen.
- Keine Acceptance aus dem Issue-, PR-, Commit- oder CI-Status allein ableiten.
- Keine lokale oder entfernte Branch-Löschung vor bestätigtem Merge und vollständiger Acceptance.
- Keine Benutzeränderungen verwerfen, stashen oder überschreiben.
- Issue-Änderungen und Kommentare deutsch verfassen; technische IDs und Branch-Namen unverändert übernehmen.
