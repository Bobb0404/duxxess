const grid = document.querySelector('.grid');

for (let row = 1; row <= 7; row++) {
  for (let col = 1; col <= 7; col++) {
    const cell = document.createElement('input');
    cell.setAttribute('maxlength', '1');
    cell.classList.add('cell');

    const isRowEven = row % 2 === 0;
    const isColEven = col % 2 === 0;

    if (isRowEven && isColEven) {
      cell.classList.add('shaded');
      cell.setAttribute('disabled', 'true');
    } else {
      cell.classList.add('editable');
    }

    grid.appendChild(cell);
  }
}
