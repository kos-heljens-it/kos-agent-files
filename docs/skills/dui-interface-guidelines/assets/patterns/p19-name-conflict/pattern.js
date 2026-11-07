
const form = document.querySelector('#document-form'), nameField = document.querySelector('#name'), note = document.querySelector('#note'), error = document.querySelector('#name-error'), status = document.querySelector('#status');
const existing = new Set(['projektplan', 'budget 2026']);
function showError(message) { error.textContent = message; error.hidden = false; nameField.setAttribute('aria-invalid','true'); status.textContent = ''; nameField.focus(); }
form.addEventListener('submit', event => {
  event.preventDefault();
  const name = nameField.value.trim();
  if (!name) { showError('Bitte geben Sie einen Dokumentnamen ein.'); return; }
  if (existing.has(name.toLocaleLowerCase('de'))) { showError(`„${name}“ ist bereits vergeben. Ändern Sie den Namen und versuchen Sie es erneut.`); return; }
  error.hidden = true; nameField.removeAttribute('aria-invalid');
  status.textContent = `„${name}“ ist zur Vorbereitung bereit. Es wurde kein Dokument gespeichert.`;
});
nameField.addEventListener('input', () => { if (!error.hidden) { error.hidden = true; nameField.removeAttribute('aria-invalid'); } status.textContent = ''; });
