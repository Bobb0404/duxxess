// puzzles.js
// Duxxess Square puzzle data

const puzzles = {
    "DS0001B": {
        size: 3,
        clues: {
            "R1C1": "B", "R1C3": "A",
            "R3C1": "D", "R3C3": "E"
        },
        words: ["BAD", "ACE", "BED", "DAB", "CAB", "ACE", "BED", "BAD"]
    },
    "DS0001R": {
        size: 5,
        clues: {
            "R1C1": "H", "R1C3": "O", "R1C5": "P",
            "R3C1": "E", "R3C5": "E",
            "R5C1": "R", "R5C3": "O", "R5C5": "D"
        },
        words: ["HOPE", "RODE", "HERD", "PORE", "REDO", "DOER", "HOPED", "ROPE"]
    },
    "DS0001E": {
        size: 7,
        clues: {
            "R1C1": "M", "R1C3": "A", "R1C5": "S", "R1C7": "T",
            "R3C1": "E", "R3C7": "R",
            "R5C1": "P", "R5C7": "S",
            "R7C1": "L", "R7C3": "A", "R7C5": "N", "R7C7": "E"
        },
        words: ["MASTER", "PLANES", "REACT", "STONE", "MAPLES", "CLEAN", "PLANTS", "SMARTEN"]
    }
};
