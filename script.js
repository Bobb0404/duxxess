function loadPuzzle(puzzleId) {
  const puzzle = puzzles[puzzleId.toUpperCase()];
  const grid = document.getElementById("grid-container");
  const label = document.getElementById("puzzle-id-label");

  if (!puzzle) {
    alert("Puzzle not found. Please check the ID.");
    return;
  }

  grid.innerHTML = "";
  grid.style.gridTemplateColumns = `repeat(${puzzle.size}, 40px)`;

  label.textContent = `Puzzle ID: ${puzzle.id}`;

  for (let r = 0; r < puzzle.size; r++) {
    for (let c = 0; c < puzzle.size; c++) {
      const cell = document.createElement("input");
      cell.classList.add("cell");

      // Sacred shading logic: Only even-even cells are shaded
      if ((r + 1) % 2 === 0 && (c + 1) % 2 === 0) {
        cell.classList.add("shaded");
        cell.disabled = true;
      } else {
        cell.classList.add("editable");
        cell.maxLength = 1;
      }

      grid.appendChild(cell);
    }
  }
}

function handleLoad() {
  const input = document.getElementById("puzzle-id-input");
  loadPuzzle(input.value.trim());
}

window.onload = () => loadPuzzle("DS0001B");
