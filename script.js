//etch-a-sketch

const gridContainer = document.querySelector(`#gridContainer`);
const gridNumber = 16;

for (let i = 0; i < gridNumber; i++) {
    const gridX = document.createElement(`div`);
    gridX.classList.add(`gridX`);
    gridContainer.appendChild(gridX);
    for (let j = 0; j < gridNumber; j++) {
        const gridY = document.createElement(`div`);
        gridY.classList.add(`gridY`);
        gridX.appendChild(gridY);
        gridY.addEventListener(`mouseenter`, ()=>{
            gridY.classList.add(`changeColor`);
        });
    }
    
}
