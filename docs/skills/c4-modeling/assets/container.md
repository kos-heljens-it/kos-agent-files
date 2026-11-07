# C4 — Container: {{system-name}}

Scope und Stand: {{scope-and-existing-or-planned-state}}

```mermaid
flowchart LR
    person["{{role-name}}<br/>Person"]
    subgraph system_boundary["{{system-name}} · Systemgrenze"]
        application["{{application-name}}<br/>Anwendung · {{technology}}<br/>{{application-responsibility}}"]
        store[("{{store-name}}<br/>Datenspeicher · {{store-technology}}<br/>{{store-responsibility}}")]
    end
    person -->|"{{interaction-and-known-protocol}}"| application
    application -->|"{{data-operation-and-known-protocol}}"| store
    classDef person fill:#e8f1ff,stroke:#245b9e,color:#111827
    classDef container fill:#dff5e7,stroke:#267345,color:#111827
    class person person
    class application,store container
```

Legende: Blau = Person; Grün = Anwendung oder Datenspeicher innerhalb der Systemgrenze. Pfeile zeigen Zweck und bekannten Kommunikationsmechanismus.

| Element-ID | Verantwortung | Technologie / Entscheidungsstand | Anforderungen / ADR |
|---|---|---|---|
| `application` | {{responsibility}} | {{known-technology-or-open}} | {{references}} |

## Offene Punkte

{{open-questions-or-none}}

Beim Verwenden die Platzhalter ersetzen. Die Vorlage fordert keinen Datenspeicher: nur durch aktuellen Kontext belegte Container übernehmen. Der Systemname muss mit L1 übereinstimmen.
