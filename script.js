let current = 0;

function renderGrid() {
  const puzzle = puzzles[current];
  const grid = document.getElementById('grid-container');
  grid.innerHTML = '';
  document.getElementById('puzzle-id').innerText = `Puzzle ID: ${puzzle.id}`;

  for (let r = 0; r < 7; r++) {
    for (let c = 0; c < 7; c++) {
      const cell = document.createElement('div');
      cell.className = 'cell';
      if (r % 2 === 1 && c % 2 === 1) {
        cell.classList.add('shaded');
      } else {
        cell.classList.add('editable');
      }
      grid.appendChild(cell);
    }
  }
}

document.getElementById('next-btn').addEventListener('click', () => {
  if (current < puzzles.length - 1) current++;
  renderGrid();
});
document.getElementById('prev-btn').addEventListener('click', () => {
  if (current > 0) current--;
  renderGrid();
});

window.onload = renderGrid;
