const puzzles = {
  DS0001B: {
    id: "DS0001B",
    across: {
      1: "GRIMACE",
      2: "UNMASKS"
    },
    down: {
      1: "GOURMET"
    }
  },
  DS0002I: {
    id: "DS0002I",
    across: {
      1: "GARLAND",
      2: "ORBITED",
      3: "MACAQUE",
      4: "DANGERS"
    },
    down: {
      1: "GROOMED",
      2: "RUBICON",
      3: "ANTIQUE",
      4: "DODGERS"
    }
  }
};

function createGrid(size) {
  const gridContainer = document.getElementById("grid");
  gridContainer.innerHTML = "";
  gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

  for (let row = 1; row <= size; row++) {
    for (let col = 1; col <= size; col++) {
      const cell = document.createElement("input");
      cell.maxLength = 1;
      cell.classList.add("cell");

      // Sacred shading rule: only shade if both row and column are even
      if (row % 2 === 0 && col % 2 === 0) {
        cell.classList.add("shaded");
        cell.disabled = true;
      }

      cell.id = `cell-${row}-${col}`;
      gridContainer.appendChild(cell);
    }
  }
}

function loadPuzzle(puzzleId) {
  const puzzle = puzzles[puzzleId.toUpperCase()];
  const puzzleTitle = document.getElementById("puzzle-id");
  if (!puzzle) {
    alert("Puzzle ID not found.");
    puzzleTitle.textContent = "";
    return;
  }

  puzzleTitle.textContent = `Puzzle ID: ${puzzle.id}`;

  // Clear grid
  const inputs = document.querySelectorAll("#grid input.cell");
  inputs.forEach((input) => {
    if (!input.classList.contains("shaded")) input.value = "";
  });

  // Fill across words
  let rowIndex = 1;
  for (const key in puzzle.across) {
    const word = puzzle.across[key];
    for (let i = 0; i < word.length; i++) {
      const cell = document.getElementById(`cell-${rowIndex}-${i + 1}`);
      if (cell && !cell.classList.contains("shaded")) {
        cell.value = word[i].toUpperCase();
      }
    }
    rowIndex += 2;
  }

  // Fill down words
  let colIndex = 1;
  for (const key in puzzle.down) {
    const word = puzzle.down[key];
    for (let i = 0; i < word.length; i++) {
      const cell = document.getElementById(`cell-${i + 1}-${colIndex}`);
      if (cell && !cell.classList.contains("shaded")) {
        cell.value = word[i].toUpperCase();
      }
    }
    colIndex += 2;
  }
}

// Event listener for Load button
document.getElementById("load-btn").addEventListener("click", () => {
  const puzzleId = document.getElementById("search-input").value.trim();
  loadPuzzle(puzzleId);
});
// Initialize default grid (7x7)
createGrid(7);
window.onload = () => {
  createGrid(7);          // Prepare blank 7x7 grid
  loadPuzzle("DS0001B");  // Automatically load first puzzle
};
generateGrid(); // This must run on page load
