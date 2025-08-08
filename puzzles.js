/* ==============================
   Duxxess Puzzles Data
   ============================== */
/*
Format reminder:
- id: puzzle code (e.g., DS0001B)
- size: grid size (3, 5, or 7)
- clues: object with "across" and "down" arrays of {row,col,word}
- solution: list of 8 target words (for validation)
*/

const puzzles = [
  {
    id: "DS0001B",
    size: 3,
    clues: {
      across: [
        { row: 1, col: 1, word: "CAT" },
        { row: 3, col: 1, word: "SUN" }
      ],
      down: [
        { row: 1, col: 1, word: "CAR" },
        { row: 1, col: 3, word: "TEN" }
      ]
    },
    solution: ["CAT", "SUN", "CAR", "TEN", "CUT", "SIR", "CAN", "RUN"]
  },
  {
    id: "DS0002R",
    size: 5,
    clues: {
      across: [
        { row: 1, col: 1, word: "HOUSE" },
        { row: 3, col: 1, word: "RIVER" },
        { row: 5, col: 1, word: "PLANT" }
      ],
      down: [
        { row: 1, col: 1, word: "HORSE" },
        { row: 1, col: 3, word: "ULTRA" },
        { row: 1, col: 5, word: "ENTER" }
      ]
    },
    solution: [
      "HOUSE", "RIVER", "PLANT",
      "HORSE", "ULTRA", "ENTER",
      "HOVER", "REACT"
    ]
  },
  {
    id: "DS0003E",
    size: 7,
    clues: {
      across: [
        { row: 1, col: 1, word: "FREEDOM" },
        { row: 3, col: 1, word: "BALANCE" },
        { row: 5, col: 1, word: "GARDENS" },
        { row: 7, col: 1, word: "MARKETS" }
      ],
      down: [
        { row: 1, col: 1, word: "FABRICS" },
        { row: 1, col: 3, word: "RENEWAL" },
        { row: 1, col: 5, word: "ENDLESS" },
        { row: 1, col: 7, word: "DESERTS" }
      ]
    },
    solution: [
      "FREEDOM", "BALANCE", "GARDENS", "MARKETS",
      "FABRICS", "RENEWAL", "ENDLESS", "DESERTS"
    ]
  }
];

/* Utility: Find puzzle by ID */
function getPuzzleById(id) {
  return puzzles.find(p => p.id.toUpperCase() === id.toUpperCase());
}
