
const tasks = [...document.querySelectorAll('[data-task]')], undo = document.querySelector('#undo'), redo = document.querySelector('#redo'), hint = document.querySelector('#history-hint'), status = document.querySelector('#status');
let past = [], future = [], state = [false,false,false];
function render(message) {
  tasks.forEach((input,i)=>{input.checked=state[i];}); undo.disabled = past.length === 0; redo.disabled = future.length === 0;
  hint.textContent = past.length || future.length ? `${past.length} ${past.length === 1 ? 'Änderung kann' : 'Änderungen können'} rückgängig gemacht werden; ${future.length} ${future.length === 1 ? 'kann' : 'können'} wiederhergestellt werden.` : 'Noch keine Änderungen vorhanden.';
  status.textContent = `${message ? message + ' ' : ''}${state.filter(Boolean).length} von 3 Aufgaben erledigt.`;
}
tasks.forEach((input,i)=>input.addEventListener('change',()=>{past.push([...state]);future=[];state=[...state];state[i]=input.checked;render('Änderung übernommen.');}));
undo.addEventListener('click',()=>{if(!past.length)return;future.push([...state]);state=past.pop();render('Änderung rückgängig gemacht.');if(undo.disabled) tasks[0].focus();});
redo.addEventListener('click',()=>{if(!future.length)return;past.push([...state]);state=future.pop();render('Änderung wiederhergestellt.');if(redo.disabled) tasks[0].focus();});
render('');
