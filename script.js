document.addEventListener("DOMContentLoaded", () => {
  const gridContainer = document.getElementById("grid");
  const gridSizeSelector = document.getElementById("grid-size");

  function createGrid(size) {
    gridContainer.innerHTML = "";
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let row = 1; row <= size; row++) {
      for (let col = 1; col <= size; col++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");

        // Sacred Duxxess shading logic:
        // Editable if row OR column is odd
        // Shaded (non-editable) only if both row AND col are even
        if (row % 2 === 0 && col % 2 === 0) {
          cell.classList.add("shaded");
        } else {
          const input = document.createElement("input");
          input.setAttribute("maxlength", "1");
          input.setAttribute("autocomplete", "off");
          input.classList.add("cell-input");
          cell.appendChild(input);
        }

        gridContainer.appendChild(cell);
      }
    }
  }

  // Initial grid on page load
  createGrid(parseInt(gridSizeSelector.value));

  // Change grid when new size selected
  gridSizeSelector.addEventListener("change", () => {
    const newSize = parseInt(gridSizeSelector.value);
    createGrid(newSize);
  });
});
