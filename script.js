const puzzles = {
  DS0001B: {
    id: "DS0001B",
    size: 3,
    across: ["BAD", "END"],
    down: ["BYE", "DAD"]
  },
  DS0002R: {
    id: "DS0002R",
    size: 5,
    across: ["TREND", "ROAST", "EXCEL"],
    down: ["THREE", "RAISE", "NEEDS"]
  },
  DS0003E: {
    id: "DS0003E",
    size: 7,
    across: ["PROJECT", "RUNWAY", "EXPERT", "TACTILE"],
    down: ["PRINTER", "ROCKET", "OUTPUT", "JEWELRY"]
  }
};

const defaultPuzzleId = "DS0001B";

document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("puzzle-id-input");
  const button = document.getElementById("load-puzzle");

  button.addEventListener("click", () => {
    const puzzleId = input.value.trim().toUpperCase();
    loadPuzzle(puzzleId);
  });

  loadPuzzle(defaultPuzzleId); // Auto-load DS0001B
});

function loadPuzzle(puzzleId) {
  const puzzle = puzzles[puzzleId];
  if (!puzzle) {
    alert("Puzzle ID not found.");
    return;
  }
  renderGrid(puzzle);
}

function renderGrid(puzzle) {
  const { size, across, down } = puzzle;
  const gridElement = document.getElementById("grid");
  gridElement.innerHTML = "";
  gridElement.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

  // Apply grid size class
  gridElement.classList.remove("grid-3x3", "grid-5x5", "grid-7x7");
  if (size === 3) gridElement.classList.add("grid-3x3");
  else if (size === 5) gridElement.classList.add("grid-5x5");
  else if (size === 7) gridElement.classList.add("grid-7x7");

  const cells = [];

  for (let row = 0; row < size; row++) {
    for (let col = 0; col < size; col++) {
      const cell = document.createElement("input");
      cell.type = "text";
      cell.maxLength = 1;
      cell.classList.add("grid-cell");

      // Kamili Shading Rule: shaded only if both row & col are even (1-based)
      if ((row + 1) % 2 === 0 && (col + 1) % 2 === 0) {
        cell.classList.add("shaded");
        cell.disabled = true;
      }

      cells.push(cell);
      gridElement.appendChild(cell);
    }
  }

  // Prefill Across Clues
  const acrossRows = [0, 2, 4, 6];
  across.forEach((word, i) => {
    const row = acrossRows[i];
    if (row >= size) return;
    for (let col = 0; col < Math.min(word.length, size); col++) {
      const index = row * size + col;
      const char = word[col];
      if (char === char.toUpperCase()) {
        const cell = cells[index];
        cell.value = char;
        cell.classList.add("prefilled");
        cell.disabled = true;
      }
    }
  });

  // Prefill Down Clues
  const downCols = [0, 2, 4, 6];
  down.forEach((word, i) => {
    const col = downCols[i];
    if (col >= size) return;
    for (let row = 0; row < Math.min(word.length, size); row++) {
      const index = row * size + col;
      const char = word[row];
      if (char === char.toUpperCase()) {
        const cell = cells[index];
        cell.value = char;
        cell.classList.add("prefilled");
        cell.disabled = true;
      }
    }
  });
}
