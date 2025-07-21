const gridSize = 7;

function createGrid() {
  const grid = document.getElementById('grid');
  grid.innerHTML = ''; // Clear any existing content

  for (let row = 1; row <= gridSize; row++) {
    for (let col = 1; col <= gridSize; col++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');

      const isShaded = row % 2 === 0 && col % 2 === 0;
      if (isShaded) {
        cell.classList.add('shaded');
        cell.textContent = ''; // non-editable cell
      } else {
        const input = document.createElement('input');
        input.maxLength = 1;

        // Force uppercase and only A-Z letters
        input.addEventListener('input', () => {
          input.value = input.value.toUpperCase().replace(/[^A-Z]/g, '');
        });

        cell.appendChild(input);
      }

      grid.appendChild(cell);
    }
  }
}

window.onload = () => {
  createGrid();
};
