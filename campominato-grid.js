
const main = document.querySelector("main");

let startGame = document.querySelector(".play");
let points = 0;

startGame.addEventListener("click",
    function () {

        /* creiamo spazio vuoto */

        main.innerHTML = "";

        /* creo il contenitore della griglia */

        const gridContainer = `<div id="grid"></div>`;
        main.innerHTML += gridContainer;


        /* creo il contatore dei punti */
        const pointsContainer = `<div id="pointscontainer"></div>`;
        main.innerHTML += pointsContainer;

        const pointsContainerHtml = document.querySelector("#pointscontainer");
        const divpoints = `<div class="points">points:<div class="points-values">0</div></div> <div class="results">results:</div>`
        pointsContainerHtml.innerHTML += divpoints;

        //reset points
        points = 0

        /* seleziono il container di grid */

        const container = document.querySelector("#grid");

        /* arrey numeri da 1 a 100 */

        let gridElements = getGridElements(1, 100)


        /* creo i quadrati che comporranno la griglia */

        for (let i = 0; i < gridElements.length; i++) {

            const gridElement = gridElements[i];

            /* richiamo la funzione per creare una casella  */
            const square = createSquare("div", gridElement);
            container.append(square);

        }

    })


/* Funzioni */

//crea la casella
function createSquare(div, element) {

    // creo il container della casella
    const squareContainer = document.createElement(div);
    squareContainer.classList.add('square');

    // creo il contenuto della casella
    const squareContent = document.createElement("span");
    squareContent.append(element);

    // aggiungo il valore alla casella e la rendo invisibile
    squareContainer.append(squareContent);
    squareContent.classList.add("dispalynone");

    // aggiungo il listener per ogni casella
    squareContainer.addEventListener("click", function (event) {

        const squareValue = event.target.children[0].innerText

        if (squareValue === '💣') {

            squareContainer.classList.add("background_red");
            squareContent.classList.add("dispalyactive");

            const points = document.querySelector(".results")
            const divpoints = `<div class = "gameover"> Hai perso!!</div>`
            points.innerHTML += divpoints;

            
        

        } else {

            squareContainer.classList.add("background_blue");
            squareContent.classList.add("dispalyactive");

            points += 1

            const pointsDiv = document.querySelector(".points-values")
            pointsDiv.innerHTML = points;

        }


    });

    return squareContainer

}


//crea un array di numeri e bombe
function getGridElements(min, max) {

    const gridElements = []
    const bombs = getArrayOfBombs(16)

    for (let i = min; i <= max; i++) {

        if (bombs.includes(i)) {
            gridElements.push('💣')
        } else {
            gridElements.push(i)
        }

    }

    console.log(gridElements)

    return gridElements;

}


//crea un array di bombe 
function getArrayOfBombs(numOfBombs) {

    const arrayOfBombs = []

    while (arrayOfBombs.length < numOfBombs) {

        const newBomb = getRandomNumber(1, 100);

        if (!arrayOfBombs.includes(newBomb)) {
            arrayOfBombs.push(newBomb)
        }

    }

    return arrayOfBombs;

}


//genera numero random da min a max
function getRandomNumber(min, max) {
    return min + Math.floor(Math.random() * (max - min));
}

