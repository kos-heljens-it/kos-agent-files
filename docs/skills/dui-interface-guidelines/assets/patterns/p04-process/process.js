const start = document.querySelector('#start');
const pause = document.querySelector('#pause');
const cancel = document.querySelector('#cancel');
const progress = document.querySelector('#progress');
const text = document.querySelector('#progress-text');
const detail = document.querySelector('#detail');
const status = document.querySelector('#status');
let completed = 0;
let timer = null;
function update() { progress.value = completed; text.textContent = `${completed} von 10 Dokumenten`; }
function stopTimer() { if (timer !== null) clearInterval(timer); timer = null; }
function run() {
  pause.textContent = 'Export pausieren'; detail.textContent = 'Dokumente werden vorbereitet.';
  timer = setInterval(() => {
    completed += 1; update();
    if (completed === 10) {
      const returnFocus = [pause, cancel].includes(document.activeElement);
      stopTimer(); detail.textContent = 'Alle Dokumente sind vorbereitet.'; status.textContent = 'Export abgeschlossen.';
      pause.hidden = true; cancel.hidden = true; start.hidden = false; start.textContent = 'Erneut starten';
      if (returnFocus) start.focus();
    }
  }, 700);
}
start.addEventListener('click', () => { stopTimer(); completed = 0; update(); start.hidden = true; pause.hidden = false; cancel.hidden = false; status.textContent = 'Export gestartet.'; run(); });
pause.addEventListener('click', () => { if (timer !== null) { stopTimer(); pause.textContent = 'Export fortsetzen'; detail.textContent = 'Der Export ist pausiert.'; status.textContent = 'Export pausiert.'; } else { status.textContent = 'Export fortgesetzt.'; run(); } });
cancel.addEventListener('click', () => { stopTimer(); detail.textContent = 'Der Export wurde abgebrochen.'; status.textContent = 'Ein neuer Export beginnt bei null.'; pause.hidden = true; cancel.hidden = true; start.hidden = false; start.textContent = 'Erneut starten'; start.focus(); });
