function loadPuzzleById() {
  const id = document.getElementById("puzzle-id").value.toUpperCase();
  let gridSize = 3;

  if (id.endsWith("B")) gridSize = 3;
  else if (id.endsWith("R") || id.endsWith("I")) gridSize = 5;
  else if (id.endsWith("E") || id.endsWith("M")) gridSize = 7;
  else {
    alert("Invalid Puzzle ID format");
    return;
  }

  renderGrid(gridSize);
}

function renderGrid(size) {
  const table = document.getElementById("grid");
  table.innerHTML = "";

  for (let r = 1; r <= size; r++) {
    const row = table.insertRow();
    for (let c = 1; c <= size; c++) {
      const cell = row.insertCell();

      if (r % 2 === 0 && c % 2 === 0) {
        cell.className = "shaded";
        cell.textContent = "";
      } else {
        const input = document.createElement("input");
        input.maxLength = 1;
        input.style.width = "100%";
        input.style.height = "100%";
        input.style.border = "none";
        input.style.textAlign = "center";
        cell.appendChild(input);
      }
    }
  }
}
