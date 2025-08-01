const puzzles = {
  DS0001B: {
    size: 3,
    clues: {
      "0,0": "B", "0,1": "A", "0,2": "D",
      "1,0": "Y", "2,0": "E", "1,1": "", "1,2": "",
      "2,1": "", "2,2": ""
    }
  },
  DS0002B: {
    size: 3,
    clues: {
      "0,0": "E", "0,1": "N", "0,2": "D",
      "1,0": "D", "2,0": "Y", "1,1": "", "1,2": "",
      "2,1": "", "2,2": ""
    }
  }
};

function createGrid(size, clues) {
  const container = document.getElementById("grid-container");
  container.innerHTML = "";
  container.className = `grid-${size}x${size}`;

  for (let r = 0; r < size; r++) {
    for (let c = 0; c < size; c++) {
      const cell = document.createElement("input");
      cell.classList.add("grid-cell");

      // Kamili shading: shade if both row and col are even-numbered (index starts from 0)
      if ((r + 1) % 2 === 0 && (c + 1) % 2 === 0) {
        cell.classList.add("shaded");
        cell.disabled = true;
        cell.value = "";
      } else {
        const key = `${r},${c}`;
        if (clues[key]) {
          cell.value = clues[key];
        }
      }

      container.appendChild(cell);
    }
  }
}

document.getElementById("puzzle-select").addEventListener("change", function () {
  const puzzleId = this.value;
  if (puzzleId && puzzles[puzzleId]) {
    const { size, clues } = puzzles[puzzleId];
    createGrid(size, clues);
  }
});
