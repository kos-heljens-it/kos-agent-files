const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');
const position = document.querySelector('#position');
const approx = document.querySelector('#approx');
const error = document.querySelector('#seconds-error');
const status = document.querySelector('#status');
let current = 420;
function time(value) { return `${String(Math.floor(value / 60)).padStart(2, '0')}:${String(value % 60).padStart(2, '0')}`; }
function update(value) {
  current = value;
  position.textContent = time(value);
  minutes.value = Math.round(value / 60);
  const sliderValue = Number(minutes.value) * 60;
  const rounded = sliderValue !== value;
  approx.textContent = `Regler: ${rounded ? 'ca. ' : ''}${time(sliderValue)}`;
  minutes.setAttribute('aria-valuetext', `${rounded ? 'ungefähr ' : ''}${time(sliderValue)}`);
  status.textContent = '';
}
function validate() {
  const valid = seconds.value !== '' && seconds.checkValidity();
  error.hidden = valid;
  error.textContent = valid ? '' : 'Bitte geben Sie eine ganze Zahl von 0 bis 3600 ein.';
  if (valid) seconds.removeAttribute('aria-invalid');
  else seconds.setAttribute('aria-invalid', 'true');
  return valid;
}
minutes.addEventListener('input', () => { seconds.value = Number(minutes.value) * 60; validate(); update(Number(seconds.value)); });
seconds.addEventListener('input', () => { if (validate()) update(Number(seconds.value)); else status.textContent = ''; });
document.querySelector('#apply').addEventListener('click', () => {
  if (!validate()) { seconds.focus(); return; }
  status.textContent = `Position ${time(current)} für diese Vorschau übernommen.`;
});
update(current);
