const button = document.querySelector('#theme');
button.addEventListener('click', () => {
  const dark = document.documentElement.dataset.theme !== 'dark';
  document.documentElement.dataset.theme = dark ? 'dark' : 'light';
  button.textContent = dark ? 'Helle Ansicht' : 'Dunkle Ansicht';
  button.setAttribute('aria-pressed', String(dark));
});
