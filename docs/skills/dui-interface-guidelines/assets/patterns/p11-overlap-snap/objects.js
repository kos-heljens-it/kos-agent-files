const board = document.querySelector('#board');
const shapes = { a: { x: 120, y: 60 }, b: { x: 180, y: 100 } };
const inputs = { x: document.querySelector('#x'), y: document.querySelector('#y') };
const snap = document.querySelector('#snap');
const status = document.querySelector('#status');
let selected = 'a';
let dragging = null;
function render() {
  for (const [id, point] of Object.entries(shapes)) {
    const group = board.querySelector(`[data-shape="${id}"]`);
    group.setAttribute('transform', `translate(${point.x} ${point.y})`);
    group.setAttribute('aria-pressed', String(selected === id));
    group.classList.toggle('selected', selected === id);
  }
  document.querySelector(`input[name="selection"][value="${selected}"]`).checked = true;
  document.querySelector('#position-heading').textContent = `Position von Objekt ${selected.toUpperCase()}`;
  for (const axis of ['x', 'y']) { inputs[axis].value = shapes[selected][axis]; clearError(axis); }
}
function clearError(axis) { inputs[axis].removeAttribute('aria-invalid'); document.querySelector(`#${axis}-error`).hidden = true; }
function select(id) { selected = id; status.textContent = `Objekt ${id.toUpperCase()} ausgewählt.`; render(); }
function clamp(value, max) { return Math.min(max, Math.max(0, value)); }
function move(x, y) { shapes[selected].x = clamp(Math.round(x), 400); shapes[selected].y = clamp(Math.round(y), 200); render(); }
function localPoint(event) { const point = board.createSVGPoint(); point.x = event.clientX; point.y = event.clientY; return point.matrixTransform(board.getScreenCTM().inverse()); }
document.querySelectorAll('input[name="selection"]').forEach((radio) => radio.addEventListener('change', () => select(radio.value)));
board.addEventListener('pointerdown', (event) => {
  const group = event.target.closest('[data-shape]');
  if (!group || event.button !== 0) return;
  select(group.dataset.shape);
  const point = localPoint(event);
  dragging = { id: event.pointerId, dx: point.x - shapes[selected].x, dy: point.y - shapes[selected].y };
  board.setPointerCapture(event.pointerId);
});
board.addEventListener('pointermove', (event) => {
  if (!dragging || dragging.id !== event.pointerId) return;
  const point = localPoint(event);
  const x = point.x - dragging.dx, y = point.y - dragging.dy;
  move(snap.checked ? Math.round(x / 10) * 10 : x, snap.checked ? Math.round(y / 10) * 10 : y);
});
function endDrag(event) { if (dragging?.id === event.pointerId) dragging = null; }
board.addEventListener('pointerup', endDrag);
board.addEventListener('pointercancel', endDrag);
board.querySelectorAll('[data-shape]').forEach((group) => {
  group.addEventListener('focus', () => select(group.dataset.shape));
  group.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); select(group.dataset.shape); return; }
    const offsets = { ArrowLeft: [-1, 0], ArrowRight: [1, 0], ArrowUp: [0, -1], ArrowDown: [0, 1] };
    if (!offsets[event.key]) return;
    event.preventDefault(); select(group.dataset.shape);
    const [dx, dy] = offsets[event.key]; move(shapes[selected].x + dx, shapes[selected].y + dy);
  });
});
for (const axis of ['x', 'y']) {
  inputs[axis].addEventListener('input', () => {
    const input = inputs[axis], error = document.querySelector(`#${axis}-error`);
    if (input.value === '' || !input.checkValidity()) {
      input.setAttribute('aria-invalid', 'true'); error.textContent = `Bitte eine ganze Zahl von 0 bis ${input.max} eingeben.`; error.hidden = false; return;
    }
    const value = Number(input.value);
    shapes[selected][axis] = value;
    board.querySelector(`[data-shape="${selected}"]`).setAttribute('transform', `translate(${shapes[selected].x} ${shapes[selected].y})`);
    clearError(axis);
  });
}
snap.addEventListener('change', () => { board.querySelector('.board-background').setAttribute('fill', snap.checked ? 'url(#grid)' : '#f8fbf8'); });
document.querySelector('#reset').addEventListener('click', () => { shapes.a = { x: 120, y: 60 }; shapes.b = { x: 180, y: 100 }; select('a'); status.textContent = 'Ausgangsanordnung wiederhergestellt.'; });
render();
