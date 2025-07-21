function createGrid(size) {
  const container = document.getElementById("gridContainer");
  container.innerHTML = "";
  container.style.gridTemplateColumns = `repeat(${size}, 50px)`;
  container.style.gridTemplateRows = `repeat(${size}, 50px)`;

  for (let row = 1; row <= size; row++) {
    for (let col = 1; col <= size; col++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");

      // Sacred shading logic:
      if (row % 2 === 0 && col % 2 === 0) {
        cell.classList.add("shaded");
        cell.textContent = ""; // No input
      } else {
        cell.classList.add("editable");
        cell.contentEditable = true;
      }

      container.appendChild(cell);
    }
  }
}
