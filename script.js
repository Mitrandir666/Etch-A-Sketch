const containerSize = 750 //container size 750 x 750 px
let gridResolution = 8; // default grid resolution

const gridField = document.querySelector("#gridField");
const settingsField = document.querySelector("#settingsField");
const slider = document.querySelector('#slider');
const sliderValue = document.querySelector('#sliderValue');


slider.addEventListener('input', setGrid);

setGrid();
makeGrid();


function setGrid(){
    sliderValue.innerText = slider.value;
    gridResolution = slider.value;
    makeGrid();
}


function makeGrid(){
    gridField.innerHTML = '';// czysci poprzednie siatki aby ich nie nadpisywac tylko zaczynac od pustego i czystego pola
    for (let i=1; i<= gridResolution; i++){// tworzy poziome kontenery dla pojedynczych komorek
        let gridRow = document.createElement("div");
        gridRow.classList.add("gridRow");
        gridRow.style.height = (containerSize / gridResolution)-1 + "px";
        gridRow.style.borderBottom = "1px solid black";
        gridRow.style.display = "flex";
        gridField.appendChild(gridRow);

        for (let j=1; j<=gridResolution; j++){// tworzy pojedyncze komorki w poziomych kontenerach
            let singleCell = document.createElement("div");
            singleCell.classList.add("singleCell");
            singleCell.style.height = (containerSize / gridResolution) - 1 + "px";
            singleCell.style.width = (containerSize / gridResolution) - 1 + "px";
            singleCell.style.borderLeft = "1px solid black";
            gridRow.appendChild(singleCell);
        };
    };
};