
const viewport = document.querySelector('#viewport'), items = document.querySelector('#items'), status = document.querySelector('#status'), load = document.querySelector('#load');
const batch = 4, demoLimit = 12; let count = 0, loading = false;
function addBatch() {
  for (let i = 0; i < batch && count < demoLimit; i++) {
    count++; const item = document.createElement('li'), title = document.createElement('strong'), detail = document.createElement('span');
    item.id = `document-${count}`; title.textContent = `Dokument ${String(count).padStart(2,'0')}`; detail.textContent = `Beispieleintrag ${count}`; item.append(title,detail); items.append(item);
  }
}
function update() {
  const finished = count >= demoLimit;
  status.textContent = finished ? `${count} Einträge geladen. Keine weiteren Einträge verfügbar.` : `${count} Einträge geladen. Weitere Einträge verfügbar; Gesamtzahl unbekannt.`;
  load.setAttribute('aria-disabled',String(finished || loading));
  load.textContent = loading ? 'Einträge werden geladen …' : 'Weitere Einträge laden';
}
load.addEventListener('click', () => {
  if (loading || count >= demoLimit) return;
  loading = true; update(); status.textContent = 'Weitere Einträge werden geladen …';
  window.setTimeout(() => { const top = viewport.scrollTop; addBatch(); viewport.scrollTop = top; loading = false; update(); },350);
});
addBatch(); update();
