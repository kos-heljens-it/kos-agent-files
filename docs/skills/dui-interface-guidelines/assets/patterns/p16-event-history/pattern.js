
const start = document.querySelector('#start'), processStatus = document.querySelector('#process-status'), list = document.querySelector('#event-list'), empty = document.querySelector('#empty'), announcement = document.querySelector('#announcement');
let completed = 0;
start.addEventListener('click', () => {
  start.disabled = true; processStatus.textContent = 'Bericht wird vorbereitet …';
  window.setTimeout(() => {
    completed += 1;
    const message = `Bericht ${completed} ist vorbereitet.`;
    const item = document.createElement('li'); item.textContent = message; list.prepend(item);
    empty.hidden = true; processStatus.textContent = message; announcement.textContent = message;
    start.disabled = false;
  }, 1200);
});
