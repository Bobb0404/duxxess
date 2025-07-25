document.addEventListener("DOMContentLoaded", () => {
  const puzzleSelector = document.getElementById("puzzleSelector");
  const gridContainer = document.getElementById("gridContainer");
  const title = document.getElementById("puzzleTitle");

  const puzzles = {
    "DS0001B": {
      title: "DS0001B – Beginner",
      size: 7,
      clues: {
        across: ["Garland", "Orbited", "Macaque", "Dangers"],
        down: ["Groomed", "Rubicon", "Antique", "Dodgers"]
      }
    }
  };

  function buildGrid(puzzle) {
    const size = puzzle.size;
    gridContainer.innerHTML = "";
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 42px)`;
    gridContainer.style.gridTemplateRows = `repeat(${size}, 42px)`;

    for (let r = 1; r <= size; r++) {
      for (let c = 1; c <= size; c++) {
        const cell = document.createElement("input");

        cell.classList.add("grid-cell");

        if (r % 2 === 0 && c % 2 === 0) {
          cell.classList.add("shaded");
          cell.disabled = true;
        } else {
          cell.classList.add("editable");
          cell.maxLength = 1;
        }

        gridContainer.appendChild(cell);
      }
    }
  }

  puzzleSelector.addEventListener("change", (e) => {
    const selectedId = e.target.value;
    if (puzzles[selectedId]) {
      title.textContent = puzzles[selectedId].title;
      buildGrid(puzzles[selectedId]);
    }
  });

  // Load initial puzzle
  puzzleSelector.value = "DS0001B";
  title.textContent = puzzles["DS0001B"].title;
  buildGrid(puzzles["DS0001B"]);
});
