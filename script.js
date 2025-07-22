document.addEventListener("DOMContentLoaded", () => {
  const gridSize = 7;
  const table = document.createElement("table");
  table.classList.add("duxxess-grid");

  for (let row = 1; row <= gridSize; row++) {
    const tr = document.createElement("tr");

    for (let col = 1; col <= gridSize; col++) {
      const td = document.createElement("td");

      const isEvenRow = row % 2 === 0;
      const isEvenCol = col % 2 === 0;

      if (isEvenRow && isEvenCol) {
        // Royal blue, non-editable
        td.classList.add("blue-cell");
        td.textContent = ""; // Optional placeholder
      } else {
        // Light yellow, editable
        const input = document.createElement("input");
        input.type = "text";
        input.maxLength = 1;
        input.classList.add("yellow-input");
        input.addEventListener("input", (e) => {
          e.target.value = e.target.value.toUpperCase().replace(/[^A-Z]/g, '');
        });
        td.appendChild(input);
      }

      tr.appendChild(td);
    }

    table.appendChild(tr);
  }

  const container = document.getElementById("grid-container");
  container.innerHTML = "";
  container.appendChild(table);
});
