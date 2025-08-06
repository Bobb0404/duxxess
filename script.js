function createGrid(size) {
  const grid = document.getElementById('grid');
  grid.innerHTML = '';
  grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  for (let r = 0; r < size; r++) {
    for (let c = 0; c < size; c++) {
      const cell = document.createElement('input');
      cell.type = 'text';
      cell.maxLength = 1;
      cell.className = 'cell';

      if ((r % 2 === 1) && (c % 2 === 1)) {
        cell.classList.add('editable');
      } else if ((r % 2 === 0) && (c % 2 === 0)) {
        cell.classList.add('shaded');
        cell.disabled = true;
      } else {
        cell.disabled = true;
      }

      cell.dataset.row = r;
      cell.dataset.col = c;
      grid.appendChild(cell);
    }
  }
}

function fillClues(puzzle) {
  const size = puzzle.size;
  const acrossRows = [0, 2, 4, 6];
  const downCols = [0, 2, 4, 6];

  puzzle.across.forEach((word, i) => {
    if (i < acrossRows.length) {
      const row = acrossRows[i];
      for (let j = 0; j < word.length && j < size; j++) {
        const ch = word[j];
        if (ch === ch.toUpperCase()) {
          const cell = document.querySelector(`.cell[data-row='${row}'][data-col='${j}']`);
          if (cell) {
            cell.value = ch;
            cell.disabled = true;
          }
        }
      }
    }
  });

  puzzle.down.forEach((word, i) => {
    if (i < downCols.length) {
      const col = downCols[i];
      for (let j = 0; j < word.length && j < size; j++) {
        const ch = word[j];
        if (ch === ch.toUpperCase()) {
          const cell = document.querySelector(`.cell[data-row='${j}'][data-col='${col}']`);
          if (cell) {
            cell.value = ch;
            cell.disabled = true;
          }
        }
      }
    }
  });
}

function loadPuzzleFromInput() {
  const id = document.getElementById('puzzleIdInput').value.trim().toUpperCase();
  loadPuzzle(id);
}

function loadPuzzle(id) {
  const puzzle = puzzles.find(p => p.id === id);
  if (!puzzle) {
    alert('Puzzle not found.');
    return;
  }
  createGrid(puzzle.size);
  fillClues(puzzle);
}

// Load default puzzle on page load
window.onload = () => {
  loadPuzzle('DS0001B');
};
