document.addEventListener("DOMContentLoaded", () => {
  const puzzles = {
    "DS0001B": {
      size: 7,
      solution: {
        across: ["GARLAND", "ORBITED", "MACAQUE", "DANGERS"],
        down: ["GROOMED", "RUBICON", "ANTIQUE", "DODGERS"]
      }
    }
  };

  const puzzleSelector = document.getElementById("puzzleSelector");
  const gridContainer = document.getElementById("gridContainer");

  function buildGrid(puzzleId) {
    gridContainer.innerHTML = "";

    const puzzle = puzzles[puzzleId];
    if (!puzzle) return;

    const size = puzzle.size;

    // Apply fixed size for rows and columns (square grid)
    gridContainer.style.display = "grid";
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

  puzzleSelector.addEventListener("change", (e) => {
    buildGrid(e.target.value);
  });

  // Initial puzzle load
  buildGrid(puzzleSelector.value);
});
