// === Duxxess Sacred Script ===
// Preserves grid shading logic and adds Game ID search functionality

const GRID_SIZES = {
  3: "Beginner",
  5: "Rookie/Intermediate",
  7: "Elite/Master",
};

const puzzleLog = {
  "B-001": {
    size: 3,
    title: "CAT Puzzle",
    words: ["CAT", "TOP", "CUT", "TAP"],
    grid: [
      ["C", "A", "T"],
      ["U", "", "O"],
      ["T", "A", "P"],
    ],
  },
  "R-001": {
    size: 5,
    title: "BIRDS & STARS",
    words: ["BRISK", "IRATE", "RADIO", "STING", "KITES"],
    grid: [
      ["B", "R", "I", "S", "K"],
      ["", "", "", "", ""],
      ["R", "A", "D", "I", "O"],
      ["", "", "", "", ""],
      ["S", "T", "I", "N", "G"],
    ],
  },
  "E-001": {
    size: 7,
    title: "GARLAND MASTER",
    words: [
      "GARLAND",
      "ORBITED",
      "MACAQUE",
      "DANGERS",
      "GROOMED",
      "RUBICON",
      "ANTIQUE",
      "DODGERS",
    ],
    grid: [
      ["G", "A", "R", "L", "A", "N", "D"],
      ["", "", "", "", "", "", ""],
      ["O", "R", "B", "I", "T", "E", "D"],
      ["", "", "", "", "", "", ""],
      ["M", "A", "C", "A", "Q", "U", "E"],
      ["", "", "", "", "", "", ""],
      ["D", "A", "N", "G", "E", "R", "S"],
    ],
  },
};

function createGrid(size) {
  const container = document.getElementById("grid");
  container.innerHTML = "";
  for (let row = 0; row < size; row++) {
    const rowDiv = document.createElement("div");
    rowDiv.className = "row";
    for (let col = 0; col < size; col++) {
      const cell = document.createElement("input");
      cell.maxLength = 1;
      cell.className = "cell";

      // Sacred Shading Rule: Shade when BOTH row and col are even-numbered (1-based)
      if ((row + 1) % 2 === 0 && (col + 1) % 2 === 0) {
        cell.disabled = true;
        cell.classList.add("shaded");
      }
      rowDiv.appendChild(cell);
    }
    container.appendChild(rowDiv);
  }
}

function loadPuzzleById(gameId) {
  const puzzle = puzzleLog[gameId.toUpperCase()];
  const status = document.getElementById("status");
  if (!puzzle) {
    status.textContent = "❌ Puzzle not found.";
    createGrid(3); // fallback default
    return;
  }

  status.textContent = `✅ Loaded "${puzzle.title}" (${gameId}) — ${GRID_SIZES[puzzle.size]}`;
  createGrid(puzzle.size);

  const container = document.getElementById("grid");
  puzzle.grid.forEach((rowArr, rowIdx) => {
    rowArr.forEach((letter, colIdx) => {
      const row = container.children[rowIdx];
      const cell = row.children[colIdx];
      if (letter !== "") {
        cell.value = letter.toUpperCase();
        cell.disabled = true;
        cell.classList.add("prefilled");
      }
    });
  });
}

// Wire up the search box
document.getElementById("gameIdForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const id = document.getElementById("gameIdInput").value.trim();
  if (id) {
    loadPuzzleById(id);
  }
});

// Load default puzzle
loadPuzzleById("B-001");
