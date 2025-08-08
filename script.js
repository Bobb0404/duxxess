// script.js

function loadPuzzle(puzzleId) {
    const puzzle = puzzles[puzzleId];
    if (!puzzle) {
        alert("Puzzle not found!");
        return;
    }

    const gridSize = puzzle.size;
    const gridContainer = document.getElementById("gridContainer");
    gridContainer.innerHTML = "";

    // Set container width dynamically based on puzzle size
    if (gridSize === 3) {
        gridContainer.style.width = "60vw";
    } else if (gridSize === 5) {
        gridContainer.style.width = "70vw";
    } else if (gridSize === 7) {
        gridContainer.style.width = "80vw";
    } else {
        gridContainer.style.width = "70vw"; // fallback
    }

    gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

    // Build grid respecting Kamili milestone shading rules
    for (let r = 1; r <= gridSize; r++) {
        for (let c = 1; c <= gridSize; c++) {
            const cell = document.createElement("input");
            cell.maxLength = 1;
            cell.classList.add("grid-cell");

            // Shade cell if both row and col are even
            if (r % 2 === 0 && c % 2 === 0) {
                cell.classList.add("shaded");
                cell.disabled = true;
            } else {
                cell.classList.add("editable");
            }

            gridContainer.appendChild(cell);
        }
    }

    // Fill across clues: words placed on odd rows 1,3,5,7
    puzzle.across.forEach((word, idx) => {
        const row = 1 + idx * 2; // 1,3,5,7
        if (row <= gridSize) {
            for (let i = 0; i < word.length; i++) {
                const letter = word[i];
                if (letter === letter.toUpperCase() && letter !== " ") {
                    const cellIndex = (row - 1) * gridSize + i;
                    const cell = gridContainer.children[cellIndex];
                    if (cell) {
                        cell.value = letter;
                        cell.disabled = true;
                        cell.classList.add("prefilled");
                    }
                }
            }
        }
    });

    // Fill down clues: words placed on odd columns 1,3,5,7
    puzzle.down.forEach((word, idx) => {
        const col = 1 + idx * 2; // 1,3,5,7
        if (col <= gridSize) {
            for (let i = 0; i < word.length; i++) {
                const letter = word[i];
                if (letter === letter.toUpperCase() && letter !== " ") {
                    const cellIndex = i * gridSize + (col - 1);
                    const cell = gridContainer.children[cellIndex];
                    if (cell) {
                        cell.value = letter;
                        cell.disabled = true;
                        cell.classList.add("prefilled");
                    }
                }
            }
        }
    });
}

// Search box input handler
document.getElementById("puzzleSearch").addEventListener("input", function () {
    const id = this.value.trim();
    if (puzzles[id]) {
        loadPuzzle(id);
    }
});

// Load default puzzle DS0001B on page load
document.addEventListener("DOMContentLoaded", function () {
    loadPuzzle("DS0001B");
});
