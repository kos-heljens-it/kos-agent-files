
const favorite=document.querySelector('#favorite'), status=document.querySelector('#favorite-status');
favorite.addEventListener('click',()=>{const pressed=favorite.getAttribute('aria-pressed')==='true';favorite.setAttribute('aria-pressed',String(!pressed));status.textContent=pressed?'Nicht in der Merkliste.':'In der Merkliste.';});
