const gridSize = 7; // 7x7 grid

function isEditable(row, col) {
  // Editable cells: odd rows and odd columns
  return row % 2 !== 0 && col % 2 !== 0;
}

function createGrid() {
  const container = document.getElementById('gridContainer');
  container.innerHTML = '';
  const grid = document.createElement('div');
  grid.className = 'grid';

  for (let row = 1; row <= gridSize; row++) {
    for (let col = 1; col <= gridSize; col++) {
      const cell = document.createElement('div');
      cell.className = 'cell';

      if (row % 2 === 0 && col % 2 === 0) {
        cell.classList.add('shaded'); // Sacred: even-even = shaded
      } else if (isEditable(row, col)) {
        const input = document.createElement('input');
        input.maxLength = 1;
        input.dataset.row = row;
        input.dataset.col = col;
        cell.appendChild(input);
      }
      grid.appendChild(cell);
    }
  }

  container.appendChild(grid);
}

function loadPuzzle() {
  // Placeholder function — to be expanded later
  alert('Load function is not yet connected to puzzle bank.');
}

window.onload = createGrid;
