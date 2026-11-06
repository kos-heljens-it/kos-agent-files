const button=document.querySelector('#action'), gesture=document.querySelector('#gesture'), result=document.querySelector('#result');
let count=0, activePointer=null, suppressPointerClick=false;
function insideButton(event){const r=button.getBoundingClientRect();return event.clientX>=r.left&&event.clientX<=r.right&&event.clientY>=r.top&&event.clientY<=r.bottom;}
button.addEventListener('pointerdown',event=>{ if(event.button!==0)return; activePointer=event.pointerId; suppressPointerClick=false; gesture.textContent='Gedrückt. Außerhalb der Schaltfläche loslassen, um abzubrechen.'; });
button.addEventListener('pointermove',event=>{ if(event.pointerId!==activePointer)return; gesture.textContent=insideButton(event)?'Gedrückt. Außerhalb der Schaltfläche loslassen, um abzubrechen.':'Außerhalb: Beim Loslassen wird die Aktion abgebrochen.'; });
document.addEventListener('pointerup',event=>{ if(event.pointerId!==activePointer)return; activePointer=null; suppressPointerClick=!insideButton(event); gesture.textContent=suppressPointerClick?'Eingabe abgebrochen.':'Bereit.'; });
button.addEventListener('pointercancel',event=>{ if(event.pointerId!==activePointer)return; activePointer=null; suppressPointerClick=true; gesture.textContent='Eingabe abgebrochen.'; });
button.addEventListener('click',event=>{ if(event.detail!==0 && suppressPointerClick){event.preventDefault();event.stopPropagation();suppressPointerClick=false;return;} suppressPointerClick=false;count++;result.textContent=`Ausgelöst: ${count}`;gesture.textContent='Aktion ausgelöst.'; });
