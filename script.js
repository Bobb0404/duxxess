const puzzles = {
  DS0001B: {
    size: 3,
    solutionWords: ['BAD', 'END', 'BYE', 'DAD'],
    gridData: [
      ['B', '', 'D'],
      ['', '', ''],
      ['Y', '', 'E']
    ]
  },
  DS0002B: {
    size: 3,
    solutionWords: ['BAD', 'END', 'BYE', 'DAD'],
    gridData: [
      ['B', '', 'D'],
      ['', '', ''],
      ['Y', '', 'E']
    ]
  }
};

let currentPuzzleId = 'DS0001B';

function renderGrid(size, preset = []) {
  const gridContainer = document.getElementById('gridContainer');
  gridContainer.innerHTML = '';
  gridContainer.style.gridTemplateColumns = `repeat(${size}, 50px)`;

  for (let row = 1; row <= size; row++) {
    for (let col = 1; col <= size; col++) {
      const cell = document.createElement('input');
      cell.maxLength = 1;
      cell.classList.add('grid-cell');

      const isEditable = row % 2 === 1 || col % 2 === 1;
      const isShaded = row % 2 === 0 && col % 2 === 0;

      if (isShaded) {
        cell.disabled = true;
      }

      if (preset[row - 1] && preset[row - 1][col - 1]) {
        cell.value = preset[row - 1][col - 1];
      }

      gridContainer.appendChild(cell);
    }
  }
}

function loadPuzzle(puzzleId) {
  const puzzle = puzzles[puzzleId];
  if (!puzzle) {
    alert('Puzzle not found.');
    return;
  }

  currentPuzzleId = puzzleId;
  renderGrid(puzzle.size, puzzle.gridData);
  displayWordList(puzzle.solutionWords);
}

function displayWordList(words) {
  const list = document.getElementById('wordListItems');
  list.innerHTML = '';
  words.forEach(word => {
    const li = document.createElement('li');
    li.textContent = word;
    list.appendChild(li);
  });
}

function getNextPuzzleId(currentId) {
  const keys = Object.keys(puzzles);
  const index = keys.indexOf(currentId);
  return index >= 0 && index < keys.length - 1 ? keys[index + 1] : keys[0];
}

document.getElementById('nextPuzzleBtn').addEventListener('click', () => {
  const nextId = getNextPuzzleId(currentPuzzleId);
  document.getElementById('puzzleSelector').value = nextId;
  loadPuzzle(nextId);
});

document.getElementById('puzzleSelector').addEventListener('change', (e) => {
  loadPuzzle(e.target.value);
});

document.getElementById('searchBox').addEventListener('input', (e) => {
  const id = e.target.value.toUpperCase();
  if (puzzles[id]) {
    loadPuzzle(id);
  }
});

window.onload = () => {
  const selector = document.getElementById('puzzleSelector');
  for (const id of Object.keys(puzzles)) {
    const opt = document.createElement('option');
    opt.value = id;
    opt.textContent = id;
    selector.appendChild(opt);
  }
  selector.value = currentPuzzleId;
  loadPuzzle(currentPuzzleId);
};
