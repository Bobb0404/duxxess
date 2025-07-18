const gridContainer = document.getElementById("grid-container");

// Fill 7x7 grid using your shading rule (odd rows/cols editable)
for (let row = 1; row <= 7; row++) {
  for (let col = 1; col <= 7; col++) {
    const cell = document.createElement("input");
    cell.type = "text";
    cell.maxLength = 1;
    cell.classList.add("cell");

    const isOdd = (n) => n % 2 !== 0;
    const editable = isOdd(row) || isOdd(col);

    if (isOdd(row) && isOdd(col)) {
      cell.classList.add("editable");
    } else {
      cell.classList.add("shaded");
      cell.disabled = true;
    }

    gridContainer.appendChild(cell);
  }
}
