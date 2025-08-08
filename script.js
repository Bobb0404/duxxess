// script.js

function loadPuzzle(puzzleId) {
    const puzzle = puzzles[puzzleId];
    if (!puzzle) {
        alert("Puzzle not found!");
        return;
    }

    const gridSize = puzzle.size;
    const gridContainer = document.getElementById("grid");
    gridContainer.innerHTML = "";
    gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

    // Build empty grid with shading
    for (let r = 1; r <= gridSize; r++) {
        for (let c = 1; c <= gridSize; c++) {
            const cell = document.createElement("input");
            cell.maxLength = 1;

            // Shading rule: both row and column even → shaded cell
            if (r % 2 === 0 && c % 2 === 0) {
                cell.classList.add("shaded");
                cell.disabled = true;
            } else {
                cell.classList.add("editable");
            }

            gridContainer.appendChild(cell);
        }
    }

    // Fill across words
    puzzle.across.forEach((word, index) => {
        let row = index * 2 + 1; // across words go on odd rows
        if (row <= gridSize) {
            for (let i = 0; i < word.length; i++) {
                const cellIndex = (row - 1) * gridSize + i;
                const cell = gridContainer.children[cellIndex];
                if (cell && word[i] !== " ") {
                    cell.value = word[i];
                    cell.disabled = true;
                }
            }
        }
    });

    // Fill down words
    puzzle.down.forEach((word, index) => {
        let col = index * 2 + 1; // down words go on odd columns
        if (col <= gridSize) {
            for (let i = 0; i < word.length; i++) {
                const cellIndex = (i * gridSize) + (col - 1);
                const cell = gridContainer.children[cellIndex];
                if (cell && word[i] !== " ") {
                    cell.value = word[i];
                    cell.disabled = true;
                }
            }
        }
    });
}

// Search puzzle by ID
document.getElementById("puzzleSearch").addEventListener("input", function () {
    const id = this.value.trim();
    if (puzzles[id]) {
        loadPuzzle(id);
    }
});

// Load DS0001B by default on page load
document.addEventListener("DOMContentLoaded", function () {
    loadPuzzle("DS0001B");
});
