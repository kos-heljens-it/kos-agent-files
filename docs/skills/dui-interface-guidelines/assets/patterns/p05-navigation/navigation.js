/* Lokale Navigation über Adressfragment und Browserverlauf, ohne Netzwerkverbindung. */
const sections = {
  uebersicht: { title: 'Übersicht', description: 'Die wichtigsten Informationen für Ihre laufende Arbeit.', pages: [['aktuell', 'Aktuell'], ['eintraege', 'Letzte Einträge']] },
  projekte: { title: 'Projekte', description: 'Aktive und abgeschlossene Projekte im Überblick.', pages: [['aktiv', 'Aktive Projekte'], ['archiv', 'Archiv']] },
  team: { title: 'Team', description: 'Mitglieder und Einladungen für Ihren Arbeitsbereich.', pages: [['mitglieder', 'Mitglieder'], ['einladungen', 'Einladungen']] }
};
const categoryNav = document.querySelector('#category-nav');
function render() {
  const categoryHadFocus = categoryNav.contains(document.activeElement);
  const parts = location.hash.slice(1).split('/');
  const section = Object.hasOwn(sections, parts[0]) ? parts[0] : 'uebersicht';
  const data = sections[section];
  const page = data.pages.some(([id]) => id === parts[1]) ? parts[1] : data.pages[0][0];
  document.querySelectorAll('[data-main]').forEach((link) => {
    if (link.dataset.main === section) link.setAttribute('aria-current', 'page');
    else link.removeAttribute('aria-current');
  });
  document.querySelector('#page-title').textContent = data.title;
  document.querySelector('#page-description').textContent = data.description;
  document.querySelector('#current-location').textContent = data.title;
  categoryNav.replaceChildren(...data.pages.map(([id, label]) => {
    const link = document.createElement('a');
    link.href = `#${section}/${id}`;
    link.textContent = label;
    if (id === page) link.setAttribute('aria-current', 'page');
    return link;
  }));
  if (categoryHadFocus) categoryNav.querySelector('[aria-current="page"]').focus({ preventScroll: true });
  document.querySelectorAll('[data-panel]').forEach((panel) => { panel.hidden = panel.dataset.panel !== `${section}/${page}`; });
  document.title = `${data.title} · P05 Navigation`;
}
window.addEventListener('hashchange', render);
render();
