let puzzles = {};

async function loadPuzzle() {
  const puzzleId = document.getElementById('puzzleIdInput').value.trim().toUpperCase();
  if (!puzzleId || !puzzles[puzzleId]) {
    alert("Puzzle ID not found");
    return;
  }

  const puzzle = puzzles[puzzleId];
  const gridElement = document.getElementById("grid");
  const size = puzzle.size;
  const clues = puzzle.clues || {};
  gridElement.innerHTML = "";
  gridElement.dataset.size = size;

  for (let row = 0; row < size; row++) {
    for (let col = 0; col < size; col++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");

      // Kamili rule: shade only when both row and col are even (1-based)
      const isEvenRow = (row + 1) % 2 === 0;
      const isEvenCol = (col + 1) % 2 === 0;
      const key = `${row},${col}`;
      const hasClue = clues.hasOwnProperty(key);

      if (isEvenRow && isEvenCol && !hasClue) {
        cell.classList.add("shaded");
      }

      const input = document.createElement("input");
      input.maxLength = 1;

      if (hasClue) {
        input.value = clues[key].toUpperCase();
      }

      cell.appendChild(input);
      gridElement.appendChild(cell);
    }
  }
}

async function fetchPuzzles() {
  const res = await fetch('puzzles.json');
  puzzles = await res.json();

  // Auto-load default puzzle if exists
  if (puzzles['DS0001B']) {
    document.getElementById("puzzleIdInput").value = "DS0001B";
    loadPuzzle();
  }
}

fetchPuzzles();
