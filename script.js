const puzzleId = "DS0001B";

const targetWords = ["BAD", "END", "BYE", "DAD"];

const gridData = [
  ["B", "A", "D"],
  ["", "", ""],
  ["E", "N", "D"]
];

function isEditable(row, col) {
  // Editable if row and col are both odd-numbered (1-based)
  return (row % 2 === 1) && (col % 2 === 1);
}

function renderGrid(grid) {
  const gridContainer = document.getElementById("grid");
  gridContainer.innerHTML = "";

  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      const cell = document.createElement("div");
      cell.classList.add("grid-cell");

      const isEvenRow = (row + 1) % 2 === 0;
      const isEvenCol = (col + 1) % 2 === 0;
      const shaded = isEvenRow && isEvenCol;

      if (shaded) {
        cell.classList.add("shaded");
        cell.textContent = "";
      } else {
        const val = grid[row][col];
        const input = document.createElement("input");
        input.maxLength = 1;

        if (val) {
          input.value = val;
          input.disabled = true;
        }

        cell.appendChild(input);
      }

      gridContainer.appendChild(cell);
    }
  }
}

window.addEventListener("DOMContentLoaded", () => {
  renderGrid(gridData);
});
