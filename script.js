function generateGrid(size = 7) {
  const grid = document.getElementById("grid");
  if (!grid) return;

  grid.innerHTML = "";
  grid.style.display = "grid";
  grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  grid.style.gap = "2px";

  for (let r = 1; r <= size; r++) {
    for (let c = 1; c <= size; c++) {
      const cell = document.createElement("input");
      cell.type = "text";
      cell.maxLength = 1;
      cell.classList.add("cell");

      if (r % 2 === 0 && c % 2 === 0) {
        cell.disabled = true;
        cell.classList.add("shaded");
      }

      grid.appendChild(cell);
    }
  }
}

const puzzles = {
  DS0001B: {
    id: "DS0001B",
    across: { 1: "CAT", 2: "TOP" },
    down: { 1: "CUT", 2: "TAP" }
  }
};

function loadPuzzle(id) {
  const puz = puzzles[id.toUpperCase()];
  const label = document.getElementById("puzzle-id");
  if (!puz) {
    alert("Puzzle not found.");
    return;
  }
  label.textContent = "Puzzle ID: " + puz.id;
}

window.onload = () => {
  generateGrid(7);
  loadPuzzle("DS0001B");
};

document.getElementById("load-btn").addEventListener("click", () => {
  const id = document.getElementById("search-box").value.trim();
  if (id) loadPuzzle(id);
});
