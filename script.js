const puzzles = {
  DS0001B: { size: 3, clues: {/* your DS0001B clues */} },
  DS0002B: { size: 3, clues: {/* DS0002B clues */} },
  // Add more puzzles as needed...
};

const selectEl = document.getElementById("puzzle-select");
const gridContainer = document.getElementById("grid-container");
const nextBtn = document.getElementById("next-btn");
let currentPuzzleId = null;

Object.keys(puzzles).forEach(id => {
  const opt = document.createElement("option");
  opt.value = id;
  opt.textContent = id;
  selectEl.appendChild(opt);
});

selectEl.addEventListener("change", () => {
  const pid = selectEl.value;
  if (pid) loadPuzzle(pid);
});

nextBtn.addEventListener("click", () => {
  if (currentPuzzleId) tryLoadNextPuzzle(currentPuzzleId);
});

function getNextPuzzleId(curr) {
  const m = curr.match(/DS(\d+)([A-Z])/);
  if (!m) return null;
  const num = String(parseInt(m[1],10)+1).padStart(4,"0");
  return `DS${num}${m[2]}`;
}

function tryLoadNextPuzzle(curr) {
  const nextId = getNextPuzzleId(curr);
  if (puzzles[nextId]) {
    selectEl.value = nextId;
    loadPuzzle(nextId);
  } else {
    alert("No more puzzles available 🧩");
  }
}

function loadPuzzle(pid) {
  currentPuzzleId = pid;
  const p = puzzles[pid];
  const size = p.size;
  gridContainer.innerHTML = "";
  gridContainer.className = `grid-${size}x${size}`;

  for (let r = 1; r <= size; r++) {
    for (let c = 1; c <= size; c++) {
      const div = document.createElement("div");
      div.classList.add("grid-cell");
      const isShaded = r % 2 === 0 && c % 2 === 0;
      if (isShaded) {
        div.classList.add("shaded");
      } else {
        const inp = document.createElement("input");
        inp.maxLength = 1;
        const val = p.clues[`${r-1},${c-1}`];
        if (val) inp.value = val;
        div.appendChild(inp);
      }
      gridContainer.appendChild(div);
    }
  }
}

// Optional: detect completion (simple example)
function checkSolved() {
  // custom logic to verify if puzzle is solved
  return false;
}

// If completion detection is added later, trigger:
// if (checkSolved()) setTimeout(() => tryLoadNextPuzzle(currentPuzzleId), 800);
