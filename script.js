const puzzles = {
  "DS0001B": {
    gridSize: 3,
    clues: {
      "0,0": "B", "0,1": "A", "0,2": "D",
      "1,0": "Y", "1,1": "",  "1,2": "E",
      "2,0": "D", "2,1": "E", "2,2": "D",
    },
    solutionWords: ["BAD", "END", "BYE", "DAD"]
  },
  "DS0002B": {
    gridSize: 3,
    clues: {
      "0,0": "B", "0,1": "A", "0,2": "D",
      "1,0": "Y", "1,1": "",  "1,2": "E",
      "2,0": "D", "2,1": "A", "2,2": "D",
    },
    solutionWords: ["BAD", "END", "BYE", "DAD"]
  }
};

let currentPuzzleIndex = 0;
const puzzleIDs = Object.keys(puzzles);

function loadPuzzle(puzzleID) {
  const puzzle = puzzles[puzzleID];
  const gridContainer = document.getElementById("gridContainer");
  const gridSize = puzzle.gridSize;
  const clues = puzzle.clues;

  // Clear and set grid layout
  gridContainer.innerHTML = "";
  gridContainer.className = `grid size-${gridSize}x${gridSize}`;

  for (let row = 0; row < gridSize; row++) {
    for (let col = 0; col < gridSize; col++) {
      const key = `${row},${col}`;
      const cell = document.createElement("input");

      const isEditable = (row % 2 === 0 && col % 2 === 0) || (row % 2 === 0 && col % 2 === 1) || (row % 2 === 1 && col % 2 === 0);

      if (!isEditable) {
        cell.classList.add("shaded");
        cell.disabled = true;
      } else {
        cell.classList.add("editable");
      }

      if (clues[key]) {
        cell.value = clues[key];
      }

      gridContainer.appendChild(cell);
    }
  }

  document.getElementById("puzzleIDDisplay").textContent = `Puzzle ID: ${puzzleID}`;
  document.getElementById("puzzleSelector").value = puzzleID;
}

function loadNextPuzzle() {
  currentPuzzleIndex = (currentPuzzleIndex + 1) % puzzleIDs.length;
  loadPuzzle(puzzleIDs[currentPuzzleIndex]);
}

function populateSelector() {
  const selector = document.getElementById("puzzleSelector");
  selector.innerHTML = "";
  puzzleIDs.forEach(id => {
    const option = document.createElement("option");
    option.value = id;
    option.textContent = id;
    selector.appendChild(option);
  });
}

document.getElementById("nextPuzzle").addEventListener("click", loadNextPuzzle);
document.getElementById("puzzleSelector").addEventListener("change", (e) => {
  currentPuzzleIndex = puzzleIDs.indexOf(e.target.value);
  loadPuzzle(e.target.value);
});
document.getElementById("puzzleSearch").addEventListener("input", (e) => {
  const query = e.target.value.trim().toUpperCase();
  if (puzzles[query]) {
    currentPuzzleIndex = puzzleIDs.indexOf(query);
    loadPuzzle(query);
  }
});

// Initial Load
populateSelector();
loadPuzzle(puzzleIDs[0]);
