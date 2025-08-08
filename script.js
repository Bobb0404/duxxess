function loadPuzzle(puzzleId) {
    const puzzle = puzzles[puzzleId];
    if (!puzzle) {
        alert("Puzzle not found!");
        return;
    }

    const gridSize = puzzle.size;
    const gridContainer = document.getElementById("gridContainer");
    gridContainer.innerHTML = "";

    // We no longer set width here - CSS handles fixed 50vw width

    gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

    // Build grid with Kamili shading rules
    for (let r = 1; r <= gridSize; r++) {
        for (let c = 1; c <= gridSize; c++) {
            const cell = document.createElement("input");
            cell.maxLength = 1;
            cell.classList.add("grid-cell");

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

    // Fill across clues (only uppercase letters)
    puzzle.across.forEach((word, index) => {
        const row = index * 2 + 1; // across words on odd rows
        if (row <= gridSize) {
            for (let i = 0; i < word.length; i++) {
                const letter = word[i];
                const cellIndex = (row - 1) * gridSize + i;
                const cell = gridContainer.children[cellIndex];
                if (cell && letter === letter.toUpperCase() && letter !== " ") {
                    cell.value = letter;
                    cell.disabled = true;
                    cell.classList.add("prefilled");
                }
            }
        }
    });

    // Fill down clues (only uppercase letters)
    puzzle.down.forEach((word, index) => {
        const col = index * 2 + 1; // down words on odd columns
        if (col <= gridSize) {
            for (let i = 0; i < word.length; i++) {
                const letter = word[i];
                const cellIndex = i * gridSize + (col - 1);
                const cell = gridContainer.children[cellIndex];
                if (cell && letter === letter.toUpperCase() && letter !== " ") {
                    cell.value = letter;
                    cell.disabled = true;
                    cell.classList.add("prefilled");
                }
            }
        }
    });
}

// Puzzle search input handler
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
