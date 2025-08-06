function createGrid(gridSize, clues = {}) {
  const gridContainer = document.getElementById("grid");
  gridContainer.innerHTML = ""; // Clear previous grid

  for (let row = 1; row <= gridSize; row++) {
    const rowDiv = document.createElement("div");
    rowDiv.className = "grid-row";

    for (let col = 1; col <= gridSize; col++) {
      const cell = document.createElement("input");
      const cellId = `R${row}C${col}`;
      const clueLetter = clues[cellId] || "";
      const isEvenRow = row % 2 === 0;
      const isEvenCol = col % 2 === 0;

      cell.maxLength = 1;

      if (isEvenRow && isEvenCol) {
        // Kamili shading: shaded if both row and column are even
        cell.disabled = true;
        cell.className = "cell shaded";
      } else {
        cell.className = "cell editable";
        if (clueLetter) cell.value = clueLetter;
      }

      rowDiv.appendChild(cell);
    }

    gridContainer.appendChild(rowDiv);
  }
}
