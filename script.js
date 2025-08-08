// script.js

document.addEventListener("DOMContentLoaded", () => {
    const gridContainer = document.getElementById("grid-container");
    const puzzleIdInput = document.getElementById("puzzle-id");
    const loadPuzzleBtn = document.getElementById("load-puzzle");

    // Load default puzzle on page load
    loadPuzzle("DS0001B");

    loadPuzzleBtn.addEventListener("click", () => {
        const puzzleId = puzzleIdInput.value.trim().toUpperCase();
        loadPuzzle(puzzleId);
    });

    function loadPuzzle(puzzleId) {
        const puzzle = getPuzzleById(puzzleId);
        if (!puzzle) {
            alert("Puzzle not found!");
            return;
        }
        renderGrid(puzzle);
    }

    function renderGrid(puzzle) {
        gridContainer.innerHTML = "";
        const size = puzzle.size;

        const table = document.createElement("table");
        table.classList.add("duxxess-grid");

        for (let row = 1; row <= size; row++) {
            const tr = document.createElement("tr");
            for (let col = 1; col <= size; col++) {
                const td = document.createElement("td");

                if (row % 2 === 0 && col % 2 === 0) {
                    td.classList.add("shaded");
                } else {
                    td.contentEditable = true;
                    td.classList.add("editable");

                    const clue = puzzle.clues[`${row},${col}`];
                    if (clue) {
                        td.textContent = clue;
                        td.classList.add("clue");
                        td.contentEditable = false;
                    }
                }
                tr.appendChild(td);
            }
            table.appendChild(tr);
        }
        gridContainer.appendChild(table);
    }
}
);
