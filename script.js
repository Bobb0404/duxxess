function createGrid(size = 7) {
  const gridContainer = document.getElementById('grid');
  gridContainer.innerHTML = '';

  for (let row = 1; row <= size; row++) {
    for (let col = 1; col <= size; col++) {
      const input = document.createElement('input');
      input.maxLength = 1;
      input.classList.add('cell');

      // Sacred shading logic:
      if (row % 2 === 1 && col % 2 === 1) {
        // Editable cell: odd row & odd column
        input.classList.add('editable');
      } else if (row % 2 === 0 && col % 2 === 0) {
        // Non-editable cell: even row & even column
        input.classList.add('non-editable');
        input.disabled = true;
      } else {
        // All other cells: plain but not shaded
        input.classList.add('editable');
      }

      gridContainer.appendChild(input);
    }
  }
}

// Load puzzle button
document.getElementById('loadPuzzleBtn').addEventListener('click', () => {
  createGrid(7); // For now, always create 7x7
});

// Create default grid on page load
window.addEventListener('DOMContentLoaded', () => {
  createGrid(7);
});
