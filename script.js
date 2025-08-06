function loadPuzzle() {
  const input = document.getElementById("puzzleIdInput").value.trim().toUpperCase();
  const puzzle = puzzles[input];
  if (!puzzle) {
    alert("Puzzle not found.");
    return;
  }

  const size = puzzle.size;
  const gridContainer = document.getElementById("grid");
  gridContainer.innerHTML = "";
  gridContainer.style.gridTemplateColumns = `repeat(${size}, 40px)`;
  gridContainer.style.gridTemplateRows = `repeat(${size}, 40px)`;
  gridContainer.className = "grid";

  const cells = [];

  for (let row = 0; row < size; row++) {
    cells[row] = [];
    for (let col = 0; col < size; col++) {
      const cell = document.createElement("input");
      cell.setAttribute("maxlength", "1");

      const isEditable = row % 2 === 0 || col % 2 === 0;
      const isShaded = row % 2 === 1 && col % 2 === 1;

      if (isShaded) {
        cell.disabled = true;
        cell.className = "shaded";
      } else {
        cell.className = "editable";
      }

      cell.dataset.row = row;
      cell.dataset.col = col;
      gridContainer.appendChild(cell);
      cells[row][col] = cell;
    }
  }

  // Place clues (both across and down)
  ['across', 'down'].forEach(direction => {
    puzzle.clues[direction].forEach(([row, col, letter]) => {
      const cell = cells[row][col];
      if (cell && !cell.disabled) {
        cell.value = letter;
        cell.disabled = true;
        cell.classList.add("clue");
      }
    });
  });
}
