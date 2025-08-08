// script.js - stable baseline

const container = document.getElementById('grid-container');
const searchBox = document.getElementById('search-box');
const puzzleTitle = document.getElementById('puzzle-title');
const puzzleInfo = document.getElementById('puzzle-info');

let currentPuzzle = null;

function createGrid(puzzle) {
  container.innerHTML = '';
  container.style.gridTemplateColumns = `repeat(${puzzle.size}, 1fr)`;

  for (let r = 0; r < puzzle.size; r++) {
    for (let c = 0; c < puzzle.size; c++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');

      // Shading rule: shaded if row and col are even-numbered (1-based)
      if ((r + 1) % 2 === 0 && (c + 1) % 2 === 0) {
        cell.classList.add('shaded');
        cell.textContent = puzzle.grid[r][c] === "X" ? "" : puzzle.grid[r][c];
        cell.contentEditable = false;
      } else {
        cell.classList.add('editable');
        cell.textContent = (puzzle.grid[r][c] === " " || puzzle.grid[r][c] === "X") ? "" : puzzle.grid[r][c];
        cell.contentEditable = true;
        cell.spellcheck = false;
      }

      container.appendChild(cell);
    }
  }
}

function loadPuzzle(puzzleId) {
  if (!(puzzleId in puzzles)) {
    alert('Puzzle not found!');
    return;
  }
  currentPuzzle = puzzles[puzzleId];
  puzzleTitle.textContent = `${currentPuzzle.title} (${currentPuzzle.id})`;
  puzzleInfo.textContent = `Difficulty: ${currentPuzzle.difficulty} | Size: ${currentPuzzle.size}x${currentPuzzle.size}`;
  createGrid(currentPuzzle);
}

searchBox.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    const query = searchBox.value.trim().toUpperCase();
    if (puzzles[query]) {
      loadPuzzle(query);
    } else {
      alert('Puzzle ID not found!');
    }
  }
});

// Load default puzzle at start
loadPuzzle('DS0001B');
