// Create the grid following Kamili milestone shading rules
function createGrid(size, clues) {
    const grid = document.getElementById("grid");
    grid.innerHTML = "";
    grid.style.display = "grid";
    grid.style.gridTemplateColumns = `repeat(${size}, 50px)`;
    grid.style.gridTemplateRows = `repeat(${size}, 50px)`;

    for (let r = 0; r < size; r++) {
        for (let c = 0; c < size; c++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");

            // Kamili milestone shading
            if ((r + 1) % 2 === 0 && (c + 1) % 2 === 0) {
                cell.classList.add("shaded");
            } else {
                cell.classList.add("editable");
            }

            // Add clue letter if present
            const key = `${r},${c}`;
            if (clues[key]) {
                cell.textContent = clues[key];
            }

            grid.appendChild(cell);
        }
    }
}

// Load puzzle by ID
function loadPuzzle(id) {
    console.log("Loading puzzle:", id);
    const puzzle = puzzles[id];
    if (!puzzle) {
        alert("Puzzle not found!");
        return;
    }
    createGrid(puzzle.size, puzzle.clues);
}

// Load puzzle from search box
function loadPuzzleFromSearch() {
    const id = document.getElementById("puzzle-id").value.trim();
    loadPuzzle(id);
}

// Load default puzzle on page open
window.onload = function() {
    loadPuzzle("DS0001B");
};
