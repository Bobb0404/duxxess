document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('puzzle-id-input');
  const select = document.getElementById('puzzle-id-select');
  const container = document.getElementById('grid-container');

  // ✅ Updated puzzle list
  const puzzleList = ['DS0001B', 'DS0002B'];

  // ✅ Show matching IDs in dropdown
  input.addEventListener('input', () => {
    const q = input.value.toUpperCase().trim();
    select.innerHTML = '';
    puzzleList
      .filter(id => id.includes(q))
      .forEach(id => {
        const opt = document.createElement('option');
        opt.value = id;
        opt.text = id;
        select.appendChild(opt);
      });

    // ✅ Auto-select first result if available
    if (select.options.length > 0) {
      select.selectedIndex = 0;
      loadPuzzleGrid(select.value);
    } else {
      container.innerHTML = ''; // Clear grid if no match
    }
  });

  // ✅ Allow manual selection to trigger load
  select.addEventListener('change', () => {
    const id = select.value;
    if (id) loadPuzzleGrid(id);
  });

  // ✅ Load grid with Kamili sacred rules
  function loadPuzzleGrid(id) {
    container.innerHTML = '';
    let size = 3;
    if (id.endsWith('R') || id.endsWith('I')) size = 5;
    else if (id.endsWith('E') || id.endsWith('M')) size = 7;

    const table = document.createElement('table');
    table.className = 'grid-table';

    for (let r = 1; r <= size; r++) {
      const row = document.createElement('tr');

      for (let c = 1; c <= size; c++) {
        const td = document.createElement('td');
        const isShaded = (r % 2 === 0) && (c % 2 === 0); // Kamili rule
        td.className = isShaded ? 'shaded-cell' : 'editable-cell';

        if (!isShaded) {
          const input = document.createElement('input');
          input.type = 'text';
          input.maxLength = 1;
          td.appendChild(input);
        }

        row.appendChild(td);
      }

      table.appendChild(row);
    }

    container.appendChild(table);
  }
});

function renderGrid(size) {
  const grid = document.getElementById("grid");
  grid.innerHTML = "";

  // Remove previous size class
  grid.classList.remove("grid-3x3", "grid-5x5", "grid-7x7");

  // Apply correct grid class
  if (size === 3) grid.classList.add("grid-3x3");
  else if (size === 5) grid.classList.add("grid-5x5");
  else if (size === 7) grid.classList.add("grid-7x7");

  for (let r = 0; r < size; r++) {
    for (let c = 0; c < size; c++) {
      const cell = document.createElement("div");
      cell.className = "cell";

      // Kamili shading rule: shade where both row and column are even-numbered (starting from 1)
      if ((r + 1) % 2 === 0 && (c + 1) % 2 === 0) {
        cell.classList.add("shaded");
        cell.textContent = "";
      } else {
        const input = document.createElement("input");
        input.maxLength = 1;
        cell.appendChild(input);
      }

      grid.appendChild(cell);
    }
  }
}
