/* Ein reproduzierbarer lokaler Ablauf; keine Netzwerkverbindung und keine Persistenz. */
const form = document.querySelector('#contact-form');
const fields = [document.querySelector('#name'), document.querySelector('#email')];
const feedback = document.querySelector('#feedback');
const save = document.querySelector('#save');
let attempts = 0;

function clearFieldError(field) {
  field.removeAttribute('aria-invalid');
  const error = document.querySelector(`#${field.id}-error`);
  error.hidden = true;
  error.textContent = '';
  if (field.id === 'email') field.setAttribute('aria-describedby', 'email-hint');
  else field.removeAttribute('aria-describedby');
}

function showFieldError(field, message) {
  const error = document.querySelector(`#${field.id}-error`);
  error.textContent = message;
  error.hidden = false;
  field.setAttribute('aria-invalid', 'true');
  field.setAttribute('aria-describedby', field.id === 'email' ? 'email-hint email-error' : 'name-error');
}

fields.forEach((field) => {
  clearFieldError(field);
  field.addEventListener('input', () => {
    clearFieldError(field);
    feedback.textContent = '';
    feedback.removeAttribute('data-kind');
  });
});

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  feedback.textContent = '';
  feedback.removeAttribute('data-kind');
  fields.forEach(clearFieldError);
  const invalid = fields.filter((field) => !field.checkValidity() || !field.value.trim());
  for (const field of invalid) {
    const message = field.id === 'name' ? 'Bitte geben Sie einen Namen ein.' : 'Bitte geben Sie eine vollständige E-Mail-Adresse ein, zum Beispiel name@example.org.';
    showFieldError(field, message);
  }
  if (invalid.length) { invalid[0].focus(); return; }

  attempts += 1;
  save.disabled = true;
  fields.forEach((field) => { field.readOnly = true; });
  feedback.textContent = 'Kontakt wird gespeichert …';
  await new Promise((resolve) => setTimeout(resolve, 300));
  fields.forEach((field) => { field.readOnly = false; });
  save.disabled = false;
  if (attempts === 1) {
    feedback.dataset.kind = 'error';
    feedback.textContent = 'Der Kontakt konnte nicht gespeichert werden. Ihre Eingaben sind erhalten. Versuchen Sie es erneut.';
  } else {
    feedback.dataset.kind = 'success';
    feedback.textContent = 'Kontakt in der Vorschau übernommen. Es wurden keine Daten gespeichert.';
  }
});
