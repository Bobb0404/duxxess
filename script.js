const puzzles = {
  "DS0001B": {
    size: 7,
    solution: {
      across: ["GARLAND", "ORBITED", "MACAQUE", "DANGERS"],
      down: ["GROOMED", "RUBICON", "ANTIQUE", "DODGERS"]
    }
  }
};

function buildGrid(puzzleId) {
  const gridContainer = document.getElementById("gridContainer");
  gridContainer.innerHTML = "";

  const puzzle = puzzles[puzzleId];
  if (!puzzle) return;

  const size = puzzle.size;

  // Set both rows and columns to 40px each (ensures square grid)
  gridContainer.style.gridTemplateColumns = `repeat(${size}, 40px)`;
  gridContainer.style.gridTemplateRows = `repeat(${size}, 40px)`;

  for (let row = 0; row < size; row++) {
    for (let col = 0; col < size; col++) {
      const cell = document.createElement("input");
      cell.maxLength = 1;
      cell.classList.add("grid-cell");

      const isEvenRow = (row + 1) % 2 === 0;
      const isEvenCol = (col + 1) % 2 === 0;

      if (isEvenRow && isEvenCol) {
        cell.classList.add("shaded");
        cell.disabled = true;
      } else {
        cell.classList.add("editable");
      }

      gridContainer.appendChild(cell);
    }
  }
}

// Rebuild grid on puzzle selection change
document.getElementById("puzzleSelector").addEventListener("change", (e) => {
  buildGrid(e.target.value);
});

// Load the default puzzle on page load
buildGrid("DS0001B");
