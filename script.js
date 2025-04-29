const body = document.querySelector('body');
const header = document.createElement('header');
body.appendChild(header);
const grid = document.createElement('div');
body.appendChild(grid);
const prompt = document.createElement('p');
prompt.textContent = 'Enter a grid size:';
header.appendChild(prompt);
const gridEntry = document.createElement('input');
header.appendChild(gridEntry);
const button = document.createElement('button');
button.textContent = 'Reset'
header.appendChild(button)
const errorMessage = document.createElement('p');
header.appendChild(errorMessage);

let gridSize = 16;

let createColumn = (grid, size) => {
    const column = document.createElement('div');
    column.classList.add('column'); 
    for (let i = 0; i < size; i++){
        const square = document.createElement('div');
        square.classList.add('square')
        column.appendChild(square);
    }
    grid.appendChild(column);
}

let createGrid = (grid, size) => {
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild)
    }

    for (let i = 0; i < size; i++){
        createColumn(grid, size);
    }
}

let pixelInitializer = () => {
    const pixels = document.querySelectorAll('.square, .hoveredsquare');

    pixels.forEach(div => div.addEventListener('mouseover', (e) => {
        div.classList.remove('square');
        div.classList.add('hoveredsquare');
    }));
}

createGrid(grid, gridSize);
pixelInitializer();

button.addEventListener('click', (e) => {
    newSize = gridEntry.value;
    console.log(newSize);
    if (newSize > 0 && newSize <= 100){
        errorMessage.textContent = '';
        createGrid(grid, newSize);
        pixelInitializer();
    } else {
        errorMessage.textContent = 'Max grid size is 100.';
    }
})


