function loadPuzzleById() {
  const id = document.getElementById("puzzle-id").value.toUpperCase();
  let gridSize = 3;

  if (id === "DS0001B") {
    renderGrid(3, [
      ["C", "A", "T"],
      ["P", "A", "T"],
      ["", "", ""]
    ]);
    return;
  }

  if (id.endsWith("B")) gridSize = 3;
  else if (id.endsWith("R") || id.endsWith("I")) gridSize = 5;
  else if (id.endsWith("E") || id.endsWith("M")) gridSize = 7;
  else {
    alert("Invalid Puzzle ID format");
    return;
  }

  renderGrid(gridSize);
}

function renderGrid(size, preset = null) {
  const table = document.getElementById("grid");
  table.innerHTML = "";

  for (let r = 1; r <= size; r++) {
    const row = table.insertRow();
    for (let c = 1; c <= size; c++) {
      const cell = row.insertCell();

      if (r % 2 === 0 && c % 2 === 0) {
        cell.className = "shaded";
      } else {
        const input = document.createElement("input");
        input.maxLength = 1;
        if (preset && preset[r - 1] && preset[r - 1][c - 1]) {
          input.value = preset[r - 1][c - 1];
        }
        cell.appendChild(input);
      }
    }
  }
}
