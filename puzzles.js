// puzzles.js
const puzzles = {
    "DS0001B": {
        size: 3,
        clues: [
            ["B", "", "D"],
            ["", "#", ""],
            ["E", "", "D"]
        ],
        words: ["BAD", "END", "BYE", "BED", "DAD", "BEE", "DEN", "RED"]
    },
    "DS0002R": {
        size: 5,
        clues: [
            ["T", "", "", "", "E"],
            ["", "#", "", "#", ""],
            ["", "", "A", "", ""],
            ["", "#", "", "#", ""],
            ["S", "", "", "", "T"]
        ],
        words: ["TEASE", "START", "SEA", "SET", "EAST", "SAT", "ART", "TEST"]
    },
    "DS0003E": {
        size: 7,
        clues: [
            ["C", "", "", "", "", "", "T"],
            ["", "#", "", "#", "", "#", ""],
            ["", "", "A", "", "R", "", ""],
            ["", "#", "", "#", "", "#", ""],
            ["", "", "E", "", "S", "", ""],
            ["", "#", "", "#", "", "#", ""],
            ["P", "", "", "", "", "", "S"]
        ],
        words: ["CARTERS", "CAPTESS", "CAT", "PET", "CAR", "ART", "REST", "STEP"]
    }
};

let defaultPuzzleId = "DS0001B";
