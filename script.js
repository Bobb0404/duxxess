const gridElement = document.getElementById("grid");

// 7x7 grid
const SIZE = 7;

// Function to determine cell type
function getCellType(row, col) {
  if (row % 2 === 1 && col % 2 === 1) return "editable";
  if (row % 2 === 0 && col % 2 === 0) return "shaded";
  return "clue";
}

// Render grid
function renderGrid() {
  for (let row = 0; row < SIZE; row++) {
    for (let col = 0; col < SIZE; col++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");

      const type = getCellType(row, col);
      cell.classList.add(type);

      if (type === "editable") {
        const input = document.createElement("input");
        input.maxLength = 1;
        cell.appendChild(input);
      } else {
        cell.textContent = "";
      }

      gridElement.appendChild(cell);
    }
  }
}

renderGrid();
