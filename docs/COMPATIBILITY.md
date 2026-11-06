# Migration und Kompatibilität

<!-- Automatisch gepflegt: python scripts/skill_registry.py --write -->

Die bisherigen URLs bleiben kurze Quellenverweise. Vor der Ausführung den kanonischen Skill
mit dem ausgewiesenen Modus laden. `default` übernimmt dessen dokumentierten Standard.

[Skill-Katalog](skills/SKILLS.md) · [Registry-Vertrag](REGISTRY.md)

| Bisheriger Pfad | Nachfolger | Modus |
|---|---|---|
| [skills/brainstorming.md](skills/brainstorming.md) | [brainstorming](skills/brainstorming/SKILL.md) | `default` |
| [skills/code-analysis.md](skills/code-analysis.md) | [code-analysis](skills/code-analysis/SKILL.md) | `analyze` |
| [skills/code-implementation-planning.md](skills/code-implementation-planning.md) | [code-implementation-planning](skills/code-implementation-planning/SKILL.md) | `default` |
| [skills/code-implementation.md](skills/code-implementation.md) | [code-implementation](skills/code-implementation/SKILL.md) | `default` |
| [skills/code-minimization.md](skills/code-minimization.md) | [code-minimization](skills/code-minimization/SKILL.md) | `default` |
| [skills/code-reading.md](skills/code-reading.md) | [code-analysis](skills/code-analysis/SKILL.md) | `read` |
| [skills/code-testing.md](skills/code-testing.md) | [code-testing](skills/code-testing/SKILL.md) | `default` |
| [skills/code_diff-review.md](skills/code_diff-review.md) | [code-diff-review](skills/code-diff-review/SKILL.md) | `default` |
| [skills/code_refactoring.md](skills/code_refactoring.md) | [code-refactoring](skills/code-refactoring/SKILL.md) | `local` |
| [skills/design-prototyping.md](skills/design-prototyping.md) | [design-prototyping](skills/design-prototyping/SKILL.md) | `default` |
| [skills/design-review.md](skills/design-review.md) | [design-review](skills/design-review/SKILL.md) | `default` |
| [skills/documentation.md](skills/documentation.md) | [documentation](skills/documentation/SKILL.md) | `default` |
| [skills/github_branch-checkout-from-default.md](skills/github_branch-checkout-from-default.md) | [git-branch-operations](skills/git-branch-operations/SKILL.md) | `create` |
| [skills/github_commit-history-reading.md](skills/github_commit-history-reading.md) | [commit-history-summary](skills/commit-history-summary/SKILL.md) | `read` |
| [skills/github_commit.md](skills/github_commit.md) | [git-commit-push](skills/git-commit-push/SKILL.md) | `commit` |
| [skills/github_default-branch-update.md](skills/github_default-branch-update.md) | [git-branch-operations](skills/git-branch-operations/SKILL.md) | `update-default` |
| [skills/github_integration-branch-update.md](skills/github_integration-branch-update.md) | [git-branch-operations](skills/git-branch-operations/SKILL.md) | `update-integration` |
| [skills/github_issue-creation.md](skills/github_issue-creation.md) | [github-issue-ops](skills/github-issue-ops/SKILL.md) | `create` |
| [skills/github_issue-reading.md](skills/github_issue-reading.md) | [github-issue-ops](skills/github-issue-ops/SKILL.md) | `read` |
| [skills/github_pr-checks-observation.md](skills/github_pr-checks-observation.md) | [github-pr-ops](skills/github-pr-ops/SKILL.md) | `checks` |
| [skills/github_pr-creation.md](skills/github_pr-creation.md) | [github-pr-ops](skills/github-pr-ops/SKILL.md) | `create` |
| [skills/github_pr-merge.md](skills/github_pr-merge.md) | [github-pr-ops](skills/github-pr-ops/SKILL.md) | `merge` |
| [skills/github_push.md](skills/github_push.md) | [git-commit-push](skills/git-commit-push/SKILL.md) | `push` |
| [skills/github_relationship-setting.md](skills/github_relationship-setting.md) | [github-issue-ops](skills/github-issue-ops/SKILL.md) | `relationship` |
| [skills/github_repository-baseline-configuration.md](skills/github_repository-baseline-configuration.md) | [repository-baseline-configuration](skills/repository-baseline-configuration/SKILL.md) | `default` |
| [skills/github_type-setting.md](skills/github_type-setting.md) | [github-issue-ops](skills/github-issue-ops/SKILL.md) | `type` |
| [skills/requirements-clarification.md](skills/requirements-clarification.md) | [requirements-clarification](skills/requirements-clarification/SKILL.md) | `default` |
| [skills/research.md](skills/research.md) | [research](skills/research/SKILL.md) | `default` |
| [workflows/bugfix-from-default.md](workflows/bugfix-from-default.md) | [bugfix](skills/bugfix/SKILL.md) | `from-default` |
| [workflows/bugfix.md](workflows/bugfix.md) | [bugfix](skills/bugfix/SKILL.md) | `default` |
| [workflows/commit-history-summary.md](workflows/commit-history-summary.md) | [commit-history-summary](skills/commit-history-summary/SKILL.md) | `default` |
| [workflows/commit-push.md](workflows/commit-push.md) | [git-commit-push](skills/git-commit-push/SKILL.md) | `commit-push` |
| [workflows/design-exploration.md](workflows/design-exploration.md) | [design-exploration](skills/design-exploration/SKILL.md) | `default` |
| [workflows/feature-finish.md](workflows/feature-finish.md) | [feature-finish](skills/feature-finish/SKILL.md) | `default` |
| [workflows/insight-to-issue.md](workflows/insight-to-issue.md) | [insight-to-issue](skills/insight-to-issue/SKILL.md) | `default` |
| [workflows/instruction-improvement-issue.md](workflows/instruction-improvement-issue.md) | [insight-to-issue](skills/insight-to-issue/SKILL.md) | `instruction` |
| [workflows/issue-acceptance-convergence.md](workflows/issue-acceptance-convergence.md) | [issue-acceptance-convergence](skills/issue-acceptance-convergence/SKILL.md) | `default` |
| [workflows/issue-graph-implementation.md](workflows/issue-graph-implementation.md) | [issue-graph-implementation](skills/issue-graph-implementation/SKILL.md) | `default` |
| [workflows/issue-implementation.md](workflows/issue-implementation.md) | [issue-implementation](skills/issue-implementation/SKILL.md) | `default` |
| [workflows/issue-sanitize.md](workflows/issue-sanitize.md) | [issue-sanitize](skills/issue-sanitize/SKILL.md) | `default` |
| [workflows/issue-to-pr.md](workflows/issue-to-pr.md) | [issue-to-pr](skills/issue-to-pr/SKILL.md) | `default` |
| [workflows/issue-to-sub-issues-flat.md](workflows/issue-to-sub-issues-flat.md) | [issue-to-sub-issues](skills/issue-to-sub-issues/SKILL.md) | `flat` |
| [workflows/issue-to-sub-issues.md](workflows/issue-to-sub-issues.md) | [issue-to-sub-issues](skills/issue-to-sub-issues/SKILL.md) | `default` |
| [workflows/online-publication-check.md](workflows/online-publication-check.md) | [online-publication-check](skills/online-publication-check/SKILL.md) | `default` |
| [workflows/project-implementation-planning.md](workflows/project-implementation-planning.md) | [project-implementation-planning](skills/project-implementation-planning/SKILL.md) | `default` |
| [workflows/refactoring-secure.md](workflows/refactoring-secure.md) | [code-refactoring](skills/code-refactoring/SKILL.md) | `secure` |
| [workflows/release.md](workflows/release.md) | [release](skills/release/SKILL.md) | `default` |
