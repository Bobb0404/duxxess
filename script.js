/* ==============================
   Duxxess Main JS
   ============================== */

/* --- Existing puzzle logic --- */
// Example placeholder — replace with your actual puzzle rendering logic
document.addEventListener("DOMContentLoaded", function() {
  loadPuzzle("DS0001B"); // Default puzzle
});

function loadPuzzle(puzzleId) {
  // Your existing logic to render grid & clues here
  console.log("Loading puzzle:", puzzleId);

  // Example: set grid size
  let gridSize = 3; // Default
  if (puzzleId.includes("R") || puzzleId.includes("I")) gridSize = 5;
  if (puzzleId.includes("E") || puzzleId.includes("M")) gridSize = 7;

  renderGrid(gridSize);
  sizeGrid(gridSize); // <-- Call sizing after rendering
}

function renderGrid(size) {
  const gridContainer = document.getElementById("grid-container");
  gridContainer.innerHTML = "";
  gridContainer.style.setProperty("--cols", size);
  gridContainer.style.setProperty("--rows", size);

  for (let r = 1; r <= size; r++) {
    for (let c = 1; c <= size; c++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");

      // Kamili milestone shading rules
      if (r % 2 === 0 && c % 2 === 0) {
        cell.classList.add("shaded");
      } else {
        cell.classList.add("editable");
      }

      gridContainer.appendChild(cell);
    }
  }
}

/* ==============================
   GRID SIZING LOGIC (Merged)
   ============================== */
function sizeGrid(size) {
  const PCT_FOR = {3: 0.40, 5: 0.50, 7: 0.60};
  const gridContainer = document.getElementById("grid-container");
  const pct = PCT_FOR[size] || 0.40;

  function applySizing() {
    const parent = document.getElementById("grid-wrapper") || document.body;
    const parentWidth = parent.clientWidth;
    const viewportHeight = window.innerHeight;
    const limit = Math.min(parentWidth, viewportHeight);
    const px = Math.max(80, Math.floor(limit * pct));
    gridContainer.style.width = px + "px";
    gridContainer.style.height = px + "px";
  }

  applySizing();
  window.addEventListener("resize", applySizing);
}

/* ==============================
   Puzzle Search & Loader
   ============================== */
document.getElementById("search-box").addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    loadPuzzle(this.value.trim());
  }
});

document.getElementById("load-puzzle-btn").addEventListener("click", function() {
  const id = document.getElementById("search-box").value.trim();
  loadPuzzle(id);
});
