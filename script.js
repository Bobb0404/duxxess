document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('puzzle-id-input');
  const select = document.getElementById('puzzle-id-select');
  const container = document.getElementById('grid-container');

  const puzzleList = ['DS0001B', 'DS0002B'];

  input.addEventListener('input', () => {
    const q = input.value.toUpperCase().trim();
    select.innerHTML = '';
    puzzleList.filter(id => id.includes(q))
      .forEach(id => {
        const opt = document.createElement('option');
        opt.value = id;
        opt.text = id;
        select.appendChild(opt);
      });
    if (select.options.length > 0) {
      select.selectedIndex = 0;
      loadPuzzleGrid(select.value);
    } else {
      container.innerHTML = '';
    }
  });

  select.addEventListener('change', () => {
    const id = select.value;
    if (id) loadPuzzleGrid(id);
  });

  function loadPuzzleGrid(id) {
    const wrapper = document.querySelector('.grid-wrapper');
    container.innerHTML = '';
    let size = 3;
    if (id === 'DS0002B') size = 3; // Add logic for different IDs if needed
    wrapper.style.width = {3: '40%', 5: '50%', 7: '60%'}[size] || '40%';

    const table = document.createElement('table');
    table.className = 'grid-table';

    for (let r = 1; r <= size; r++) {
      const row = document.createElement('tr');
      for (let c = 1; c <= size; c++) {
        const td = document.createElement('td');
        const isShaded = (r % 2 === 0 && c % 2 === 0);
        td.className = isShaded ? 'shaded-cell' : 'editable-cell';
        if (!isShaded) {
          const inp = document.createElement('input');
          inp.type = 'text';
          inp.maxLength = 1;
          td.appendChild(inp);
        }
        row.appendChild(td);
      }
      table.appendChild(row);
    }

    container.appendChild(table);
  }
});
