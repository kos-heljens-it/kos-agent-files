
const search = document.querySelector('#search'), results = document.querySelector('#results'), cards = [...document.querySelectorAll('.card')];
function update() {
  const query = search.value.trim().toLocaleLowerCase('de'); let count = 0;
  cards.forEach(card => { const found = !!query && card.dataset.search.includes(query); card.classList.toggle('found',found); if (found) count++; });
  results.textContent = !query ? 'Alle 6 Bereiche werden angezeigt.' : count === 0 ? 'Keine Treffer. Alle Bereiche bleiben sichtbar.' : `${count} Treffer markiert. Alle Bereiche bleiben sichtbar.`;
}
search.addEventListener('input',update);
document.querySelector('#clear').addEventListener('click',()=>{search.value='';update();search.focus();});
