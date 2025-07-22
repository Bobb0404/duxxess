function loadPuzzle(id) {
  document.getElementById("puzzle-id").textContent = "Puzzle ID: " + id;
}

window.onload = () => {
  loadPuzzle("DS0001B");
};

document.getElementById("load-btn").onclick = () => {
  loadPuzzle(document.getElementById("search-box").value.trim());
};
