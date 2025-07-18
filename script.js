const puzzles = [
  {
    id: 'DS0001',
    across: ['Garland', 'Orbited', 'Macaque', 'Dangers'],
    down: ['Groomed', 'Rubicon', 'Antique', 'Dodgers']
  },
  {
    id: 'DS0002',
    across: ['Chainer', 'Informs', 'Barmaid', 'Distend'],
    down: ['Climbed', 'Affirms', 'Narrate', 'Resided']
  },
  {
    id: 'DS0003',
    across: ['Solidly', 'Lactate', 'Intoned', 'Resided'],
    down: ['Soldier', 'Locates', 'Drained', 'Yielded']
  }
];

let currentPuzzleIndex = 0;

function isEditable(row, col) {
  // Editable if either row or column is odd (1-based)
  return row % 2 === 1 || col % 2 === 1;
}

function renderPuzzle(puzzle) {
  const grid = document.getElementById("grid-container");
  grid.innerHTML = "";

  for (let r = 0; r < 7; r++) {
    for (let c = 0; c < 7; c++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      if (isEditable(r + 1, c + 1)) {
        cell.classList.add("editable");
      } else {
        cell.classList.add("shaded");
      }
      grid.appendChild(cell);
    }
  }

  document.getElementById("game-id").innerText = `(${puzzle.id})`;
}

function loadPuzzle(index) {
  if (index >= 0 && index < puzzles.length) {
    currentPuzzleIndex = index;
    renderPuzzle(puzzles[currentPuzzleIndex]);
  }
}

document.getElementById("prev-btn").addEventListener("click", () => {
  if (currentPuzzleIndex > 0) {
    loadPuzzle(currentPuzzleIndex - 1);
  }
});

document.getElementById("next-btn").addEventListener("click", () => {
  if (currentPuzzleIndex < puzzles.length - 1) {
    loadPuzzle(currentPuzzleIndex + 1);
  }
});

// Load first puzzle on page load
window.onload = () => loadPuzzle(currentPuzzleIndex);
