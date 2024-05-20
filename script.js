const containerSize = 750 //container size 750 x 750 px
let gridResolution = 6; // default grid resolution

const gridField = document.querySelector("#gridField");

// na razie petla testowa bez funkcji
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
    }
};