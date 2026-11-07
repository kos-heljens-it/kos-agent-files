
const status=document.querySelector('#status');document.querySelectorAll('button[data-name]').forEach(button=>button.addEventListener('click',()=>{status.textContent=`${button.dataset.name} ausgewählt. Dies ist eine lokale Vorschau.`;}));
