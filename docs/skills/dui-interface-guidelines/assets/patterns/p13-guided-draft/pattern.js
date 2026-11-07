
const title = document.querySelector('#title'), details = document.querySelector('#details');
const free = document.querySelector('#free'), guide = document.querySelector('#guide'), back = document.querySelector('#back'), next = document.querySelector('#next'), review = document.querySelector('#review');
const nameSection = document.querySelector('#name-section'), detailsSection = document.querySelector('#details-section');
const restore = document.querySelector('#restore');
const stepInfo = document.querySelector('#step-info'), modeNote = document.querySelector('#mode-note'), status = document.querySelector('#status'), error = document.querySelector('#title-error');
let guided = false, step = 0, draft = null;
function render() {
  free.setAttribute('aria-pressed', String(!guided)); guide.setAttribute('aria-pressed', String(guided));
  nameSection.hidden = guided && step !== 0; detailsSection.hidden = guided && step !== 1;
  stepInfo.hidden = !guided; stepInfo.textContent = `Schritt ${step + 1} von 2: ${step === 0 ? 'Thema' : 'Beschreibung'}`;
  modeNote.textContent = guided ? 'Schrittweise Bearbeitung: Sie können jederzeit zur freien Bearbeitung wechseln.' : 'Freie Bearbeitung: Beide Felder sind sichtbar.';
  back.hidden = !guided || step === 0; next.hidden = !guided || step === 1; review.hidden = guided && step === 0;
}
free.addEventListener('click', () => { guided = false; render(); status.textContent = 'Freie Bearbeitung geöffnet. Ihre Eingaben bleiben erhalten.'; });
guide.addEventListener('click', () => { guided = true; step = 0; render(); status.textContent = 'Schrittweise Bearbeitung geöffnet. Ihre Eingaben bleiben erhalten.'; });
back.addEventListener('click', () => { step = 0; render(); document.querySelector('#name-heading').focus(); });
next.addEventListener('click', () => { step = 1; render(); document.querySelector('#details-heading').focus(); });
document.querySelector('#draft').addEventListener('click', () => { draft = {title: title.value, details: details.value}; restore.disabled = false; status.textContent = 'Zwischenstand für diese Vorschau gemerkt, auch wenn er unvollständig ist.'; });
restore.addEventListener('click', () => { if (!draft) return; title.value = draft.title; details.value = draft.details; error.hidden = true; title.removeAttribute('aria-invalid'); status.textContent = 'Gemerkter Zwischenstand wiederhergestellt.'; });
document.querySelector('#form').addEventListener('submit', event => {
  event.preventDefault();
  if (!title.value.trim()) { guided = false; render(); error.hidden = false; title.setAttribute('aria-invalid','true'); title.focus(); status.textContent = ''; return; }
  error.hidden = true; title.removeAttribute('aria-invalid'); status.textContent = `Anfrage „${title.value.trim()}“ ist bereit zur Prüfung. Es wurde nichts versendet.`;
});
title.addEventListener('input', () => { if (title.value.trim()) { error.hidden = true; title.removeAttribute('aria-invalid'); } });
render();
