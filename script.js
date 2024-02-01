//etch-a-sketch

const gridContainer = document.querySelector(`#gridContainer`);
const gridButton = document.querySelector(`#gridButton`);
const eraseButton = document.querySelector(`#eraseButton`);
const resetButton = document.querySelector(`#resetButton`);
const rainbowButton = document.querySelector(`#rainbowButton`);
let gridNumber = 16;

gridButton.addEventListener(`click`, ()=>{
    const userInput = prompt(`Enter a Value between 2 - 64`);
    if (userInput > 64 || userInput < 2) {
        alert(`You have to enter a value between 2 - 64`);
        userInput = prompt(`Enter a Value between 2 - 64`);
    }
    else {
        gridNumber = userInput;
        removeDiv();
        gridDisplay();
    }
});
function gridDisplay(){
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
            resetButton.addEventListener(`click`, ()=>{
                gridY.style.backgroundColor = `#000000`;
            });
            eraseButton.addEventListener(`click`, ()=>{
                gridY.addEventListener(`mouseenter`, ()=>{
                    gridY.style.backgroundColor = `#000000`;
                });
            });
            rainbowButton.addEventListener(`click`, ()=>{
                gridY.addEventListener('mouseenter', ()=>{
                    let randomColor = Math.floor(Math.random()*16777215).toString(16);
                    let rgbValue = "#" + randomColor;
                    gridY.style.backgroundColor = rgbValue;
                });
            });

        }
    }
}
const removeDiv = ()=> {
    gridContainer.innerHTML = "";
};

gridDisplay();


