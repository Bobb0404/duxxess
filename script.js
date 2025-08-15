document.addEventListener("DOMContentLoaded", function () {
    const gridContainer = document.getElementById("grid");
    const puzzleIdInput = document.getElementById("puzzle-id");
    const loadPuzzleButton = document.getElementById("load-puzzle");

    // Example puzzles (replace with your full set)
    const puzzles = {
        "DS0001B": {
            size: 3,
            clues: {
                "R1C1": "B", "R1C3": "D",
                "R3C1": "E", "R3C3": "D"
            }
        },
        "DS0002B": {
            size: 3,
            clues: {
                "R1C1": "L", "R1C3": "G",
                "R3C1": "D", "R3C3": "G"
            }
        }
    };

    function createGrid(size, clues) {
        gridContainer.innerHTML = "";
        gridContainer.style.gridTemplateColumns = `repeat(${size}, 50px)`;
        gridContainer.style.gridTemplateRows = `repeat(${size}, 50px)`;

        for (let r = 1; r <= size; r++) {
            for (let c = 1; c <= size; c++) {
                const cell = document.createElement("div");
                cell.classList.add("cell");

                // Kamili milestone rule:
                if (r % 2 === 0 && c % 2 === 0) {
                    cell.classList.add("shaded");
                } else {
                    cell.classList.add("editable");
                    const input = document.createElement("input");
                    input.maxLength = 1;
                    input.classList.add("cell-input");

                    const clueKey = `R${r}C${c}`;
                    if (clues[clueKey]) {
                        input.value = clues[clueKey];
                        input.disabled = true;
                        input.classList.add("clue");
                    }

                    cell.appendChild(input);
                }

                gridContainer.appendChild(cell);
            }
        }
    }

    function loadPuzzle(id) {
        const puzzle = puzzles[id];
        if (puzzle) {
            createGrid(puzzle.size, puzzle.clues);
        } else {
            alert("Puzzle not found");
        }
    }

    loadPuzzleButton.addEventListener("click", function () {
        const id = puzzleIdInput.value.trim();
        loadPuzzle(id);
    });

    // Load default puzzle
    loadPuzzle("DS0001B");
});
