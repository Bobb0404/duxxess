const puzzles = [
  {
    id: 'DS0001',
    across: ['Garland', 'Orbited', 'Macaque', 'Dangers'],
    down: ['Groomed', 'Rubicon', 'Antique', 'Dodgers']
  },
  {
    id: 'DS0002',
    across: ['Chainer', 'Informs', 'Barmaid', 'Distend'],
    down: ['Climbed', 'Affirms', 'Narrate', 'Resided']
  },
  {
    id: 'DS0003',
    across: ['Solidly', 'Lactate', 'Intoned', 'Resided'],
    down: ['Soldier', 'Locates', 'Drained', 'Yielded']
  }
];

let currentPuzzle = 0;

function renderGrid() {
  const grid = document.getElementById('grid');
  grid.innerHTML = '';
  document.getElementById('puzzle-id').textContent = puzzles[currentPuzzle].id;

  for (let row = 0; row < 7; row++) {
    for (let col = 0; col < 7; col++) {
      const cell = document.createElement('div');
      cell.className = 'cell';

      const isEditable = (row % 2 === 0 || col % 2 === 0); // JS 0-indexed
      const isShaded = (row % 2 === 1 && col % 2 === 1);   // human even = js odd

      if (isShaded) {
        cell.classList.add('shaded');
      } else {
        const input = document.createElement('input');
        input.maxLength = 1;
        cell.appendChild(input);
      }

      grid.appendChild(cell);
    }
  }
}

function nextPuzzle() {
  currentPuzzle = (currentPuzzle + 1) % puzzles.length;
  renderGrid();
}

function prevPuzzle() {
  currentPuzzle = (currentPuzzle - 1 + puzzles.length) % puzzles.length;
  renderGrid();
}

// Load first puzzle on start
window.onload = renderGrid;
