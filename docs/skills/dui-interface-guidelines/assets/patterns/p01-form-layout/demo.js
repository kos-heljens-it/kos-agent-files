/* Lokale Demonstration: Daten werden nicht versendet oder dauerhaft gespeichert. */
const form = document.querySelector('#talk-form');
const statusMessage = document.querySelector('#form-status');
const editingState = document.querySelector('#editing-state');
const counterexample = new URLSearchParams(window.location.search).get('view') === 'counterexample';

if (counterexample) {
  document.body.classList.add('is-counterexample');
  document.title = 'P01 Gegenbeispiel · DUI Referenzen';
  document.querySelector('#reference-caption').textContent = 'Gegenbeispiel: absichtlich unruhige Ausrichtung, enge Rahmen und generische Aktionen. Keine Sollvorlage.';
  document.querySelector('[data-view="reference"]').removeAttribute('aria-current');
  document.querySelector('[data-view="counterexample"]').setAttribute('aria-current', 'page');
  document.querySelector('#submit-button').textContent = 'OK';
  document.querySelector('#reset-button').textContent = 'Abbrechen';
}

form.addEventListener('input', () => {
  editingState.textContent = 'In Bearbeitung';
  statusMessage.textContent = '';
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  editingState.textContent = 'Übernommen';
  statusMessage.textContent = 'Vortragsangaben für diese Vorschau übernommen. Beim Neuladen werden die Beispieldaten wiederhergestellt.';
});

form.addEventListener('reset', () => {
  editingState.textContent = 'In Bearbeitung';
  statusMessage.textContent = 'Änderungen zurückgesetzt. Die ursprünglichen Beispieldaten sind wieder eingetragen.';
});
