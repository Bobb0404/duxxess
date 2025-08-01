const puzzles = {
  DS0001B: {
    gridSize: 3,
    clues: {
      "0,0": "B", "0,1": "A", "0,2": "D",
      "1,0": "",  "1,1": "",  "1,2": "",
      "2,0": "E", "2,1": "N", "2,2": "D",
    },
    solutionWords: ["BAD", "END", "BEN", "AND"]
  },
  DS0002B: {
    gridSize: 3,
    clues: {
      "0,0": "C", "0,1": "A", "0,2": "T",
      "1,0": "",  "1,1": "",  "1,2": "",
      "2,0": "C", "2,1": "O", "2,2": "G",
    },
    solutionWords: ["CAT", "COG", "TOG", "TAG"]
  }
};

let currentIndex = 0;
const ids = Object.keys(puzzles);

function renderGrid(id) {
  const puzzle = puzzles[id];
  const size = puzzle.gridSize;
  const clues = puzzle.clues;

  const container = document.getElementById("gridContainer");
  container.innerHTML = "";
  container.className = `grid size-${size}x${size}`;

  for (let r = 0; r < size; r++) {
    for (let c = 0; c < size; c++) {
      const cell = document.createElement("input");
      const key = `${r},${c}`;
      const isShaded = (r+1) % 2 === 0 && (c+1) % 2 === 0;

      if (isShaded) {
        cell.disabled = true;
        cell.classList.add("disabled");
      }

      if (clues[key]) cell.value = clues[key];
      container.appendChild(cell);
    }
  }

  document.getElementById("puzzleSelector").value = id;
  document.getElementById("puzzleIDDisplay").textContent = `Puzzle ID: ${id}`;
}

function loadNextPuzzle() {
  currentIndex = (currentIndex + 1) % ids.length;
  renderGrid(ids[currentIndex]);
}

function populateSelector() {
  const sel = document.getElementById("puzzleSelector");
  ids.forEach((id, idx) => {
    const opt = document.createElement("option");
    opt.value = id;
    opt.textContent = id;
    sel.appendChild(opt);
  });
}

document.getElementById("nextPuzzle").addEventListener("click", loadNextPuzzle);

document.getElementById("puzzleSelector").addEventListener("change", (e) => {
  currentIndex = ids.indexOf(e.target.value);
  renderGrid(e.target.value);
});

document.getElementById("puzzleSearch").addEventListener("input", (e) => {
  const val = e.target.value.trim().toUpperCase();
  if (ids.includes(val)) {
    currentIndex = ids.indexOf(val);
    renderGrid(val);
  }
});

// INIT
populateSelector();
renderGrid(ids[currentIndex]);
