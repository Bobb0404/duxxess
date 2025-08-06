function createGrid(gridSize, clues = {}) {
  const gridContainer = document.getElementById("grid");
  gridContainer.innerHTML = "";

  for (let row = 1; row <= gridSize; row++) {
    const rowDiv = document.createElement("div");
    rowDiv.className = "grid-row";

    for (let col = 1; col <= gridSize; col++) {
      const cell = document.createElement("input");
      const cellId = `R${row}C${col}`;
      const clueLetter = clues[cellId] || "";

      cell.maxLength = 1;

      const isEvenRow = row % 2 === 0;
      const isEvenCol = col % 2 === 0;
      const isShaded = isEvenRow && isEvenCol;

      if (isShaded) {
        cell.disabled = true;
        cell.className = "cell shaded";
      } else {
        cell.className = "cell editable";
        if (clueLetter) {
          cell.value = clueLetter;
          cell.disabled = true;
        }
      }

      rowDiv.appendChild(cell);
    }

    gridContainer.appendChild(rowDiv);
  }
}

function loadPuzzle(puzzleId) {
  const puzzle = puzzles[puzzleId];
  if (!puzzle) {
    alert("Puzzle not found.");
    return;
  }
  createGrid(puzzle.size, puzzle.clues);
}

document.getElementById("puzzleSelect").addEventListener("change", (e) => {
  const selectedId = e.target.value;
  if (selectedId) {
    loadPuzzle(selectedId);
  }
});

window.onload = () => {
  // Load first puzzle as default if needed
  // loadPuzzle("DS0001B");
};
