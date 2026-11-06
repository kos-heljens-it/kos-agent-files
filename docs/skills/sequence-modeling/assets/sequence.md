# Ablauf: {{scenario-title}}

- Story / Kriterien: {{story-and-criterion-ids}}
- Architekturstand / Teilnehmer: {{architecture-reference}}
- Vorbedingungen: {{preconditions}}
- Auslöser: {{trigger}}

```mermaid
sequenceDiagram
    autonumber
    actor person as {{role-name}}
    participant application as {{application-name}}
    participant collaborator as {{collaborator-name}}
    person->>application: {{trigger-message}}
    application->>application: {{known-precondition-check}}
    alt {{relevant-negative-condition}}
        application-->>person: {{observable-negative-result}}
    else {{valid-condition}}
        application->>collaborator: {{known-operation}}
        collaborator-->>application: {{known-result}}
        application-->>person: {{observable-success-result}}
    end
```

## Ergebnisse und geplante Verifikation

| Kriterium / Pfad | Beobachtbares Ergebnis | Geplante Verifikation |
|---|---|---|
| {{criterion-id}} | {{expected-result}} | {{verification-plan}} |

## Offene Entscheidungen

{{open-decisions-or-none}}

Beim Verwenden die Platzhalter ersetzen. Teilnehmer und Alternativen nur aus dem tatsächlichen Szenario übernehmen. Bei relevanten Teilfehlern die bestätigte Fehlersemantik ergänzen; die Notationsvorlage legt kein konkretes Protokoll fest.
