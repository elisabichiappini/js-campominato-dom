/***************************************************************
FILE JAVASCRIPT
***************************************************************/

'use strict';
// FASE 1
// 1- Struttura gioco inizializzata HTML e Css (Header e Footer);
// 2- Griglia: struttura celle innestata con Javascript: rappresentazione 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
    /*  <div class="box-celle d-flex flex-wrap text-center align-start">
            <div class="cella">1</div>
            <div class="cella">2</div>
            <div class="cella">3</div>
            <div class="cella">4</div>
            <div class="cella">5</div>
            <div class="cella">6</div>
            <div class="cella">7</div>
            <div class="cella">8</div>
            <div class="cella">9</div>
            <div class="cella">10</div>
            <div class="cella">11</div>
            <div class="cella">12</div>
            <div class="cella">13</div>
            <div class="cella">14</div>
        </div>  */
// 3- Se gamer clicca su bottonePlay allora campoMinato add classe active;
// 4- Se gamer clicca su cellaCampo, allora cellaCampo cambia colore (azzurro) + stampo in console numero cellaCampo su cui ho cliccato.



//                          FUNCTIONS

// generatore elementi in DOM
function generatoreElementiDom (tag, className, content) {
    const elementoDom = document.createElement(tag);
    elementoDom.classList.add(className);
    elementoDom.append(content);
    return elementoDom;
}

//funzione calcolo logica del cellNumber
function setCellNumber(level) {
    let cellNumber;
    switch (level) {
        case 'intermedio':
            cellNumber = 81;
            break;
        case 'pro':
            cellNumber = 49;
            break;
        case 'principiante':
        default:
            cellNumber = 100;
            break;
    }
    return cellNumber;
}

//funzione creazione della board in base al livello scelto dall'utente
function createBoard (mainElement, cellNumber) {
    const celle = Math.sqrt(cellNumber);

    const fragment = document.createDocumentFragment();
    for(let i = 1; i <= cellNumber; i++) {
        //invocata funzione (generatore elementi in DOM) in altra funzione
        const myElementDom = generatoreElementiDom('div', 'cella', i);
        // myElementDom.style.width = `calc(100% / ${celle})`;
        // myElementDom.style.height = myElementDom.style.width;
        myElementDom.classList.add(`cella-${celle}`);
        fragment.append(myElementDom);
        myElementDom.addEventListener('click', 
        function() {
            myElementDom.classList.add('blu')
            console.log(i);
        })
    }
    mainElement.append(fragment);
};


// campominato
function campoMinato () {
    console.log(textPlay);
    textPlay.classList.add('d-none');
    console.log('ho cliccato play');
    let level = 'pro'; //TODO SELECT INPUT UTENTE
    const cellNumber = setCellNumber(level);
    console.log(cellNumber);
    createBoard(boxCelle, cellNumber);
};


//                          OPERATIONS

//Global scope
const celleLivello1 = 100;


// Js e Dom
const gridGame = document.getElementById('bottom-board');

const boxCelle = document.createElement('div');

const playButton = document.querySelector('input.play');

const resetButton = document.querySelector('input.reset');

const textPlay = document.querySelector('.play-text');

boxCelle.classList.add('box-celle','d-flex', 'flex-wrap', 'text-center', 'align-start');

gridGame.append(boxCelle);

playButton.addEventListener('click', campoMinato);





// FASE 2
// - bottonePlay genera 16 numeri random (arrayBomba[]) per ciascun livelloGioco (Attenzione: 1 cella 1 bomba,ossia arrayBomba 16 numeri !==).
// - Se gamerCm click cella === arrayBomba[] allora, "abbiamo calpestato una bomba", elemento add class gameOver(bg rosso), Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
// - end quando gamer click su cellaBomba OR n click === (livellocella-celleBomba) allora stampo console e DOM punteggio === n click Cella.


