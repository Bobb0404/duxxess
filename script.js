// Grab DOM elements
const gridContainer = document.getElementById('duxxessGrid');
const puzzleIdInput = document.getElementById('puzzleIdInput');
const loadPuzzleBtn = document.getElementById('loadPuzzleBtn');
const acrossCluesList = document.getElementById('acrossClues');
const downCluesList = document.getElementById('downClues');
const errorMessage = document.getElementById('errorMessage');

/**
 * Generate the Duxxess grid with correct shading and puzzle letters
 * @param {number} size grid size (3, 5, or 7)
 * @param {Array} letters flat array of letters (size*size length)
 */
function generateGrid(size, letters) {
  gridContainer.innerHTML = '';
  gridContainer.style.gridTemplateColumns = `repeat(${size}, 50px)`;

  for (let row = 1; row <= size; row++) {
    for (let col = 1; col <= size; col++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');

      // Shading rule: shaded only if row and col are both even
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
          input.style.color = 'royalblue';
        }

        cell.appendChild(input);
      }

      gridContainer.appendChild(cell);
    }
  }
}

/**
 * Load a puzzle by its ID and display it
 * @param {string} puzzleId
 */
function loadPuzzle(puzzleId) {
  const puzzle = puzzles[puzzleId];
  if (!puzzle) {
    errorMessage.textContent = `Puzzle ID "${puzzleId}" not found.`;
    errorMessage.classList.remove('hidden');
    return;
  }

  errorMessage.classList.add('hidden');

  generateGrid(puzzle.size, puzzle.letters);

  // Render clues
  acrossCluesList.innerHTML = '';
  downCluesList.innerHTML = '';

  puzzle.across.forEach(clue => {
    const li = document.createElement('li');
    li.textContent = clue;
    acrossCluesList.appendChild(li);
  });

  puzzle.down.forEach(clue => {
    const li = document.createElement('li');
    li.textContent = clue;
    downCluesList.appendChild(li);
  });
}

// Load default puzzle on page load
window.addEventListener('DOMContentLoaded', () => {
  puzzleIdInput.value = 'DS0001B';
  loadPuzzle('DS0001B');
});

// Load puzzle button event
loadPuzzleBtn.addEventListener('click', () => {
  const id = puzzleIdInput.value.trim().toUpperCase();
  loadPuzzle(id);
});
