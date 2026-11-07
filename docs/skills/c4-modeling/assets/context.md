# C4 — Systemkontext: {{system-name}}

Scope und Stand: {{scope-and-existing-or-planned-state}}

```mermaid
flowchart LR
    person["{{role-name}}<br/>Person<br/>{{role-purpose}}"]
    system["{{system-name}}<br/>Eigenes Softwaresystem<br/>{{system-responsibility}}"]
    external["{{external-system-name}}<br/>Externes Softwaresystem<br/>{{external-purpose}}"]
    person -->|"{{user-interaction}}"| system
    system -->|"{{external-interaction}}"| external
    classDef person fill:#e8f1ff,stroke:#245b9e,color:#111827
    classDef system fill:#dff5e7,stroke:#267345,color:#111827
    classDef external fill:#f1f1f1,stroke:#555555,color:#111827
    class person person
    class system system
    class external external
```

Legende: Blau = Person; Grün = eigenes System; Grau = externes System. Pfeile zeigen eine gerichtete Beziehung mit ihrem Zweck.

| Element-ID | Name | Verantwortung | Anforderungen / Kontext |
|---|---|---|---|
| `system` | {{system-name}} | {{responsibility}} | {{source}} |

## Offene Punkte

{{open-questions-or-none}}

Beim Verwenden die Platzhalter ersetzen. Ein externes System oder eine Rolle nur übernehmen, wenn sie im aktuellen Scope tatsächlich vorhanden oder ausdrücklich geplant sind. Sonst die betreffenden Knoten und Beziehungen entfernen.
