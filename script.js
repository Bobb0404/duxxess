// Define all puzzle data here
const puzzles = {
  DS0001B: {
    title: "DS0001B – Beginner",
    grid: [
      ["G", "", "", "", "", "", "E"],
      ["", "", "", "", "", "", ""],
      ["M", "", "", "", "", "", "S"],
      ["", "", "", "", "", "", ""],
      ["D", "", "", "", "", "", "R"],
      ["", "", "", "", "", "", ""],
      ["G", "", "", "", "", "", "S"],
    ],
    words: ["GRIMACE", "UNMASKS", "GOURMET", "RUNNERS", "MASTERS", "MARKERS", "GAMERSS", "GROOMED"]
  },
  DS0002R: {
    title: "DS0002R – Rookie",
    grid: [
      ["G", "", "", "", "", "", "S"],
      ["", "", "", "", "", "", ""],
      ["R", "", "", "", "", "", "E"],
      ["", "", "", "", "", "", ""],
      ["A", "", "", "", "", "", "S"],
      ["", "", "", "", "", "", ""],
      ["D", "", "", "", "", "", "S"],
    ],
    words: ["GARLAND", "ORBITED", "MACAQUE", "DANGERS", "GROOMED", "RUBICON", "ANTIQUE", "DODGERS"]
  }
};

// Get DOM references
const gridContainer = document.getElementById("grid");
const puzzleSelector = document.getElementById("puzzle-selector");
const puzzleTitle = document.getElementById("puzzle-title");

// Fill selector dropdown
Object.keys(puzzles).forEach(key => {
  const option = document.createElement("option");
  option.value = key;
  option.textContent = key;
  puzzleSelector.appendChild(option);
});

// Load a puzzle
function loadPuzzle(puzzleId) {
  const puzzle = puzzles[puzzleId];
  puzzleTitle.textContent = puzzle.title;
  gridContainer.innerHTML = "";

  const table = document.createElement("table");
  table.className = "dux-grid";

  for (let row = 0; row < 7; row++) {
    const tr = document.createElement("tr");
    for (let col = 0; col < 7; col++) {
      const td = document.createElement("td");
      const isEditable = row % 2 === 0 && col % 2 === 0;
      const cellValue = puzzle.grid[row][col];

      if (isEditable) {
        const input = document.createElement("input");
        input.maxLength = 1;
        input.className = "cell";
        input.value = cellValue;
        td.appendChild(input);
      } else {
        td.className = "shaded";
      }

      tr.appendChild(td);
    }
    table.appendChild(tr);
  }

  gridContainer.appendChild(table);
}

// Load default puzzle
puzzleSelector.addEventListener("change", () => {
  loadPuzzle(puzzleSelector.value);
});
loadPuzzle("DS0001B");
