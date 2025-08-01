const puzzles = {
  DS0001B: {
    size: 3,
    grid: [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""]
    ]
  },
  DS0002B: {
    size: 3,
    grid: [
      ["B", "A", "D"],
      ["", "", ""],
      ["B", "Y", "E"]
    ]
  }
};

const puzzleSelect = document.getElementById("puzzle-select");
const gridContainer = document.getElementById("grid-container");

puzzleSelect.addEventListener("change", () => {
  const selectedId = puzzleSelect.value;
  if (selectedId && puzzles[selectedId]) {
    loadPuzzle(selectedId);
  }
});

function loadPuzzle(puzzleId) {
  const { size, grid } = puzzles[puzzleId];

  document.body.setAttribute("data-size", size.toString());
  gridContainer.innerHTML = "";
  gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

  for (let r = 0; r < size; r++) {
    for (let c = 0; c < size; c++) {
      const cellValue = grid[r][c];
      const isEditable = r % 2 === 0 && c % 2 === 0; // even-indexed positions = odd-numbered grid (1-based)
      const isShaded = r % 2 === 1 && c % 2 === 1; // shaded where both even-numbered (1-based)

      const cell = document.createElement(isEditable ? "input" : "div");
      cell.classList.add("grid-cell");

      if (isShaded) {
        cell.classList.add("shaded");
        cell.textContent = "";
      } else if (!isEditable) {
        cell.readOnly = true;
        cell.value = cellValue || "";
      }

      if (isEditable) {
        cell.type = "text";
        cell.maxLength = 1;
        if (cellValue) cell.value = cellValue;
      }

      gridContainer.appendChild(cell);
    }
  }
}
