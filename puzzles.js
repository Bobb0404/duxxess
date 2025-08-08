// Puzzle data indexed by puzzle ID
// Each puzzle includes grid size, clues, and initial letters (optional)

const puzzles = {
  "DS0001B": {
    size: 3,
    letters: [
      "B", "A", "D",
      "E", "N", "D",
      "B", "Y", "E"
    ],
    across: [
      "BaD",
      "EnD"
    ],
    down: [
      "ByE",
      "DaD"
    ]
  },

  "DS0002B": {
    size: 3,
    letters: [
      "L", "E", "G",
      "D", "I", "G",
      "L", "I", "D"
    ],
    across: [
      "LeG",
      "DiG"
    ],
    down: [
      "LiD",
      "GiG"
    ]
  },

  "DS0001R": {
    size: 5,
    letters: [
      "C", "R", "E", "E", "P",
      "N", "O", "R", "E", "D",
      "S", "I", "L", "E", "N",
      "T", "L", "A", "N", "E",
      "R", "O", "A", "S", "T"
    ],
    across: [
      "CREEP",
      "NORED",
      "SILEN",
      "TLANE",
      "ROAST"
    ],
    down: [
      "CNSTR",
      "RIOLA",
      "ELLAO",
      "EENAN",
      "PDNTE"
    ]
  }
};
