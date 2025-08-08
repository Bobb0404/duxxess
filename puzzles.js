// puzzles.js
// Duxxess Puzzles Data

const puzzles = {
    "DS0001B": {
        size: 3,
        clues: [
            ["B", "", "D"],
            ["", "#", ""],
            ["E", "", "Y"]
        ],
        words: ["BAD", "END", "BYE", "BED", "DAY", "BAY", "DEN", "BEY"]
    },

    "DS0002R": {
        size: 5,
        clues: [
            ["E", "", "X", "", "E"],
            ["", "#", "", "#", ""],
            ["C", "", "E", "", "L"],
            ["", "#", "", "#", ""],
            ["L", "", "N", "", "T"]
        ],
        words: ["EXCEL", "LENT", "CELL", "CENT", "TEN", "NET", "LET", "LEX"]
    },

    "DS0003M": {
        size: 7,
        clues: [
            ["S", "", "P", "", "A", "", "R"],
            ["", "#", "", "#", "", "#", ""],
            ["E", "", "A", "", "S", "", "T"],
            ["", "#", "", "#", "", "#", ""],
            ["C", "", "O", "", "A", "", "S"],
            ["", "#", "", "#", "", "#", ""],
            ["T", "", "S", "", "E", "", "A"]
        ],
        words: ["SPAR", "EAST", "COAST", "SEA", "STAR", "COST", "SAT", "ART"]
    }
};

// Default puzzle ID
let currentPuzzleId = "DS0001B";

// Load a puzzle by ID
function loadPuzzle(puzzleId) {
    if (puzzles[puzzleId]) {
        currentPuzzleId = puzzleId;
        renderPuzzle(puzzles[puzzleId]);
    } else {
        alert("Puzzle not found!");
    }
}
