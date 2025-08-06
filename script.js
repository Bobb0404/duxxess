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
        }
      }

      rowDiv.appendChild(cell);
    }

    gridContainer.appendChild(rowDiv);
  }
}

// Example puzzle
const puzzles = {
  DS0003R: {
    size: 5,
    clues: {
      "R1C1": "W", "R1C3": "A", "R1C5": "T",
      "R3C1": "A", "R3C3": "R", "R3C5": "E",
      "R5C1": "B", "R5C3": "O", "R5C5": "X"
    }
  }
};

function loadPuzzle(puzzleId) {
  const puzzle = puzzles[puzzleId];
  if (!puzzle) {
    alert("Puzzle not found");
    return;
  }

  createGrid(puzzle.size, puzzle.clues);
}

window.onload = () => {
  loadPuzzle("DS0003R");
};
