<script>
  const puzzles = {
    DS0001B: {
      size: 3,
      words: ['CAT', 'TOP', 'CUT', 'TAP'],
      layout: [
        ['C', '', 'T'],
        ['', '', ''],
        ['T', '', 'P']
      ]
    },
    DS0002R: {
      size: 5,
      words: ['GLOWN', 'RAINS', 'OVERT', 'WHEAT', 'NEEDY', 'GROWN', 'RODEO', 'SWEPT'],
      layout: [
        ['G', '', 'O', '', 'N'],
        ['', '', '', '', ''],
        ['O', '', 'E', '', 'T'],
        ['', '', '', '', ''],
        ['N', '', 'T', '', 'Y']
      ]
    },
    DS0003M: {
      size: 7,
      words: ['GARLAND', 'ORBITED', 'MACAQUE', 'DANGERS', 'GROOMED', 'RUBICON', 'ANTIQUE', 'DODGERS'],
      layout: [
        ['G', '', 'R', '', 'L', '', 'D'],
        ['', '', '', '', '', '', ''],
        ['M', '', 'C', '', 'Q', '', 'E'],
        ['', '', '', '', '', '', ''],
        ['D', '', 'N', '', 'R', '', 'S'],
        ['', '', '', '', '', '', ''],
        ['D', '', 'G', '', 'R', '', 'S']
      ]
    }
  };

  const gridContainer = document.getElementById("grid");
  const puzzleSelect = document.getElementById("puzzleSelect");

  function createGrid(puzzleId) {
    const puzzle = puzzles[puzzleId];
    gridContainer.innerHTML = "";
    gridContainer.style.gridTemplateColumns = `repeat(${puzzle.size}, 1fr)`;

    for (let row = 0; row < puzzle.size; row++) {
      for (let col = 0; col < puzzle.size; col++) {
        const cell = document.createElement("input");
        cell.maxLength = 1;
        cell.classList.add("grid-cell");

        const isEven = (row % 2 === 0 && col % 2 === 0);
        const letter = puzzle.layout[row][col];

        if (isEven) {
          cell.classList.add("shaded");
          cell.disabled = true;
        } else if (letter) {
          cell.value = letter;
        }

        gridContainer.appendChild(cell);
      }
    }
  }

  // Load selected puzzle
  puzzleSelect.addEventListener("change", () => {
    createGrid(puzzleSelect.value);
  });

  // Load initial puzzle
  window.onload = () => {
    createGrid(puzzleSelect.value);
  };
</script>
