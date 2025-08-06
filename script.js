function createGrid(size) {
  const grid = document.getElementById("grid");
  grid.innerHTML = "";
  grid.style.gridTemplateColumns = `repeat(${size},1fr)`;
  grid.style.gridTemplateRows = `repeat(${size},1fr)`;

  for (let r = 1; r <= size; r++) {
    for (let c = 1; c <= size; c++) {
      const cell = document.createElement("input");
      cell.maxLength = 1;
      cell.dataset.r = r;
      cell.dataset.c = c;

      const evenR = r % 2 === 0;
      const evenC = c % 2 === 0;
      if (evenR && evenC) {
        cell.className = "shaded";
        cell.disabled = true;
      } else {
        cell.className = "editable";
      }

      grid.appendChild(cell);
    }
  }
}

function placeClues(puzzle) {
  const size = puzzle.size;
  const acrossRows = [1,3,5,7];
  const downCols = [1,3,5,7];

  puzzle.across.forEach((word,i) => {
    const row = acrossRows[i];
    if (!row || word.length > size) return;

    for (let j=0; j<word.length; j++) {
      const ch = word[j];
      if (ch === ch.toUpperCase()) {
        const sel = `input[data-r='${row}'][data-c='${j+1}']`;
        const cell = document.querySelector(sel);
        if (cell) cell.value = ch, cell.disabled = true;
      }
    }
  });

  puzzle.down.forEach((word,i) => {
    const col = downCols[i];
    if (!col || word.length > size) return;

    for (let j=0; j<word.length; j++) {
      const ch = word[j];
      if (ch === ch.toUpperCase()) {
        const sel = `input[data-r='${j+1}'][data-c='${col}']`;
        const cell = document.querySelector(sel);
        if (cell) cell.value = ch, cell.disabled = true;
      }
    }
  });
}

function loadPuzzle() {
  const id = document.getElementById("puzzleIdInput").value.trim().toUpperCase() || "DS0001B";
  const p = puzzles[id];
  if (!p) {
    alert("Puzzle not found: " + id);
    return;
  }
  createGrid(p.size);
  placeClues(p);
}

window.onload = loadPuzzle;
