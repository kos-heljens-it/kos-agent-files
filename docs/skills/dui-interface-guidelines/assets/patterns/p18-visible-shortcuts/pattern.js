
const workspace = document.querySelector('#workspace'), toggle = document.querySelector('#toggle'), markState = document.querySelector('#mark-state'), status = document.querySelector('#status');
let marked = false;
function changeMark() {
  marked = !marked; workspace.classList.toggle('marked',marked); toggle.setAttribute('aria-pressed',String(marked));
  markState.textContent = marked ? 'Markiert' : 'Nicht markiert'; status.textContent = marked ? 'Notiz markiert.' : 'Markierung entfernt.';
}
toggle.addEventListener('click', changeMark);
workspace.addEventListener('keydown', event => {
  const target = event.target;
  if (event.repeat || event.isComposing || event.ctrlKey || event.metaKey || target.closest('input, textarea, select, [contenteditable]:not([contenteditable="false"])')) return;
  if (event.altKey && event.shiftKey && event.key.toLowerCase() === 'm') { event.preventDefault(); changeMark(); }
});
