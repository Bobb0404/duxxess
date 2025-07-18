let currentPuzzleIndex = 0;

function isEditableCell(row, col) {
  return row % 2 === 0 || col % 2 === 0;
}

function isShadedCell(row, col) {
  return row % 2 === 1 && col % 2 === 1;
}

function renderPuzzle(index) {
  const puzzle = puzzles[index];
  const container = document.getElementById("grid-container");
  container.innerHTML = "";
  document.getElementById("puzzle-id").textContent = puzzle.id;

  for (let row = 0; row < 7; row++) {
    for (let col = 0; col < 7; col++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");

      if (isShadedCell(row, col)) {
        cell.classList.add("shaded");
      } else {
        cell.classList.add("editable");
        const letter =
          row % 2 === 0
            ? puzzle.across[row / 2][col]
            : puzzle.down[col / 2][row];
        cell.textContent = letter;
      }

      container.appendChild(cell);
    }
  }
}

document.getElementById("prev").addEventListener("click", () => {
  if (currentPuzzleIndex > 0) {
    currentPuzzleIndex--;
    renderPuzzle(currentPuzzleIndex);
  }
});

document.getElementById("next").addEventListener("click", () => {
  if (currentPuzzleIndex < puzzles.length - 1) {
    currentPuzzleIndex++;
    renderPuzzle(currentPuzzleIndex);
  }
});

window.onload = () => renderPuzzle(currentPuzzleIndex);
