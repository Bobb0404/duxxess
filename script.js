document.addEventListener("DOMContentLoaded", () => {
  const gridSize = 7;
  const gridContainer = document.getElementById("grid");

  function createGrid(size) {
    const table = document.createElement("table");
    table.classList.add("duxxess-grid");

    for (let row = 1; row <= size; row++) {
      const tr = document.createElement("tr");

      for (let col = 1; col <= size; col++) {
        const td = document.createElement("td");

        // Sacred shading rule:
        // Shaded (non-editable) only where both row and column are even-numbered
        const isEvenRow = row % 2 === 0;
        const isEvenCol = col % 2 === 0;

        if (isEvenRow && isEvenCol) {
          td.classList.add("shaded");
        } else {
          const input = document.createElement("input");
          input.setAttribute("maxlength", "1");
          input.setAttribute("type", "text");
          input.classList.add("cell-input");
          td.appendChild(input);
        }

        tr.appendChild(td);
      }

      table.appendChild(tr);
    }

    return table;
  }

  const grid = createGrid(gridSize);
  gridContainer.appendChild(grid);
});
