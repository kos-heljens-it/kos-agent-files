const note = document.querySelector('#note');
const view = document.querySelector('#view-mode');
const edit = document.querySelector('#edit-mode');
const save = document.querySelector('#save');
const status = document.querySelector('#status');
let mode = 'view';
let baseline = note.value;
function render() {
  const editing = mode === 'edit';
  const dirty = note.value !== baseline;
  note.readOnly = !editing;
  view.setAttribute('aria-pressed', String(!editing));
  edit.setAttribute('aria-pressed', String(editing));
  document.querySelector('#current-mode').textContent = editing ? 'Bearbeitungsmodus aktiv' : 'Ansichtsmodus aktiv';
  document.querySelector('#mode-hint').textContent = editing ? 'Sie können den Text bearbeiten.' : 'Die Notiz ist schreibgeschützt. Wählen Sie „Bearbeiten“, um Änderungen vorzunehmen.';
  save.disabled = !editing || !dirty;
  document.querySelector('#save-hint').textContent = !editing ? 'Speichern wird im Bearbeitungsmodus nach einer Änderung verfügbar.' : dirty ? 'Die Änderung kann übernommen werden.' : 'Es gibt keine neue Änderung zum Übernehmen.';
}
view.addEventListener('click', () => { mode = 'view'; status.textContent = ''; render(); });
edit.addEventListener('click', () => { mode = 'edit'; status.textContent = ''; render(); });
note.addEventListener('input', () => { status.textContent = ''; render(); });
save.addEventListener('click', () => { const hadFocus = document.activeElement === save; baseline = note.value; render(); status.textContent = 'Notiz für diese Vorschau übernommen.'; if (hadFocus) note.focus({ preventScroll: true }); });
render();
