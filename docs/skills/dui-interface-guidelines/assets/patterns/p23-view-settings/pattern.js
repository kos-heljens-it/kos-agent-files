
const context=document.querySelector('#context'), details=document.querySelector('#details'), compact=document.querySelector('#compact'), preview=document.querySelector('.preview'), status=document.querySelector('#status');
const defaults={details:true,compact:false}, drafts=new Map(); let current=context.value;
function key(id){return `dui-p23-view:${id}:v1`;}
function load(id){ try { const raw=localStorage.getItem(key(id)); if(raw===null)return {...defaults}; const value=JSON.parse(raw); if(typeof value.details!=='boolean'||typeof value.compact!=='boolean')throw new Error('invalid'); return {details:value.details,compact:value.compact}; } catch { status.textContent='Gespeicherte Ansicht konnte nicht gelesen werden. Die Standardansicht ist aktiv.'; return {...defaults}; } }
function read(){return {details:details.checked,compact:compact.checked};}
function apply(value){ details.checked=value.details;compact.checked=value.compact;preview.classList.toggle('hide-details',!value.details);preview.classList.toggle('compact',value.compact); }
function updateDraft(){ const value=read(); drafts.set(current,value); apply(value); status.textContent='Ansicht geändert; noch nicht gespeichert.'; }
context.addEventListener('change',()=>{drafts.set(current,read());current=context.value;status.textContent='';apply(drafts.get(current)||load(current));});
details.addEventListener('change',updateDraft);compact.addEventListener('change',updateDraft);
document.querySelector('#reset').addEventListener('click',()=>{apply({...defaults});drafts.set(current,read());status.textContent='Standardansicht wiederhergestellt; noch nicht gespeichert.';});
document.querySelector('#save').addEventListener('click',()=>{try{localStorage.setItem(key(current),JSON.stringify(read()));drafts.set(current,read());status.textContent=`Ansicht für ${context.selectedOptions[0].textContent} in diesem Browser gespeichert.`;}catch{status.textContent='Die Ansicht konnte in diesem Browser nicht gespeichert werden.';}});
apply(load(current));
