
const list = document.querySelector('#steps'), status = document.querySelector('#status');
let order = [{id:'a',name:'Thema festlegen'}, {id:'b',name:'Informationen sammeln'}, {id:'c',name:'Entwurf prüfen'}, {id:'d',name:'Ergebnis teilen'}];
let dragging = null, dropTarget = null;
function clearPreview() { list.querySelectorAll('.drop-before,.drop-after').forEach(el => el.classList.remove('drop-before','drop-after')); dropTarget = null; }
function render(focusId, preferredAction) {
  list.replaceChildren();
  order.forEach((item,index) => {
    const li = document.createElement('li'); li.className = 'step'; li.draggable = true; li.dataset.id = item.id;
    const name = document.createElement('div'); name.className = 'step-name';
    const handle = document.createElement('span'); handle.className = 'handle'; handle.setAttribute('aria-hidden','true'); handle.textContent = '⠿';
    const label = document.createElement('span'); label.textContent = `${index + 1}. ${item.name}`; name.append(handle,label);
    const actions = document.createElement('div'); actions.className = 'step-actions';
    for (const [action,word] of [['up','Nach oben'],['down','Nach unten']]) {
      const button = document.createElement('button'); button.type = 'button'; button.dataset.action = action;
      button.textContent = word; button.setAttribute('aria-label',`${item.name}: ${word}`);
      button.disabled = action === 'up' ? index === 0 : index === order.length - 1; actions.append(button);
    }
    li.append(name,actions); list.append(li);
  });
  if (focusId) { const row = list.querySelector(`[data-id="${focusId}"]`), preferred = row.querySelector(`[data-action="${preferredAction}"]`); (preferred.disabled ? row.querySelector(`[data-action="${preferredAction === 'up' ? 'down' : 'up'}"]`) : preferred).focus(); }
}
function move(id, toIndex, focusAction) {
  const from = order.findIndex(item => item.id === id); if (from < 0 || toIndex < 0 || toIndex >= order.length || from === toIndex) return;
  const [item] = order.splice(from,1); order.splice(toIndex,0,item); render(focusAction ? id : null,focusAction); status.textContent = `${item.name} steht jetzt an Position ${toIndex + 1} von ${order.length}.`;
}
list.addEventListener('click', event => {
  const button = event.target.closest('button[data-action]'); if (!button) return;
  const id = button.closest('.step').dataset.id, index = order.findIndex(item => item.id === id);
  move(id,index + (button.dataset.action === 'up' ? -1 : 1),button.dataset.action);
});
list.addEventListener('dragstart', event => {
  const row = event.target.closest('.step'); if (!row || event.target.closest('button')) { event.preventDefault(); return; }
  dragging = row.dataset.id; row.classList.add('dragging'); event.dataTransfer.effectAllowed = 'move'; event.dataTransfer.setData('text/plain',dragging);
});
list.addEventListener('dragover', event => {
  if (!dragging) return; const row = event.target.closest('.step');
  if (!row || row.dataset.id === dragging) { clearPreview(); return; }
  event.preventDefault(); event.dataTransfer.dropEffect = 'move';
  const rect = row.getBoundingClientRect(), side = event.clientY < rect.top + rect.height / 2 ? 'before' : 'after';
  clearPreview(); dropTarget = {id:row.dataset.id,side}; row.classList.add(side === 'before' ? 'drop-before' : 'drop-after');
});
list.addEventListener('drop', event => {
  if (!dragging || !dropTarget) return; event.preventDefault();
  const source = dragging, from = order.findIndex(item => item.id === source), target = order.findIndex(item => item.id === dropTarget.id);
  let insertion = target + (dropTarget.side === 'after' ? 1 : 0); if (from < insertion) insertion--;
  clearPreview(); dragging = null; move(source,insertion,null); list.querySelectorAll('.dragging').forEach(el => el.classList.remove('dragging'));
});
list.addEventListener('dragend', () => { dragging = null; clearPreview(); list.querySelectorAll('.dragging').forEach(el => el.classList.remove('dragging')); });
render();
