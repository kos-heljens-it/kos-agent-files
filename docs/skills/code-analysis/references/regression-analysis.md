# Regressionsanalyse

**Verwenden:** Ein früher funktionierendes Verhalten ist reproduzierbar fehlerhaft.
**Eingaben:** guter/schlechter Stand, vergleichbare Umgebung und aussagekräftige Prüfung.
**Ergebnis:** eingegrenzte Änderung und Evidenz, wie sie das Verhalten beeinflusst.
**Stopp:** Ursache bestätigt oder fehlende Historie/Reproduktion konkret benannt.

1. Unterschiede in Code, Abhängigkeiten, Konfiguration und Daten erfassen.
2. Nicht nur zeitliche Nähe, sondern Zusammenhang mit dem Fehler prüfen.
3. Bei größerem Commit-Bereich und zuverlässiger Gut/Schlecht-Prüfung `git bisect`
   erwägen. In isoliertem Checkout arbeiten; den aktuellen Arbeitsstand erhalten.
4. Nicht prüfbare Revisionen unterscheiden, statt sie als fehlerhaft zu klassifizieren.
5. Den gefundenen Commit auf die ursächliche Änderung untersuchen und die Erklärung
   mit einem gezielten Nachweis absichern. Der Commit allein ist keine Ursachenanalyse.

Verfahren: [Git bisect](https://git-scm.com/docs/git-bisect).
