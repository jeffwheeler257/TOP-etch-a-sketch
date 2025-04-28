const grid = document.querySelector('div');
const gridSize = 16;

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
    for (let i = 0; i < size; i++){
        createColumn(grid, size);
    }
}

createGrid(grid, gridSize);