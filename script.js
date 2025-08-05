let puzzles = {};

async function loadPuzzles() {
  const response = await fetch('puzzles.json');
  puzzles = await response.json();
  loadPuzzle("DS0001B");
}

function isEven(n) {
  return n % 2 === 0;
}

function renderGrid(gridData) {
  const gridContainer = document.getElementById("grid");
  gridContainer.innerHTML = "";

  const size = gridData.gridSize;
  gridContainer.style.gridTemplateColumns = `repeat(${size}, 40px)`;

  for (let row = 0; row < size; row++) {
    for (let col = 0; col < size; col++) {
      const cell = document.createElement("input");
      cell.classList.add("cell");

      // Kamili rule: shaded if both row and col are even-numbered (1-based)
      if (isEven(row + 1) && isEven(col + 1)) {
        cell.classList.add("shaded");
        cell.disabled = true;
      }

      const letter = gridData.grid?.[row]?.[col] || "";
      if (letter) {
        cell.value = letter;
        cell.disabled = true;
      }

      gridContainer.appendChild(cell);
    }
  }
}

function loadPuzzle(id) {
  const puzzle = puzzles[id];
  if (puzzle) {
    renderGrid(puzzle);
  } else {
    alert("Puzzle ID not found!");
  }
}

function loadPuzzleFromInput() {
  const input = document.getElementById("puzzleIdInput").value.trim().toUpperCase();
  loadPuzzle(input);
}

window.onload = loadPuzzles;
