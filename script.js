const puzzles = {
  "DS0001B": {
    size: 3,
    across: ["BAD", "END"],
    down: ["BYE", "DAD"]
  },
  "DS0002B": {
    size: 3,
    across: ["MAN", "ICE"],
    down: ["MIX", "ACE"]
  }
};

const gridElement = document.getElementById('grid');
const selector = document.getElementById('puzzleSelector');

selector.addEventListener('change', () => {
  const puzzleId = selector.value;
  if (puzzleId && puzzles[puzzleId]) {
    loadPuzzle(puzzleId);
  }
});

function loadPuzzle(puzzleId) {
  const puzzle = puzzles[puzzleId];
  const size = puzzle.size;
  gridElement.innerHTML = "";

  // Set grid size class
  gridElement.className = `grid-${size}x${size}`;

  for (let row = 1; row <= size; row++) {
    for (let col = 1; col <= size; col++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');

      // Kamili milestone rules
      const isEditable = row % 2 === 1 && col % 2 === 1;
      const isShaded = row % 2 === 0 && col % 2 === 0;

      if (isShaded) {
        cell.classList.add('shaded');
      } else if (isEditable) {
        const input = document.createElement('input');
        input.maxLength = 1;
        cell.appendChild(input);
      }

      gridElement.appendChild(cell);
    }
  }
}
