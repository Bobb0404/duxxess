const gridSize = 7;
let timer = 0;
let timerInterval = null;
let correctWords = [];
let editableCells = [];

window.onload = function () {
  loadPuzzle();
  startTimer();
};

function loadPuzzle() {
  fetch('puzzles.json')
    .then((res) => res.json())
    .then((data) => {
      const puzzle = data[0]; // Load the first puzzle for now
      correctWords = [...puzzle.across, ...puzzle.down];
      buildGrid(puzzle.clues);
    })
    .catch((err) => console.error('Puzzle load error:', err));
}

function buildGrid(clues) {
  const table = document.getElementById('puzzle-grid');
  table.innerHTML = '';

  for (let row = 0; row < gridSize; row++) {
    const tr = document.createElement('tr');

    for (let col = 0; col < gridSize; col++) {
      const td = document.createElement('td');

      const isEditable = (row % 2 === 0) && (col % 2 === 0);
      if (isEditable) {
        const input = document.createElement('input');
        input.maxLength = 1;
        input.dataset.row = row;
        input.dataset.col = col;
        td.appendChild(input);
        editableCells.push(input);
      } else {
        td.classList.add('shaded');
        const clue = clues?.[row]?.[col];
        if (clue) td.textContent = clue.toUpperCase();
      }

      tr.appendChild(td);
    }

    table.appendChild(tr);
  }
}

function startTimer() {
  const timerDisplay = document.getElementById('timer');
  timerInterval = setInterval(() => {
    timer++;
    const minutes = Math.floor(timer / 60);
    const seconds = timer % 60;
    timerDisplay.textContent = `⏱ Time: ${minutes}:${seconds.toString().padStart(2, '0')}`;
  }, 1000);
}

function submitPuzzle() {
  const guessGrid = Array(gridSize).fill('').map(() => Array(gridSize).fill(''));

  editableCells.forEach((input) => {
    const row = Number(input.dataset.row);
    const col = Number(input.dataset.col);
    guessGrid[row][col] = input.value.toLowerCase();
  });

  const guessAcross = [0, 2, 4, 6].map(r =>
    guessGrid[r].filter((_, i) => i % 2 === 0).join('')
  );
  const guessDown = [0, 2, 4, 6].map(c =>
    guessGrid.map((row, i) => i % 2 === 0 ? row[c] : null).filter(Boolean).join('')
  );

  const allGuesses = [...guessAcross, ...guessDown];
  const matched = allGuesses.every((word, i) => word === correctWords[i]);

  const result = document.getElementById('result-message');
  result.textContent = matched
    ? '🎉 Correct! Puzzle complete.'
    : '❌ Some words are incorrect. Try again.';
}
