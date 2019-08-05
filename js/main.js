/*----- constants -----*/ 


/*----- app's state (variables) -----*/ 
let board, player, winner, winningNum, wheelNum


/*----- cached element references -----*/ 
let red = [1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36];
let black = [2, 4, 6, 8, 10, 11, 13, 15, 17, 20, 22, 24, 26, 28, 20, 31, 33, 35];
let even = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36];
let odd = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35];


/*----- event listeners -----*/ 
document.querySelector('section.board').addEventListener('click', bet);
//on click input value of bet selected
//on click select 1-18, 19-36, even, odds, red, black, 1st 12, 2nd 12, last 12
//on click reset button reinitialize the board
document.querySelector('section.board').addEventListener('click', timer)
//on click initialize timer after 10 seconds no more bets are allowed.. wait 3 more seconds and show wheelNum
document.querySelector('div.chips').addEventListener('click', value);
//on click selects the chip value selected


/*----- functions -----*/
// init ();

// function init () {
//     board = [
//         [null, 0, 0, null, null],
//         [0, 0, 0, 0, 0]
//         [0, 0, 0, 0, 0]
//         [0, 0, 0, 0, 0]
//         [0, 0, 0, 0, 0]
//         [0, 0, 0, 0, 0]
//         [0, 0, 0, 0, 0]
//         [0, 0, 0, 0, 0]
//         [0, 0, 0, 0, 0]
//         [0, 0, 0, 0, 0]
//         [0, 0, 0, 0, 0]
//         [0, 0, 0, 0, 0]
//         [0, 0, 0, 0, 0]
//         [0, 0, 0, 0, null]
//     ]

// }
function bet () {
    
}

function value () {

}

function timer () {

}