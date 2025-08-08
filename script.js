/**
 * Generates the Duxxess grid inside a container element
 * @param {HTMLElement} container The container to fill with grid cells
 * @param {number} size The grid size (3, 5, or 7)
 * @param {Array} puzzleLetters 2D array or flat array of letters or empty strings for initial puzzle letters
 */
function generateDuxxessGrid(container, size, puzzleLetters = []) {
  // Clear existing content
  container.innerHTML = '';

  // Set CSS grid columns for a square grid
  container.style.gridTemplateColumns = `repeat(${size}, 50px)`;

  // We expect puzzleLetters as a flat array of size*size length or 2D array
  // For safety, flatten if needed
  let letters = [];
  if (Array.isArray(puzzleLetters[0])) {
    // 2D array
    for (let r = 0; r < size; r++) {
      for (let c = 0; c < size; c++) {
        letters.push(puzzleLetters[r][c] || '');
      }
    }
  } else {
    letters = puzzleLetters;
  }

  for (let row = 1; row <= size; row++) {
    for (let col = 1; col <= size; col++) {
      // Create cell div
      const cell = document.createElement('div');
      cell.classList.add('cell');

      // Apply shading rule:
      // Editable cells on odd rows and odd cols
      // Shaded cells only where row AND col are even
      if (row % 2 === 0 && col % 2 === 0) {
        // Shaded cell - non editable
        cell.classList.add('shaded');
        cell.textContent = '';
      } else {
        // Editable cell
        cell.classList.add('editable');

        // Create input for letter entry
        const input = document.createElement('input');
        input.type = 'text';
        input.maxLength = 1;

        // Fill letter if provided
        const idx = (row - 1) * size + (col - 1);
        if (letters[idx]) {
          input.value = letters[idx].toUpperCase();
          input.readOnly = true; // if you want prefilled clues non-editable, otherwise remove this line
          input.style.color = 'royalblue';
        }

        // Append input inside cell
        cell.appendChild(input);
      }

      container.appendChild(cell);
    }
  }
}

// Usage example: 
// const gridContainer = document.getElementById('duxxessGrid');
// generateDuxxessGrid(gridContainer, 7, [
//   '', '', '', '', '', '', '',
//   '', '', '', '', '', '', '',
//   '', '', '', '', '', '', '',
//   '', '', '', '', '', '', '',
//   '', '', '', '', '', '', '',
//   '', '', '', '', '', '', '',
//   '', '', '', '', '', '', '',
// ]);
