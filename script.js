const puzzles = {
  DS0001B: {
    size: 3,
    grid: [
      ["B", "A", "D"],
      ["", "", ""],
      ["E", "N", "D"]
    ],
    clues: ["BAD", "END", "BYE", "DAD"]
  },
  DS0002B: {
    size: 3,
    grid: [
      ["B", "Y", "E"],
      ["", "", ""],
      ["D", "A", "D"]
    ],
    clues: ["BYE", "DAD", "BED", "YAD"]
  }
};

const gridElement = document.getElementById("grid");
const container = document.getElementById("grid-container");
const dropdown = document.getElementById("puzzleDropdown");

function isEditable(row, col) {
  // Kamili rule: editable if either row or col is odd (1-based)
  return (row % 2 !== 0 || col % 2 !== 0);
}

function createGrid(puzzle) {
  const { grid, size } = puzzle;

  // Clear old grid
  gridElement.innerHTML = "";
  container.className = `grid-${size}x${size}`;

  for (let row = 0; row < size; row++) {
    for (let col = 0; col < size; col++) {
      const cell = document.createElement("input");
      cell.classList.add("cell");

      if (!isEditable(row + 1, col + 1)) {
        cell.disabled = true;
      }

      const val = grid[row][col];
      if (val) cell.value = val;

      gridElement.appendChild(cell);
    }
  }
}

// Load selected puzzle
dropdown.addEventListener("change", () => {
  const selected = dropdown.value;
  const puzzle = puzzles[selected];
  if (puzzle) createGrid(puzzle);
});

// Initial load
createGrid(puzzles["DS0001B"]);
