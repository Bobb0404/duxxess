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

      // Kamili milestone grid shading rules:
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

// ✅ Puzzle database (expand this)
const puzzles = {
  DS0001B: {
    size: 3,
    clues: {
      "R1C1": "C", "R1C3": "A",
      "R3C1": "T", "R3C3": "S"
    }
  },
  DS0002R: {
    size: 5,
    clues: {
      "R1C1": "H", "R1C3": "O", "R1C5": "T",
      "R3C1": "E", "R3C3": "L", "R3C5": "S",
      "R5C1": "B", "R5C3": "E", "R5C5": "D"
    }
  },
  DS0003R: {
    size: 5,
    clues: {
      "R1C1": "W", "R1C3": "A", "R1C5": "T",
      "R3C1": "A", "R3C3": "R", "R3C5": "E",
      "R5C1": "B", "R5C3": "O", "R5C5": "X"
    }
  },
  DS0001M: {
    size: 7,
    clues: {
      "R1C1": "S", "R1C3": "T", "R1C5": "O", "R1C7": "P",
      "R3C1": "W", "R3C3": "A", "R3C5": "R", "R3C7": "S",
      "R5C1": "G", "R5C3": "A", "R5C5": "M", "R5C7": "E",
      "R7C1": "F", "R7C3": "U", "R7C5": "N", "R7C7": "D"
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

// ✅ Load default puzzle or wait for user input
window.onload = () => {
  loadPuzzle("DS0001B"); // Default Beginner Puzzle
};

// ✅ If you have a puzzle search bar with button
document.getElementById("loadBtn")?.addEventListener("click", () => {
  const puzzleId = document.getElementById("puzzleIdInput")?.value.trim();
  if (puzzleId) {
    loadPuzzle(puzzleId.toUpperCase());
  }
});
