const gridContainer = document.querySelector('.container');
const resetBtn = document.getElementById('reset-btn');
const rainbowBtn = document.getElementById('rainbow');
const eraserBtn = document.getElementById('eraser');
const blackBtn = document.getElementById('black-btn');
const customHex = document.getElementById('custom-hex');
let square;
let pickedColor = "black";

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
  changeColor("#000000")
}

function changeColor(color) {
  //console.log("greg");
  let cells = Array.from(document.querySelectorAll('.grid-square'));
  cells.forEach(cell => cell.addEventListener('mouseover', () => {
    cell.style.backgroundColor = color;
  }))
}

function randomColor() {
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    let pickedColor = randomColor;
    console.log(typeof randomColor);
    changeColor("#" + randomColor);

}

function customColor() { // works
  let color = prompt("Enter hex code: ");
  changeColor(color)
}

function eraser() {
  let cells = Array.from(document.querySelectorAll('.grid-square'));
  cells.forEach(cell => cell.addEventListener('mouseover', () => {
    cell.style.backgroundColor = "white";
  }))
}

function blackDefault() {
  let cells = Array.from(document.querySelectorAll('.grid-square'));
  cells.forEach(cell => cell.addEventListener('mouseover', () => {
    cell.style.backgroundColor = "#000000";
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
    changeColor("#000000")
    resetBtn.addEventListener('click', clearGrid);
    blackBtn.addEventListener('click', blackDefault);
    customHex.addEventListener('click', customColor);
    rainbowBtn.addEventListener('click', randomColor);
    eraserBtn.addEventListener('click', eraser);
});
