// Puzzle data store
const puzzleData = {
  "DS0001B": {
    gridSize: 3,
    words: {
      across: ["CAT", "TOP"],
      down: ["CUT", "TAP"]
    }
  },
  "DS0002R": {
    gridSize: 5,
    words: {
      across: ["FAITH", "ENACT", "ALONE", "STEEL", "TENOR"],
      down: ["FEAST", "ANENT", "ICONS", "THREE", "HALON"]
    }
  },
  "DS0003M": {
    gridSize: 7,
    words: {
      across: ["GARLAND", "ORBITED", "MACAQUE", "DANGERS", "EXAMPLE", "RECEIVE", "YAWNING"],
      down: ["GROOMED", "RUBICON", "ANTIQUE", "DODGERS", "LAMINAR", "ENVYING", "DESERVE"]
    }
  }
};

// Utility to create shaded or editable cells
function createCell(row, col, gridSize) {
  const isShaded = row % 2 === 0 && col % 2 === 0; // Even row and even col (1-based)
  const cell = document.createElement("div");
  cell.classList.add("cell");

  if (isShaded) {
    cell.classList.add("shaded");
    cell.textContent = "";
  } else {
    const input = document.createElement("input");
    input.type = "text";
    input.maxLength = 1;
    input.classList.add("grid-input");
    cell.appendChild(input);
  }

  return cell;
}

// Render the grid
function renderGrid(gridSize, words, puzzleId) {
  const gridContainer = document.getElementById("grid-container");
  gridContainer.innerHTML = ""; // Clear previous content

  const grid = document.createElement("div");
  grid.classList.add("grid");
  grid.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
  grid.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;

  for (let row = 1; row <= gridSize; row++) {
    for (let col = 1; col <= gridSize; col++) {
      const cell = createCell(row, col, gridSize);
      grid.appendChild(cell);
    }
  }

  gridContainer.appendChild(grid);

  // Set title
  const title = document.getElementById("puzzle-title");
  if (title) {
    title.textContent = `Puzzle: ${puzzleId}`;
  }
}

// Load puzzle by ID
function loadPuzzleById(id) {
  const puzzle = puzzleData[id.toUpperCase()];
  if (!puzzle) {
    alert("Puzzle ID not found.");
    return;
  }

  renderGrid(puzzle.gridSize, puzzle.words, id.toUpperCase());
}

// Attach event listener to Load button
document.getElementById("load-btn").addEventListener("click", () => {
  const idInput = document.getElementById("puzzle-id-input");
  const puzzleId = idInput.value.trim();
  if (puzzleId) {
    loadPuzzleById(puzzleId);
  }
});

// Load a default puzzle when page loads
window.addEventListener("DOMContentLoaded", () => {
  loadPuzzleById("DS0001B");
});
