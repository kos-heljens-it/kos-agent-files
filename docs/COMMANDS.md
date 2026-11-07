# Skill-Aufrufe

Skills durch eine passende natürliche Anfrage oder in Codex als `$skill-name`
auswählen. GitHub Pages liefert Quellen; es installiert keine nativen Commands
oder Skills. Native Erkennung benötigt ein vom Host unterstütztes Skill-Verzeichnis.

Bisherige Aliase sind Textkonventionen, sofern der Host sie unverändert weitergibt.
Sie überschreiben keine eingebauten Host-Kommandos wie `/help` oder `/skills`.
Fängt der Host einen Alias ab, den kanonischen Skill ausdrücklich nennen.

| Bisheriger Aufruf | Kanonische Auswahl |
|---|---|
| `/cp`, `/commit`, `/push` | [git-commit-push](skills/git-commit-push/SKILL.md), Modus `commit-push`, `commit` bzw. `push`. |
| `/bugfix`, `/bugfix from-default` | [bugfix](skills/bugfix/SKILL.md), Modus `current` bzw. `from-default`. |
| `/refactor` | [code-refactoring](skills/code-refactoring/SKILL.md), Modus `local`. |
| `/minimize` | [code-minimization](skills/code-minimization/SKILL.md). |
| `/testing [mode]` | [code-testing](skills/code-testing/SKILL.md), dokumentierter Prüfmodus. |
| `/implement <issue>` | [issue-graph-implementation](skills/issue-graph-implementation/SKILL.md). |
| `/acceptance <issue>` | [issue-acceptance-convergence](skills/issue-acceptance-convergence/SKILL.md), Standard `evaluate`. |
| `/sanitize <issue>` | [issue-sanitize](skills/issue-sanitize/SKILL.md). |
| `/sub-issues <issue> [flat]` | [issue-to-sub-issues](skills/issue-to-sub-issues/SKILL.md), rekursiv oder eine Ebene. |
| `/finish` | [feature-finish](skills/feature-finish/SKILL.md). |
| `/release` | [release](skills/release/SKILL.md). |
| `/summary <Zeitraum> --mode <mode>` | [commit-history-summary](skills/commit-history-summary/SKILL.md). |
| `/design-explore`, `/design-prototype`, `/design-review` | [design-exploration](skills/design-exploration/SKILL.md), [design-prototyping](skills/design-prototyping/SKILL.md) bzw. [design-review](skills/design-review/SKILL.md). |

Issue-Nummern sind positive Ganzzahlen mit optionalem `#`. Ein Alias erweitert
keine Berechtigung. Eine Frage nach einem Verfahren oder `show`/`list` führt es
nicht aus. Alte `/workflows run <id>`-Aufrufe bezeichnen denselben kanonischen Skill;
die [Kompatibilitätstabelle](COMPATIBILITY.md) enthält präzise frühere Modi.
Unbekannte oder mehrdeutige Modi vor abhängigen Mutationen klären. Für weitere
Einträge den [Skill-Katalog](skills/SKILLS.md) verwenden.
