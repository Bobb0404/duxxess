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
    // Add more puzzles here later
  };

  function buildGrid(puzzle) {
    gridContainer.innerHTML = "";

    const size = puzzle.size;
    gridContainer.style.display = "grid";
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 40px)`;
    gridContainer.style.gridTemplateRows = `repeat(${size}, 40px)`;
    gridContainer.style.gap = "2px";

    for (let row = 1; row <= size; row++) {
      for (let col = 1; col <= size; col++) {
        const cell = document.createElement("input");

        if (row % 2 === 0 && col % 2 === 0) {
          cell.classList.add("shaded");
          cell.disabled = true;
        } else {
          cell.classList.add("editable");
          cell.maxLength = 1;
          cell.autocomplete = "off";
        }

        cell.classList.add("grid-cell");
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

  // Load first puzzle by default
  puzzleSelector.value = "DS0001B";
  title.textContent = puzzles["DS0001B"].title;
  buildGrid(puzzles["DS0001B"]);
});
