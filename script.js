<script>
  // Puzzle data format
  const puzzles = [
    {
      id: "DS0001B",
      size: 3,
      level: "Beginner",
      across: ["CAT", "TOP"],
      down: ["CUT", "TAP"],
    },
    {
      id: "DS0002R",
      size: 5,
      level: "Rookie",
      across: ["GRIMACE", "UNMASKS"],
      down: ["GOURMET"],
    },
    {
      id: "DS0003E",
      size: 7,
      level: "Elite",
      across: ["GARLAND", "ORBITED", "MACAQUE", "DANGERS"],
      down: ["GROOMED", "RUBICON", "ANTIQUE", "DODGERS"],
    },
    // Add more puzzles here
  ];

  let currentPuzzleIndex = 0;

  function createGrid(size) {
    const gridContainer = document.getElementById("grid");
    gridContainer.innerHTML = "";
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let r = 1; r <= size; r++) {
      for (let c = 1; c <= size; c++) {
        const cell = document.createElement("input");
        cell.maxLength = 1;
        cell.className = "cell";

        // Apply sacred shading: shaded only where both row & col are even
        if (r % 2 === 0 && c % 2 === 0) {
          cell.classList.add("shaded");
          cell.disabled = true;
        }

        cell.dataset.row = r;
        cell.dataset.col = c;
        gridContainer.appendChild(cell);
      }
    }
  }

  function displayPuzzle(puzzle) {
    document.getElementById("puzzle-id").innerText = puzzle.id;
    document.getElementById("puzzle-level").innerText = puzzle.level;

    const acrossList = document.getElementById("across-list");
    acrossList.innerHTML = "";
    puzzle.across?.forEach(word => {
      const li = document.createElement("li");
      li.textContent = word;
      acrossList.appendChild(li);
    });

    const downList = document.getElementById("down-list");
    downList.innerHTML = "";
    puzzle.down?.forEach(word => {
      const li = document.createElement("li");
      li.textContent = word;
      downList.appendChild(li);
    });

    createGrid(puzzle.size);
  }

  function loadNextPuzzle() {
    currentPuzzleIndex = (currentPuzzleIndex + 1) % puzzles.length;
    displayPuzzle(puzzles[currentPuzzleIndex]);
  }

  window.onload = function () {
    displayPuzzle(puzzles[currentPuzzleIndex]);
    document.getElementById("next-btn").onclick = loadNextPuzzle;
  };
</script>
