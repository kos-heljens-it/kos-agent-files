# Agent Files: Repository-Einstieg

In diesem Checkout gelten die versionierten Regeln aus [docs/AGENTS.md](docs/AGENTS.md)
und die lokale [PROJECT.md](PROJECT.md). Lokale Änderungen gegen diese Quellen prüfen;
eine noch unveröffentlichte Migration nicht anhand einer alten Pages-Fassung überschreiben.

Für Projekte ohne Bibliotheks-Checkout ist der veröffentlichte Einstieg
[AGENTS.md](https://kos-heljens-it.github.io/kos-agent-files/AGENTS.md).
Die Basis steht in `library.json`. Bei erforderlichem Online-Abruf zuerst verfügbare
Fetch-/Browser-Tools, bei deren Fehler einen HTTP-Shell-Fallback verwenden. Scheitern
alle Wege, den betroffenen Schritt mit konkretem Grund stoppen. Vollständig gelesenen,
hinreichend aktuellen Kontext wiederverwenden.
