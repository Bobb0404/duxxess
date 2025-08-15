let puzzleKeys = Object.keys(puzzles);
let currentPuzzleIndex = puzzleKeys.findIndex(k => puzzles[k].defaultLoad) || 0;
let currentPuzzleId = puzzleKeys[currentPuzzleIndex];

function createGrid(puzzleId) {
    const puzzle = puzzles[puzzleId];
    const size = puzzle.size;
    const gridData = puzzle.grid;

    const gridContainer = document.getElementById("duxxess-grid");
    gridContainer.innerHTML = "";
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 50px)`;
    gridContainer.style.gridTemplateRows = `repeat(${size}, 50px)`;

    for (let r = 0; r < size; r++) {
        for (let c = 0; c < size; c++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");

            // Shaded cell rule: both row & col even
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

// Button handlers
document.getElementById("load-puzzle").addEventListener("click", () => {
    const searchId = document.getElementById("search-box").value.trim();
    const index = puzzleKeys.indexOf(searchId);
    if(index !== -1) {
        currentPuzzleIndex = index;
        currentPuzzleId = puzzleKeys[currentPuzzleIndex];
        createGrid(currentPuzzleId);
    } else {
        alert("Puzzle not found!");
    }
});

document.getElementById("prev-puzzle").addEventListener("click", () => {
    currentPuzzleIndex = (currentPuzzleIndex - 1 + puzzleKeys.length) % puzzleKeys.length;
    currentPuzzleId = puzzleKeys[currentPuzzleIndex];
    createGrid(currentPuzzleId);
});

document.getElementById("next-puzzle").addEventListener("click", () => {
    currentPuzzleIndex = (currentPuzzleIndex + 1) % puzzleKeys.length;
    currentPuzzleId = puzzleKeys[currentPuzzleIndex];
    createGrid(currentPuzzleId);
});
