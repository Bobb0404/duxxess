let currentPuzzleId = "DS0001B";

function createGrid(puzzleId) {
    const gridContainer = document.getElementById("duxxess-grid");
    gridContainer.innerHTML = "";
    const puzzle = puzzles[puzzleId];
    const size = puzzle.size;
    const gridData = puzzle.grid;

    for (let r = 0; r < size; r++) {
        for (let c = 0; c < size; c++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");

            if ((r+1)%2 === 0 && (c+1)%2 === 0) {
                cell.classList.add("shaded");
                cell.textContent = gridData[r][c] || "";
            } else {
                cell.classList.add("editable");
                const input = document.createElement("input");
                input.type = "text";
                input.maxLength = 1;
                input.value = gridData[r][c] || "";
                input.style.width = "90%";
                input.style.height = "90%";
                input.style.textAlign = "center";
                input.style.fontWeight = "bold";
                cell.appendChild(input);
            }

            gridContainer.appendChild(cell);
        }
    }
}

// Initial load
createGrid(currentPuzzleId);

// Buttons
document.getElementById("load-puzzle").addEventListener("click", () => {
    const searchId = document.getElementById("search-box").value.trim();
    if(puzzles[searchId]) {
        currentPuzzleId = searchId;
        createGrid(currentPuzzleId);
    } else {
        alert("Puzzle not found!");
    }
});
