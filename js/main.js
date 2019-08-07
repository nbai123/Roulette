/*----- constants -----*/ 
const chipImg = new Image();
chipImg.src = 'css/images/chip.svg'

/*----- app's state (variables) -----*/ 
let player, winningNum, bet, board, totalBet;






/*----- cached element references -----*/
let red = [1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36];
let black = [2, 4, 6, 8, 10, 11, 13, 15, 17, 20, 22, 24, 26, 28, 20, 31, 33, 35];
let even = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36];
let odd = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35];
let frst12 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
let scnd12 = [13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
let thrd12 = [25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36];
let frsthalf = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
let scndhalf = [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36];
let frstrow = [1, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31, 34];
let scndrow = [2, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35];
let thrdrow = [3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36];
let multi = [[red], [black], [even], [odd], [frst12], [scnd12], [thrd12], [frsthalf], [scndhalf], [frstrow], [scndrow], [thrdrow]];
let wheelNum = Math.floor((Math.random() * 36) + 1); 34
let credit = 500;
let totals = [];
var sec = 11;
// let div.one = ;
// let div.five = ;
// let div.ten = ;
// let div.twentyfive = ; 
// let div.hundred = ;

/*----- event listeners -----*/ 
document.querySelector('table.board').addEventListener('click', placeBet);
//on click input value of bet selected
//on click select 1-18, 19-36, even, odds, red, black, 1st 12, 2nd 12, last 12
//on click reset button clears board and resets credit limit
// document.querySelector('table.board').addEventListener('click', timer);
//on click initialize timer after 10 seconds no more bets are allowed.. wait 3 more seconds and show wheelNum
// document.querySelector('div.chips').addEventListener('click', value);
//on click selects the chip value selected


/*----- functions -----*/
init ();

function init() {
    board = [
        [0, 0, {number: 0, bet: false}, {number: 00, bet: false}, 0],
        [{number: [frsthalf], bet: false}, {number: 1, bet: false, color: red, parity: odd}, {number: 2, bet: false, color: black, parity: even}, {number: 3, bet: false, color: red, parity: odd}, {number: [frst12], bet: false}],
        [0, {number: 4, bet: false, color: black, parity: even}, {number: 5, bet: false, color: red, parity: odd}, {number: 6, bet: false, color: black, parity: even}, 0],
        [0, {number: 7, bet: false, color: red, parity: odd}, {number: 8, bet: false, color: black, parity: even}, {number: 9, bet: false, color: red, parity: odd}, 0],
        [0, {number: 10, bet: false, color: black, parity: even}, {number: 11, bet: false, color: black, parity: odd}, {number: 12, bet: false, color: red, parity: even}, 0],
        [{number: [even], bet: false}, {number: 13, bet: false, color: black, parity: odd}, {number: 14, bet: false, color: red, parity: even}, {number: 15, bet: false, color: black, parity: odd}, {number: [scnd12], bet: false}],
        [0, {number: 16, bet: false, color: red, parity: even}, {number: 17, bet: false, color: black, parity: odd}, {number: 18, bet: false, color: red, parity: even}, 0],
        [{number: [red], bet: false, color: red}, {number: 19, bet: false, color: red, parity: odd}, {number: 20, bet: false, color: black, parity: even}, {number: 21, bet: false, color: red, parity: odd}, 0],
        [0, {number: 22, bet: false, color: black, parity: even}, {number: 23, bet: false, color: red, parity: odd}, {number: 24, bet: false, color: black, parity: even}, 0],
        [{number: [black], bet: false, color: black}, {number: 25, bet: false, color: red, parity: odd}, {number: 26, bet: false, color: black, parity: even}, {number: 27, bet: false, color: red, parity: odd}, {number: [thrd12], bet: false}],
        [0, {number: 28, bet: false, color: black, parity: even}, {number: 29, bet: false, color: black, parity: odd}, {number: 30, bet: false, color: red, parity: even}, 0],
        [{number: [odd], bet: false}, {number: 31, bet: false, color: black, parity: odd}, {number: 32, bet: false, color: red, parity: even}, {number: 33, bet: false, color: black, parity: odd}, 0],
        [0, {number: 34, bet: false, color: red, parity: even}, {number: 35, bet: false, color: black, parity: odd}, {number: 36, bet: false, color: red, parity: even}, 0],
        [{number: [scndhalf], bet: false}, {number: [frstrow], bet: false}, {number: [scndrow], bet: false}, {number: [thrdrow], bet: false}, 0]
    ];
    wheelNum;
    console.log(wheelNum);
}

function placeBet (evt) {
    let targetId = evt.target.id;
    let cIdx = parseInt(targetId.replace('c', ''));
    console.log(cIdx);
    let rowIdx = targetId.substring(targetId.length - 2).replace('r','');
    let rIdx = parseInt(rowIdx);
    let fired = false;
    console.log(rIdx);
    changeBoard(board, cIdx, rIdx);
    if (sec === 11) {
        timer ();
    }
    document.getElementById(`c${cIdx}r${rIdx}`).style.backgroundImage = "url('css/images/chip.svg')";
    function timer(){
        sec = 10;
        var timer = setInterval(function(){
            document.getElementById('timer').innerHTML= '00:'+sec;
            sec--;
            if (sec < 0) {
                clearInterval(timer);
            }
        }, 1000);
        // window.setTimeout(console.log('winner'), 10500);
        function time(){
            setTimeout(()=>{
                winner();
            }, 10500)
        }
        time();
    }
        function changeBoard (b, c, r) {
            if (b[c][r].bet === false) {
                b[c][r].bet = true;
                console.log('hit');
            } else {
                alert('Bet has already been placed here'); 
            }
        }
}

function winner () {
    board.forEach((x, y) => {
        totals.push(x.filter(b => b.bet === true))
    } 
    )};