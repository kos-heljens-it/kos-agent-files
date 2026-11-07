/* Lokale Vorschau ohne dauerhafte Speicherung. */
const form = document.querySelector('#settings-form');
const fields = [...form.querySelectorAll('input[type="checkbox"]')];
const save = document.querySelector('#save');
const hint = document.querySelector('#save-hint');
const status = document.querySelector('#status');
let baseline = fields.map((field) => field.checked);
function updateSave() {
  const changed = fields.some((field, index) => field.checked !== baseline[index]);
  save.disabled = !changed;
  hint.textContent = changed ? 'Sie können die geänderte Auswahl übernehmen.' : 'Ändern Sie eine Auswahl, um sie zu übernehmen.';
}
fields.forEach((field) => field.addEventListener('change', () => { status.textContent = ''; updateSave(); }));
form.addEventListener('submit', (event) => {
  event.preventDefault();
  baseline = fields.map((field) => field.checked);
  updateSave();
  status.textContent = 'Auswahl für diese Vorschau übernommen.';
});
document.querySelectorAll('.favorite').forEach((button) => {
  button.addEventListener('click', () => {
    const active = button.getAttribute('aria-pressed') !== 'true';
    const name = button.dataset.channel;
    button.setAttribute('aria-pressed', String(active));
    button.setAttribute('aria-label', active ? `${name} aus Favoriten entfernen` : `${name} zu Favoriten hinzufügen`);
    button.querySelector('span').textContent = active ? '★' : '☆';
    status.textContent = active ? `${name} zu Favoriten hinzugefügt.` : `${name} aus Favoriten entfernt.`;
  });
});
