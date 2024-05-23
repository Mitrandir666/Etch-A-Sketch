const containerSize = 750 //container size 750 x 750 px
let gridResolution = 8; // default grid resolution

const gridField = document.querySelector("#gridField");
const settingsField = document.querySelector("#settingsField");
const slider = document.querySelector('#slider');
const sliderValue = document.querySelector('#sliderValue');
const blackColorButton = document.querySelector('#blackColorButton');
const opacityBlackColorButton = document.querySelector('#opacityBlackColorButton');
const rainbowColorButton = document.querySelector('#rainbowColorButton');



slider.addEventListener('input', setGrid);

setGrid();
makeGrid();



function setGrid(){//funkcja ustawia i wyswietla wartosc suwaka oraz aktualizuje wartosc zmiennej gridResolution
    sliderValue.innerText = slider.value;//tekst obok suwaka 8-100
    gridResolution = slider.value;// aktualizuje wartosc zmiennej przechowujacej wymiary siatki
    makeGrid();// nastepnie na podstawie wartosci zmiennej gridResolution tworzy nowa siatke
}


function makeGrid(){
    gridField.innerHTML = '';// czysci poprzednie siatki aby ich nie nadpisywac tylko zaczynac od pustego i czystego pola
    for (let i=1; i<= gridResolution; i++){// tworzy poziome kontenery dla pojedynczych komorek
        let gridRow = document.createElement("div");
        gridRow.classList.add("gridRow");
        gridRow.style.height = (containerSize / gridResolution) + "px";
        
        gridRow.style.display = "flex";
        gridField.appendChild(gridRow);

        for (let j=1; j<=gridResolution; j++){// tworzy pojedyncze komorki w poziomych kontenerach
            let singleCell = document.createElement("div");
            singleCell.classList.add("singleCell");
            singleCell.style.height = (containerSize / gridResolution) + "px";
            singleCell.style.width = (containerSize / gridResolution) + "px";
            
            gridRow.appendChild(singleCell);

                //rysowanie tylko zwyklego czarnego tracka:
                blackColorButton.addEventListener('click', function(){
                    singleCell.addEventListener('mouseenter', function(){
                        singleCell.style.backgroundColor = "black";
                    });
                });

                //rysowanie czarnego tracka z opacity
                opacityBlackColorButton.addEventListener('click', function(){
                  let opacity = 0.0;
                    singleCell.addEventListener('mouseenter', function(){
                        opacity+=0.1;
                        opacity = Math.min(1, opacity);//ograniczenie opacity do 1
                        singleCell.style.backgroundColor = `rgba(0,0,0,${opacity})`;
                    });
                });

                //rysowanie losowym kolorem
                rainbowColorButton.addEventListener('click', function(){
                    singleCell.addEventListener('mouseenter', function(){
                        let red = Math.floor(Math.random()*256);
                        let green = Math.floor(Math.random()*256);
                        let blue = Math.floor(Math.random()*256);
                        singleCell.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
                    });
                });
                
        };
    };
};