document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("grid");
  const size = 7;

  for (let row = 1; row <= size; row++) {
    for (let col = 1; col <= size; col++) {
      const cell = document.createElement("input");
      cell.maxLength = 1;
      cell.classList.add("cell");

      // Shade only if both row and col are even (human count: 2,4,6)
      if (row % 2 === 0 && col % 2 === 0) {
        cell.classList.add("shaded");
        cell.disabled = true;
      }

      grid.appendChild(cell);
    }
  }
});
