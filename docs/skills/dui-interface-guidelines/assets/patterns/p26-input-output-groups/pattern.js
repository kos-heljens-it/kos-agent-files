
const field=document.querySelector('#distance'),amount=document.querySelector('#amount'),error=document.querySelector('#distance-error');
const format=new Intl.NumberFormat('de-DE',{style:'currency',currency:'EUR'});
function update(){const valid=field.value!==''&&field.checkValidity();error.hidden=valid;if(valid){field.removeAttribute('aria-invalid');amount.textContent=format.format(Number(field.value)*30/100);}else{field.setAttribute('aria-invalid','true');amount.textContent='–';}}
field.addEventListener('input',update);update();
