document.addEventListener("DOMContentLoaded", () => {
  const gridContainer = document.getElementById("grid");
  const puzzleTitle = document.getElementById("puzzle-title");
  const puzzleSelect = document.getElementById("puzzle-select");

  const puzzles = {
    DS0001B: {
      title: "DS0001B - Beginner",
      size: 3,
      words: {
        across: ["CAT", "TOP"],
        down: ["CUT", "TAP"]
      }
    },
    DS0002R: {
      title: "DS0002R - Rookie",
      size: 5,
      words: {
        across: ["GRIMACE", "UNMASKS"],
        down: ["GOURMET"]
      }
    },
    DS0003E: {
      title: "DS0003E - Elite",
      size: 7,
      words: {
        across: ["GARLAND", "ORBITED", "MACAQUE", "DANGERS"],
        down: ["GROOMED", "RUBICON", "ANTIQUE", "DODGERS"]
      }
    }
    // Add more puzzles here...
  };

  function isShadedCell(row, col) {
    return row % 2 === 0 && col % 2 === 0;
  }

  function createGrid(size) {
    gridContainer.innerHTML = "";
    gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

    for (let row = 1; row <= size; row++) {
      for (let col = 1; col <= size; col++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");

        if (isShadedCell(row, col)) {
          cell.classList.add("shaded");
        } else {
          const input = document.createElement("input");
          input.setAttribute("maxlength", "1");
          input.classList.add("letter");
          cell.appendChild(input);
        }

        gridContainer.appendChild(cell);
      }
    }
  }

  function loadPuzzle(id) {
    const puzzle = puzzles[id];
    if (!puzzle) return;

    puzzleTitle.textContent = puzzle.title;
    createGrid(puzzle.size);
  }

  puzzleSelect.addEventListener("change", (e) => {
    loadPuzzle(e.target.value);
  });

  // Populate the dropdown
  for (const key in puzzles) {
    const option = document.createElement("option");
    option.value = key;
    option.textContent = puzzles[key].title;
    puzzleSelect.appendChild(option);
  }

  // Load default puzzle
  loadPuzzle(puzzleSelect.value);
});
