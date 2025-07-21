document.addEventListener("DOMContentLoaded", () => {
  const gridSize = 7;
  const grid = document.getElementById("grid");
  const loadButton = document.getElementById("loadButton");
  const gameIdInput = document.getElementById("gameIdInput");

  function createGrid() {
    grid.innerHTML = "";
    for (let row = 1; row <= gridSize; row++) {
      for (let col = 1; col <= gridSize; col++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");

        // Sacred shading rule: shade only when both row & col are even
        if (row % 2 === 0 && col % 2 === 0) {
          cell.classList.add("shaded");
        } else {
          const input = document.createElement("input");
          input.setAttribute("maxlength", "1");
          input.setAttribute("data-row", row);
          input.setAttribute("data-col", col);
          cell.appendChild(input);
        }

        grid.appendChild(cell);
      }
    }
  }

  function loadPuzzleById(id) {
    fetch("puzzles.json")
      .then((response) => response.json())
      .then((data) => {
        const puzzle = data.puzzles.find((p) => p.id === id);
        if (!puzzle) {
          alert("Puzzle not found!");
          return;
        }

        fillGridWithClues(puzzle.clues);
        document.getElementById("title").textContent = puzzle.title || `Puzzle ${id}`;
      })
      .catch((err) => {
        console.error("Error loading puzzles:", err);
        alert("Failed to load puzzles.");
      });
  }

  function fillGridWithClues(clues) {
    clues.forEach((clue) => {
      const input = document.querySelector(
        `input[data-row="${clue.row}"][data-col="${clue.col}"]`
      );
      if (input) {
        input.value = clue.letter.toUpperCase();
        input.disabled = true;
        input.classList.add("prefilled");
      }
    });
  }

  loadButton.addEventListener("click", () => {
    const gameId = gameIdInput.value.trim().toUpperCase();
    if (gameId) {
      loadPuzzleById(gameId);
    } else {
      alert("Enter a valid Game ID.");
    }
  });

  createGrid(); // initial grid draw
});
