const gridContainer = document.getElementById('duxxessGrid');
const puzzleIdInput = document.getElementById('puzzleIdInput');
const loadPuzzleBtn = document.getElementById('loadPuzzleBtn');
const errorMessage = document.getElementById('errorMessage');

function generateGrid(size, letters) {
  gridContainer.innerHTML = '';
  gridContainer.style.setProperty('--grid-size', size);

  for (let row = 1; row <= size; row++) {
    for (let col = 1; col <= size; col++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');

      // Shade cells where BOTH row and col are EVEN numbers
      if (row % 2 === 0 && col % 2 === 0) {
        cell.classList.add('shaded');
        cell.textContent = '';
      } else {
        cell.classList.add('editable');
        const input = document.createElement('input');
        input.type = 'text';
        input.maxLength = 1;

        const idx = (row - 1) * size + (col - 1);
        if (letters[idx]) {
          input.value = letters[idx].toUpperCase();
          input.readOnly = true;
          input.style.color = '#222';
        }

        cell.appendChild(input);
      }

      gridContainer.appendChild(cell);
    }
  }
}

function loadPuzzle(puzzleId) {
  const puzzle = puzzles[puzzleId];
  if (!puzzle) {
    errorMessage.textContent = `Puzzle ID "${puzzleId}" not found.`;
    errorMessage.classList.remove('hidden');
    return;
  }

  errorMessage.classList.add('hidden');
  generateGrid(puzzle.size, puzzle.letters);
}

window.addEventListener('DOMContentLoaded', () => {
  puzzleIdInput.value = 'DS0001B';
  loadPuzzle('DS0001B');
});

loadPuzzleBtn.addEventListener('click', () => {
  const id = puzzleIdInput.value.trim().toUpperCase();
  loadPuzzle(id);
});
