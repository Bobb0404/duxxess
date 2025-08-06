function createGrid(size, clues = {}) {
  const container = document.getElementById("gridContainer");
  container.innerHTML = "";

  const table = document.createElement("table");
  for (let r = 1; r <= size; r++) {
    const row = document.createElement("tr");
    for (let c = 1; c <= size; c++) {
      const cell = document.createElement("td");

      const isShaded = r % 2 === 0 && c % 2 === 0;
      if (isShaded) {
        cell.classList.add("shaded");
      } else {
        const input = document.createElement("input");
        input.maxLength = 1;

        const key = `R${r}C${c}`;
        if (clues[key]) {
          input.value = clues[key];
          input.readOnly = true;
          input.classList.add("clue");
        }

        cell.appendChild(input);
      }

      row.appendChild(cell);
    }
    table.appendChild(row);
  }
  container.appendChild(table);
}

function loadPuzzle(id) {
  const puzzle = puzzles[id];
  if (!puzzle) {
    alert(`Puzzle ID "${id}" not found.`);
    return;
  }
  createGrid(puzzle.size, puzzle.clues);
}

function loadFromInput() {
  const input = document.getElementById("puzzleIdInput").value.trim().toUpperCase();
  loadPuzzle(input);
}

window.onload = () => {
  loadPuzzle("DS0001B");
};
