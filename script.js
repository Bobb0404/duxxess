function createGrid(puzzle) {
  const gridElement = document.getElementById("grid");
  gridElement.innerHTML = "";

  const size = puzzle.size;
  gridElement.style.gridTemplateColumns = `repeat(${size}, 40px)`;

  for (let row = 0; row < size; row++) {
    for (let col = 0; col < size; col++) {
      const cell = document.createElement("input");
      cell.className = "cell";

      // Shaded rule: both row and column are even (human-style)
      const isShaded = (row % 2 === 1 && col % 2 === 1);
      if (isShaded) {
        cell.disabled = true;
        cell.value = "";
      } else {
        const letter = puzzle.grid[row][col];
        cell.value = letter || "";
        cell.disabled = false;
        cell.maxLength = 1;
      }

      gridElement.appendChild(cell);
    }
  }

  document.getElementById("currentPuzzleId").textContent = `Puzzle ID: ${puzzle.id}`;
}

function loadPuzzleById() {
  const input = document.getElementById("puzzleIdInput").value.trim().toUpperCase();
  const puzzle = puzzles.find(p => p.id === input);

  if (puzzle) {
    createGrid(puzzle);
  } else {
    alert("Puzzle not found!");
  }
}

// Load first puzzle by default
window.onload = () => {
  if (puzzles.length > 0) {
    createGrid(puzzles[0]);
  }
};
