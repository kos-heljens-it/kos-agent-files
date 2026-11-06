const dialog = document.querySelector('#dialog');
const open = document.querySelector('#open');
const note = document.querySelector('#note');
const status = document.querySelector('#status');
open.addEventListener('click', () => { status.textContent = ''; dialog.showModal(); });
document.querySelector('#keep').addEventListener('click', () => dialog.close('keep'));
document.querySelector('#discard').addEventListener('click', () => { note.value = ''; dialog.close('discard'); });
dialog.addEventListener('close', () => { status.textContent = dialog.returnValue === 'discard' ? 'Der Entwurf wurde entfernt.' : 'Der Entwurf bleibt erhalten.'; dialog.returnValue = ''; open.focus(); });
