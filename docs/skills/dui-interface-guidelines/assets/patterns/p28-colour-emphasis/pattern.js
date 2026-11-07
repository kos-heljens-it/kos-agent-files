
const form=document.querySelector('#form'),email=document.querySelector('#email'),error=document.querySelector('#email-error'),status=document.querySelector('#status');
function clearError(){error.hidden=true;email.removeAttribute('aria-invalid');}
form.addEventListener('submit',event=>{event.preventDefault();if(!email.value.trim()||!email.checkValidity()){error.textContent='Bitte geben Sie eine gültige E-Mail-Adresse ein.';error.hidden=false;email.setAttribute('aria-invalid','true');status.textContent='';email.focus();return;}clearError();status.textContent='Die Adresse hat ein gültiges Format. Es wurde keine E-Mail verschickt.';});
email.addEventListener('input',()=>{clearError();status.textContent='';});
document.querySelector('#reset').addEventListener('click',()=>{email.value='';clearError();status.textContent='Eingabe zurückgesetzt.';email.focus();});
