const gridSize = 7;
const grid = document.getElementById("grid");

// Sacred rule: Shaded only when both row & column are even-numbered (1-based)
for (let row = 1; row <= gridSize; row++) {
  for (let col = 1; col <= gridSize; col++) {
    const cell = document.createElement("input");
    cell.type = "text";
    cell.maxLength = 1;
    cell.classList.add("cell");

    if (row % 2 === 0 && col % 2 === 0) {
      cell.classList.add("shaded");
      cell.disabled = true;
    }

    grid.appendChild(cell);
  }
}
