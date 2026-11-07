
const toggle=document.querySelector('#motion-toggle'),indicator=document.querySelector('#indicator'),status=document.querySelector('#motion-status'),media=window.matchMedia('(prefers-reduced-motion: reduce)');
let userPaused=false;
function render(){
  const reduced=media.matches;indicator.dataset.paused=String(userPaused||reduced);toggle.setAttribute('aria-disabled',String(reduced));
  toggle.textContent=userPaused?'Bewegung fortsetzen':'Bewegung pausieren';
  status.textContent=reduced?'Bewegung aufgrund der Systemeinstellung ausgeschaltet.':userPaused?'Bewegung pausiert.':'Bewegung läuft.';
}
toggle.addEventListener('click',()=>{if(media.matches)return;userPaused=!userPaused;render();});
media.addEventListener('change',render);render();
