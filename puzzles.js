// puzzles.js

const puzzles = {
    DS0001B: {
        size: 3,
        clues: [
            { row: 1, col: 1, letter: 'B' },
            { row: 1, col: 2, letter: 'a' },
            { row: 1, col: 3, letter: 'D' },
            { row: 2, col: 1, letter: 'E' },
            { row: 2, col: 3, letter: 'N' },
            { row: 3, col: 1, letter: 'B' },
            { row: 3, col: 3, letter: 'E' }
        ],
        words: ["BAD", "END", "BYE", "DAD"]
    },

    DS0002B: {
        size: 3,
        clues: [
            { row: 1, col: 1, letter: 'L' },
            { row: 1, col: 2, letter: 'e' },
            { row: 1, col: 3, letter: 'G' },
            { row: 2, col: 1, letter: 'D' },
            { row: 2, col: 3, letter: 'G' },
            { row: 3, col: 1, letter: 'L' },
            { row: 3, col: 3, letter: 'G' }
        ],
        words: ["LEG", "DIG", "LID", "GIG"]
    },

    DS0001R: {
        size: 5,
        clues: [
            { row: 1, col: 1, letter: 'C' },
            { row: 1, col: 2, letter: 'R' },
            { row: 1, col: 3, letter: 'E' },
            { row: 1, col: 4, letter: 'E' },
            { row: 1, col: 5, letter: 'P' },
            { row: 2, col: 1, letter: 'N' },
            { row: 2, col: 3, letter: 'O' },
            { row: 3, col: 1, letter: 'R' }
        ],
        words: ["CREEP", "NOR", "CORE", "PEER", "CROP"]
    }
};
