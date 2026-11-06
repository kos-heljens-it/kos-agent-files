# Änderungsüberblick: {{scope}}

Vergleich: {{repository-and-base}} → {{head-or-local-state}}. {{relevant-scope-boundary}}

{{concrete-result-in-a-short-paragraph}}

## Funktionale Änderungen

### {{change-group}}

- **Vorher:** {{previous-behavior-or-previously-unavailable-function}}
- **Jetzt:** {{new-behavior-and-visible-result}}
- **Warum:** {{documented-reason-or-clearly-marked-technical-inference}}

## Dateiüberblick nach Schichten

### {{layer-or-project-name}}

- {{linked-new-file}} — **new**: {{one-or-two-sentences-on-specific-purpose-and-role}}
- {{linked-modified-file}} — **modified**: {{one-or-two-sentences-on-actual-change-and-effect}}
- {{linked-deleted-file}} — **deleted**: {{removed-responsibility-or-new-location-and-relevant-effect}}

## Verträge und Modelle

### {{interface-name}}: {{contract-purpose}}

{{actual-caller-and-implementation-if-needed}}

| Methode | Wesentliche Eingabe und Zweck | Ergebnis / relevante Fehler oder Wirkung |
|---|---|---|
| {{method-name-with-key-parameters}} | {{business-input-and-operation}} | {{return-meaning-or-observable-effect}}

### {{non-obvious-type-name}}

{{purpose-key-information-and-role-in-the-changed-flow}}

{{relationship-to-a-similarly-named-type-only-if-needed}}

## Strukturänderungen / Restructure

| Bisher | Jetzt | Grund und Einordnung |
|---|---|---|
| {{old-file-or-type}} | {{new-file-or-type-or-extracted-file-group}} | {{specific-reading-or-responsibility-benefit-and-whether-behavior-changed}}

{{underlying-rename-and-its-mechanical-effects-if-relevant}}

## Geänderter Ablauf: {{scenario}}

**Vorher:** {{trigger-and-old-chain-or-previously-missing-operation}}

**Jetzt:** {{trigger-and-new-chain-with-the-new-or-changed-step}}

**Beispiel mit fiktiven Daten:** {{small-input}} → {{action-and-relevant-processing}} → {{observable-result-consistent-with-code}}.

{{important-new-negative-path-only-if-relevant}}

## Verifikation und Lesereihenfolge

{{available-check-results-with-known-commit-or-local-state-and-concrete-gaps}}

{{concrete-consumer-data-or-operation-impact-only-if-present}}

{{short-ordered-reading-route-with-links-and-what-to-look-for}}

Beim Verwenden Platzhalter ersetzen und nicht benötigte Abschnitte entfernen. Änderungsgruppen nach dem konkreten Anwendungsfall wiederholen; Verträge, Modelle und Abläufe dort einordnen, wo sie am besten verständlich werden. Im Dateiüberblick die vorhandenen Schichten oder Projekte als äußere Gliederung verwenden und je Bereich neue, geänderte und entfernte Dateien in dieser Reihenfolge aufführen. Jeden Dateieintrag einzeln wiederholen, generierte Dateien zusätzlich als `generated` kennzeichnen und leere Bereiche weglassen. Jede neue oder geänderte Datei bekommt ein bis zwei Sätze zu ihrem konkreten Zweck beziehungsweise ihrer Änderung; keine Sammelzeilen mit mehreren Dateien verwenden. Eine Datei nicht mehrfach mit derselben Erklärung aufführen. Für Interaktionen mit mehreren Beteiligten oder wichtigen Zweigen eine kleine Mermaid-Sequenz verwenden und sie mit dem modellierten Prozess oder der Schnittstelle benennen; kurze Ketten als Pfeilfolge belassen.
