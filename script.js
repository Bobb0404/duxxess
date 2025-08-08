// script.js
// Handles loading puzzles, applying Kamili shading, and search functionality

document.addEventListener("DOMContentLoaded", () => {
    const puzzleIdInput = document.getElementById("puzzleIdInput");
    const loadPuzzleBtn = document.getElementById("loadPuzzleBtn");

    function applyKamiliShading(size) {
        const cells = document.querySelectorAll(".grid-cell");
        cells.forEach(cell => {
            const r = parseInt(cell.dataset.row);
            const c = parseInt(cell.dataset.col);
            if (r % 2 === 0 && c % 2 === 0) {
                cell.classList.add("shaded");
                cell.contentEditable = false;
            } else {
                cell.classList.remove("shaded");
                cell.contentEditable = true;
            }
        });
    }

    function loadPuzzle(id) {
        const puzzle = puzzles[id];
        if (!puzzle) {
            alert("Puzzle not found!");
            return;
        }

        const gridContainer = document.getElementById("grid");
        gridContainer.innerHTML = "";

        for (let r = 1; r <= puzzle.size; r++) {
            for (let c = 1; c <= puzzle.size; c++) {
                const cell = document.createElement("div");
                cell.classList.add("grid-cell");
                cell.dataset.row = r;
                cell.dataset.col = c;

                const key = `R${r}C${c}`;
                if (puzzle.clues[key]) {
                    cell.textContent = puzzle.clues[key];
                    cell.contentEditable = false;
                    cell.classList.add("prefill");
                } else {
                    cell.textContent = "";
                }

                gridContainer.appendChild(cell);
            }
        }

        gridContainer.style.gridTemplateColumns = `repeat(${puzzle.size}, 40px)`;
        gridContainer.style.gridTemplateRows = `repeat(${puzzle.size}, 40px)`;

        applyKamiliShading(puzzle.size);
    }

    // Load default puzzle
    loadPuzzle("DS0001B");

    // Search box functionality
    loadPuzzleBtn.addEventListener("click", () => {
        const id = puzzleIdInput.value.trim();
        if (id) loadPuzzle(id);
    });
});
