document.addEventListener("DOMContentLoaded", () => {
    const gridContainer = document.getElementById("gridContainer");
    const acrossClues = document.getElementById("acrossClues");
    const downClues = document.getElementById("downClues");

    document.getElementById("loadPuzzleBtn").addEventListener("click", () => {
        const id = document.getElementById("puzzleSearch").value.trim().toUpperCase();
        loadPuzzle(id);
    });

    // Load DS0001B by default
    loadPuzzle("DS0001B");

    function loadPuzzle(id) {
        if (!puzzles[id]) {
            alert("Puzzle not found!");
            return;
        }

        const puzzle = puzzles[id];
        generateGrid(puzzle.size);
        acrossClues.innerHTML = "";
        downClues.innerHTML = "";

        puzzle.across.forEach(clue => {
            addClue(acrossClues, clue.clue);
        });
        puzzle.down.forEach(clue => {
            addClue(downClues, clue.clue);
        });
    }

    function generateGrid(size) {
        gridContainer.innerHTML = "";
        gridContainer.style.gridTemplateColumns = `repeat(${size}, 50px)`;

        for (let row = 1; row <= size; row++) {
            for (let col = 1; col <= size; col++) {
                const cell = document.createElement("input");
                cell.maxLength = 1;
                cell.classList.add("grid-cell");

                if (row % 2 === 0 && col % 2 === 0) {
                    cell.classList.add("shaded");
                    cell.disabled = true;
                } else {
                    cell.classList.add("editable");
                }

                gridContainer.appendChild(cell);
            }
        }
    }

    function addClue(container, clueText) {
        const li = document.createElement("li");
        li.textContent = clueText;
        container.appendChild(li);
    }
});
