const filters = [...document.querySelectorAll('[data-filter]')];
const entries = [...document.querySelectorAll('[data-type]')];
const count = document.querySelector('#count');
filters.forEach((button) => {
  button.addEventListener('click', () => {
    const selected = button.dataset.filter;
    filters.forEach((item) => item.setAttribute('aria-pressed', String(item === button)));
    entries.forEach((entry) => { entry.hidden = selected !== 'all' && entry.dataset.type !== selected; });
    const visible = entries.filter((entry) => !entry.hidden).length;
    count.textContent = visible === 1 ? '1 Eintrag' : `${visible} Einträge`;
  });
});
