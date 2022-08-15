const gridContainer = document.querySelector('.container');
const resetBtn = document.getElementById('reset-btn');
const colorPrompt = document.querySelector('color')
let square;
let pickedColor = "blue";

function createGrid(size) { // works
    for (let i = 0; i < size; i++) {
      for(let j = 0; j < size; j++) {
        let square = document.createElement("div");
        gridContainer.appendChild(square);
        square.className = 'grid-square';
      }
    }
    gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    changeColor();
}

function clearGrid() { // works
  gridContainer.textContent = '';
  let newsize = prompt("What size do you want the grid? : ");
  createGrid(newsize);
}

function changeColor() {
  console.log("greg");
  let cells = Array.from(document.querySelectorAll('.grid-square'));
  cells.forEach(cell => cell.addEventListener('mouseover', () => {
    cell.style.backgroundColor = pickedColor;
  }))
}

// THINGS TO ADD
// - Eraser
// - RAINBOW
//
//createGrid(20);

//resetBtn.addEventListener('click', clearGrid);

document.addEventListener('DOMContentLoaded', () => {
    createGrid(16);
    resetBtn.addEventListener('click', clearGrid);
});
