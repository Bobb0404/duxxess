const gridSize = 7;

function createGrid() {
  const container = document.getElementById('grid-container');
  container.innerHTML = '';

  for (let row = 1; row <= gridSize; row++) {
    for (let col = 1; col <= gridSize; col++) {
      const cell = document.createElement('div');
      cell.className = 'cell';

      if (row % 2 === 0 && col % 2 === 0) {
        cell.classList.add('shaded');
      } else {
        cell.classList.add('editable');
      }
      container.appendChild(cell);
    }
  }
}

window.addEventListener('DOMContentLoaded', createGrid);
