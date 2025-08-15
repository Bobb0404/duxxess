let currentPuzzleIndex = 0;

// Function to render the puzzle grid
function renderPuzzle(puzzle) {
    const container = document.getElementById('puzzle-container');
    container.innerHTML = ''; // Clear old grid

    const gridSize = puzzle.size;
    const table = document.createElement('table');

    for (let r = 0; r < gridSize; r++) {
        const row = document.createElement('tr');
        for (let c = 0; c < gridSize; c++) {
            const cell = document.createElement('td');
            const isShaded = (r % 2 === 1 && c % 2 === 1); // Example shading rule
            if (isShaded) {
                cell.classList.add('shaded');
            } else {
                const input = document.createElement('input');
                input.maxLength = 1;
                input.value = puzzle.grid[r][c] || '';
                cell.appendChild(input);
            }
            row.appendChild(cell);
        }
        table.appendChild(row);
    }

    container.appendChild(table);
}

// Load puzzle by index
function loadPuzzle(index) {
    if (index >= 0 && index < puzzles.length) {
        currentPuzzleIndex = index;
        renderPuzzle(puzzles[index]);
    }
}

// Search puzzle by ID
document.getElementById('load-puzzle').addEventListener('click', () => {
    const id = document.getElementById('puzzle-id').value.trim().toUpperCase();
    const foundIndex = puzzles.findIndex(p => p.id === id);
    if (foundIndex !== -1) {
        loadPuzzle(foundIndex);
    } else {
        alert('Puzzle not found!');
    }
});

// Navigation buttons
document.getElementById('prev-puzzle').addEventListener('click', () => {
    if (currentPuzzleIndex > 0) {
        loadPuzzle(currentPuzzleIndex - 1);
    }
});

document.getElementById('next-puzzle').addEventListener('click', () => {
    if (currentPuzzleIndex < puzzles.length - 1) {
        loadPuzzle(currentPuzzleIndex + 1);
    }
});

// Load first puzzle by default
loadPuzzle(0);
