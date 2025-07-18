let current = 0;
function render() {
  const puzzle = puzzles[current];
  document.getElementById("puzzle-id").innerText = `Puzzle: ${puzzle.id}`;
  const grid = document.getElementById("grid-container");
  grid.innerHTML = "";

  for (let r = 0; r < 7; r++) {
    for (let c = 0; c < 7; c++) {
      const cell = document.createElement("div");
      cell.className = "cell";

      if (r % 2 === 1 && c % 2 === 1) {
        cell.classList.add("shaded");
      } else {
        cell.classList.add("editable");
      }
      grid.appendChild(cell);
    }
  }
}
document.getElementById("prev-btn").onclick = () => { if (current > 0) { current--; render(); } };
document.getElementById("next-btn").onclick = () => { if (current < puzzles.length - 1) { current++; render(); } };
window.onload = render;
