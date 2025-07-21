// Duxxess Game Script - Sacred Format Preserved

const gridSize = 7;
const puzzleData = {
  "B001": {
    level: "Beginner",
    grid: [
      ["G", "", "R", "", "M", "", "D"],
      ["", "", "", "", "", "", ""],
      ["O", "", "U", "", "C", "", "O"],
      ["", "", "", "", "", "", ""],
      ["A", "", "B", "", "T", "", "D"],
      ["", "", "", "", "", "", ""],
      ["N", "", "I", "", "Q", "", "E"]
    ],
    solutionWords: ["GARLAND", "ORBITED", "MACAQUE", "DANGERS", "GROOMED", "RUBICON", "ANTIQUE", "DODGERS"]
  },
  // Add more puzzles by ID here...
};

function createGrid() {
  const gridContainer = document.getElementById("grid");
  gridContainer.innerHTML = "";
  for (let row = 0; row < gridSize; row++) {
    const rowDiv = document.createElement("div");
    rowDiv.className = "row";
    for (let col = 0; col < gridSize; col++) {
      const cell = document.createElement("input");
      cell.maxLength = 1;
      cell.className = "cell";

      const isEvenRow = (row + 1) % 2 === 0;
      const isEvenCol = (col + 1) % 2 === 0;
      const isShaded = isEvenRow && isEvenCol;

      if (isShaded) {
        cell.disabled = true;
        cell.classList.add("shaded");
      } else {
        cell.classList.add("editable");
      }

      cell.id = `cell-${row}-${col}`;
      rowDiv.appendChild(cell);
    }
    gridContainer.appendChild(rowDiv);
  }
}

function populateGrid(gridContent) {
  for (let row = 0; row < gridSize; row++) {
    for (let col = 0; col < gridSize; col++) {
      const cell = document.getElementById(`cell-${row}-${col}`);
      if (cell && gridContent[row][col]) {
        cell.value = gridContent[row][col];
      }
    }
  }
}

function loadPuzzleByID() {
  const gameId = document.getElementById("gameId").value.trim().toUpperCase();
  if (puzzleData[gameId]) {
    createGrid();
    populateGrid(puzzleData[gameId].grid);
    document.getElementById("puzzleLevel").innerText = `${puzzleData[gameId].level} – Puzzle ${gameId}`;
  } else {
    alert("Puzzle ID not found. Try B001, etc.");
  }
}

window.onload = () => {
  createGrid();
  document.getElementById("loadBtn").addEventListener("click", loadPuzzleByID);
};
