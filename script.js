const grid = document.getElementById("grid-container");

// Create a 7x7 grid following the locked shading rule:
// Editable cells on all odd-numbered rows and columns
// Shaded only where BOTH row and column are even-numbered
for (let row = 1; row <= 7; row++) {
  for (let col = 1; col <= 7; col++) {
    const cell = document.createElement("input");
    cell.classList.add("cell");

    // Rule: shaded if both row and column are even
    if (row % 2 === 0 && col % 2 === 0) {
      cell.classList.add("shaded");
      cell.setAttribute("disabled", true);
    }

    grid.appendChild(cell);
  }
}
