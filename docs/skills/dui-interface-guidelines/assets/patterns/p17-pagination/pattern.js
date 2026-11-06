
const items = document.querySelector('#items'), range = document.querySelector('#range'), pageStatus = document.querySelector('#page-status'), number = document.querySelector('#page-number'), error = document.querySelector('#jump-error'), previous = document.querySelector('#previous'), next = document.querySelector('#next');
const total = 42, pageSize = 6, pageCount = Math.ceil(total / pageSize); let current = 1;
function render() {
  const first = (current - 1) * pageSize + 1, last = Math.min(current * pageSize,total);
  items.replaceChildren();
  for (let i = first; i <= last; i++) { const item = document.createElement('li'), name = document.createElement('strong'), detail = document.createElement('span'); name.textContent = `Dokument ${String(i).padStart(2,'0')}`; detail.textContent = `Beispielinhalt · Eintrag ${i}`; item.append(name, detail); items.append(item); }
  range.textContent = `Einträge ${first}–${last} von ${total}`; pageStatus.textContent = `Seite ${current} von ${pageCount}`;
  previous.disabled = current === 1; next.disabled = current === pageCount;
}
function navigate(target) { current = target; error.hidden = true; number.removeAttribute('aria-invalid'); render(); document.querySelector('#list-heading').focus(); }
previous.addEventListener('click', () => { if (current > 1) navigate(current-1); });
next.addEventListener('click', () => { if (current < pageCount) navigate(current+1); });
document.querySelector('#jump-form').addEventListener('submit', event => {
  event.preventDefault(); const value = Number(number.value);
  if (number.value === '' || !number.checkValidity() || !Number.isInteger(value)) { error.hidden = false; number.setAttribute('aria-invalid','true'); number.focus(); return; }
  navigate(value);
});
render();
