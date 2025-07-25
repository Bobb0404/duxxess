document.addEventListener("DOMContentLoaded", () => {
  const gridContainer = document.getElementById("gridContainer");

  const gridSize = 7;

  // Set grid structure
  gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 40px)`;
  gridContainer.style.gridTemplateRows = `repeat(${gridSize}, 40px)`;

  for (let row = 1; row <= gridSize; row++) {
    for (let col = 1; col <= gridSize; col++) {
      const cell = document.createElement("input");
      cell.classList.add("grid-cell");

      if (row % 2 === 0 && col % 2 === 0) {
        cell.classList.add("shaded");
        cell.disabled = true;
      } else {
        cell.classList.add("editable");
        cell.maxLength = 1;
      }

      gridContainer.appendChild(cell);
    }
  }
});
