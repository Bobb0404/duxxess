let puzzles = {};

fetch('puzzles.json')
  .then(res => res.json())
  .then(data => {
    puzzles = data;
  });

function loadPuzzle() {
  const id = document.getElementById('puzzle-id-input').value.trim().toUpperCase();
  const puzzle = puzzles[id];

  const container = document.getElementById('grid-container');
  const status = document.getElementById('status');
  container.innerHTML = '';
  status.textContent = '';

  if (!puzzle) {
    status.textContent = 'Puzzle not found.';
    return;
  }

  const grid = document.createElement('div');
  grid.className = 'grid';

  for (let r = 0; r < 5; r++) {
    for (let c = 0; c < 5; c++) {
      const cell = document.createElement('div');
      cell.className = 'cell';

      const row = r + 1;
      const col = c + 1;
      const value = puzzle.grid[r][c];

      const isShaded = row % 2 === 0 && col % 2 === 0;

      if (isShaded) {
        cell.classList.add('shaded');
      } else {
        const input = document.createElement('input');
        input.maxLength = 1;
        if (value) input.value = value;
        cell.appendChild(input);
      }

      grid.appendChild(cell);
    }
  }

  container.appendChild(grid);
}
