document.addEventListener("DOMContentLoaded", () => {
  const gridContainer = document.getElementById("grid");
  const gridSize = 7; // Must be 3, 5, or 7 — the grid stays perfectly square

  function createGrid(size) {
    gridContainer.innerHTML = "";
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let row = 1; row <= size; row++) {
      for (let col = 1; col <= size; col++) {
        const cell = document.createElement("input");
        cell.type = "text";
        cell.maxLength = 1;
        cell.classList.add("cell");

        // Sacred shading: only shade if both row and col are even
        if (row % 2 === 0 && col % 2 === 0) {
          cell.classList.add("shaded");
          cell.readOnly = true;
        }

        gridContainer.appendChild(cell);
      }
    }
  }

  createGrid(gridSize);
});
