
/* creo la funzione per generare al click la griglia */
const main = document.querySelector("main");

let startGame = document.querySelector(".play");

startGame.addEventListener ("click",  
function() {

/* creiamo spazio vuoto */

main.innerHTML = "";

/* creo il contenitore della griglia */

const gridContainer = `<div id="grid"></div>`;
 main.innerHTML += gridContainer;


 /* creo il contatore dei punti */
 const pointsContainer = `<div id="pointscontainer"></div>`;
 main.innerHTML += pointsContainer;
 const points = document.querySelector("#pointscontainer");
 const divpoints = `<div class="points">points:</div> <div class="results">results:</div>`
 points.innerHTML += divpoints;

/* seleziono il container di grid */

 const container = document.querySelector("#grid");

 /* arrey numeri da 1 a 100 */

 let listaNumeriOrdinata = listaNumOrdinata ("1", "84")



 /* creo i quadrati che comporranno la griglia */

 for (let i = 0; i < listaNumeriOrdinata.length; i++) {

    /* richiamo la funzione per creare il div  */
    const newSquare = square("div", "square");

    /* creo lo span che conterrà il numero */

    const newSpan = document.createElement("span"); 
    newSpan.append(listaNumeriOrdinata[i]);
    newSquare.append(newSpan);
    newSpan.classList.add("dispalynone");
    
    
    /* funzione che al click aggiungo classe background e dispalyactive */
    newSquare.addEventListener("click",
    function() {

    newSquare.classList.add("background_blue");
    newSpan.classList.add("dispalyactive");
    const points = document.querySelector(".points")
    let point = 0;
    point ++ ;
    const divpoints = `<div>${point}</div>`

    
    

    points.innerHTML += divpoints;
    console.log(newSpan);
    console.log(point);

    }

    );

    container.append(newSquare);

 }

 /* arrey numeri casuali da 1 a 16 */

 let listaNumeriNonOrdinata = listaNumNonOrdinata ("1", "16")

for (let i = 0; i < listaNumeriNonOrdinata.length; i++) {

    /* richiamo la funzione per creare il div  */
    const newSquare = square("div", "square");

    /* creo lo span che conterrà il numero */

    const newSpan = document.createElement("span"); 
    newSpan.append(listaNumeriNonOrdinata[i]);
    newSquare.append(newSpan);
    newSpan.classList.add("dispalynone");
    
    
    /* funzione che al click aggiungo classe background e dispalyactive */
    newSquare.addEventListener("click",
    function() {

    newSquare.classList.add("background_red");
    newSpan.classList.add("dispalyactive");

    const points = document.querySelector(".results")
    const divpoints = `<div class = "gameover"> Hai perso!!</div>`
    points.innerHTML += divpoints;
    console.log(newSpan);


    }

    );

    container.append(newSquare);

 }
  

})


  




/* Funzioni */

        /* creare la griglia */

function square(div, classAdd) {


    const grid = document.createElement(div);
    grid.classList.add(classAdd);
    return grid
    
}

        /* creare una lista di numeri ordinata  */
function listaNumOrdinata(min, max) {

    const arreyOrdinato = []
    
    for (let i = min; i <= max; i++) {

        arreyOrdinato.push(i)
        
    }
    
    return arreyOrdinato;
} 


     /* creare una lista di numeri casuali */

function listaNumNonOrdinata(min, max) {
    
    const arreyNonOrdinato = [];


    while (arreyNonOrdinato.length < max) {

        const nuovoNum = Math.floor(Math.random() * (max - min +1) + min);

        if (!arreyNonOrdinato.includes(nuovoNum)) {
            arreyNonOrdinato.push(nuovoNum);
        }
    }

    return arreyNonOrdinato

}



