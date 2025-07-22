function generateGrid(size = 7) {
  const grid = document.getElementById("grid");
  if (!grid) return;

  grid.innerHTML = "";
  grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

  for (let r = 1; r <= size; r++) {
    for (let c = 1; c <= size; c++) {
      const cell = document.createElement("input");
      cell.type = "text";
      cell.maxLength = 1;
      cell.classList.add("cell");

      // Sacred shading rule
      if (r % 2 === 0 && c % 2 === 0) {
        cell.disabled = true;
        cell.classList.add("shaded");
      }

      grid.appendChild(cell);
    }
  }
}

function loadPuzzle(id) { /* ... your existing load logic ... */ }

window.onload = () => {
  generateGrid(7);
  loadPuzzle("DS0001B");
};
