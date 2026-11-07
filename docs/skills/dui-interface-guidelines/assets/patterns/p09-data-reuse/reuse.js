/* Lokale Beispieldaten; keine Übertragung oder dauerhafte Speicherung. */
const details = document.querySelector('#invoice-details');
const useInvoice = document.querySelector('#use-invoice');
const form = document.querySelector('#order-form');
const start = document.querySelector('#start');
const end = document.querySelector('#end');
const startError = document.querySelector('#start-error');
const endError = document.querySelector('#end-error');
const copyStatus = document.querySelector('#copy-status');
const status = document.querySelector('#status');
const addressFields = ['name', 'street', 'postcode', 'city', 'country'];
let invoiceInitialized = false;

function copyAddress() {
  addressFields.forEach((field) => {
    document.querySelector(`#invoice-${field}`).value = document.querySelector(`#delivery-${field}`).value;
  });
}
useInvoice.addEventListener('change', () => {
  details.hidden = !useInvoice.checked;
  details.open = useInvoice.checked;
  for (const field of addressFields.filter((name) => name !== 'country')) {
    document.querySelector(`#invoice-${field}`).required = useInvoice.checked;
  }
  if (useInvoice.checked && !invoiceInitialized) { copyAddress(); invoiceInitialized = true; }
});
document.querySelector('#copy-address').addEventListener('click', () => {
  copyAddress();
  copyStatus.textContent = 'Lieferadresse in die Rechnungsadresse übernommen.';
});
function validatePeriod() {
  end.min = start.value;
  const missingStart = !start.value && end.value;
  const missingEnd = start.value && !end.value;
  const wrongOrder = start.value && end.value && end.value < start.value;
  const startMessage = missingStart ? 'Bitte geben Sie das Startdatum ein.' : '';
  const endMessage = missingEnd ? 'Bitte geben Sie das Enddatum ein.' : wrongOrder ? 'Das Enddatum muss am selben Tag oder nach dem Startdatum liegen.' : '';
  for (const [field, element, message] of [[start, startError, startMessage], [end, endError, endMessage]]) {
    element.textContent = message;
    element.hidden = !message;
    if (message) field.setAttribute('aria-invalid', 'true');
    else field.removeAttribute('aria-invalid');
  }
  return startMessage ? start : endMessage ? end : null;
}
start.addEventListener('change', validatePeriod);
end.addEventListener('change', validatePeriod);
form.addEventListener('input', (event) => { status.textContent = ''; if (event.target.id.startsWith('invoice-')) copyStatus.textContent = ''; });
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const invalidPeriod = validatePeriod();
  const requiredFields = [...form.querySelectorAll('[required]')];
  const invalid = requiredFields.find((field) => !field.value.trim());
  if (invalid) { if (invalid.id.startsWith('invoice-')) details.open = true; invalid.reportValidity(); invalid.focus(); return; }
  if (invalidPeriod) { invalidPeriod.focus(); return; }
  status.textContent = useInvoice.checked ? 'Angaben für diese Vorschau geprüft. Die abweichende Rechnungsadresse bleibt erhalten.' : 'Angaben für diese Vorschau geprüft. Die Lieferadresse dient auch als Rechnungsadresse.';
});
