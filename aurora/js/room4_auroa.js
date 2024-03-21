window.alert("phew, thank god I made it out of there without malificent noticing me. ");
window.alert("Oh no! there is a monster, I have to calculate my next moves so I will be able to scape")



const vsButtons = document.querySelector('.vs-button');
const twoPlayers = document.getElementById('twoPlayers');
const vsComputer = document.getElementById('vsComputer');
const twoPlayersSection = document.querySelector('.two-players');
const vsComputerSection = document.querySelector('.vs-computer');
const restartButton = document.getElementById('restartButton')

function twoPlayersGame() {
    twoPlayersSection.style.display = "";
    vsComputerSection.remove();
    vsButtons.style.display = "none";
    restartButton.style.display = "";
}
twoPlayers.addEventListener('click', twoPlayersGame);

function vsComputerGame() {
    vsComputerSection.style.display = "";
    twoPlayersSection.remove();
    vsButtons.style.display = "none";
    restartButton.style.display = "";
}
vsComputer.addEventListener('click', vsComputerGame);


let currentPlayer = 'X';
let board = [['', '', ''], ['', '', ''], ['', '', '']];
let gameOver = false;

function twoPMakeMove(row, col) {
    if (!gameOver && board[row][col] === '') {
        board[row][col] = currentPlayer;
        document.querySelector(`.row:nth-child(${row + 1}) .cell:nth-child(${col + 1}`).textContent = currentPlayer;
        
        if (checkWin()) {
            document.getElementById('twoPlayersWinnerText').textContent = `${currentPlayer} wins!`;
            gameOver = true;
        } else if (checkTie()) {
            document.getElementById('twoPlayersWinnerText').textContent = "It's a tie!";
            gameOver = true;
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    }
}

function vsComMakeMove(row, col) {
    if (!gameOver && board[row][col] === '') {
        board[row][col] = currentPlayer;
        document.querySelector(`.row:nth-child(${row + 1}) .cell:nth-child(${col + 1}`).textContent = currentPlayer;

        if (checkWin()) {
            document.getElementById('vsComputerWinnerText').textContent = `${currentPlayer} wins!`;
            gameOver = true;
        } else if (checkTie()) {
            document.getElementById('vsComputerWinnerText').textContent = "It's a tie!";
            gameOver = true;
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';

            if (!gameOver && currentPlayer === 'O') {
                setTimeout(makeComputerMove, 500); 
            }
        }
    }
}


function makeComputerMove() {
    if (!gameOver) {
        let row, col;
        do {
            row = Math.floor(Math.random() * 3);
            col = Math.floor(Math.random() * 3);
        } while (board[row][col] !== '');
        
        vsComMakeMove(row, col);
    }
}

function checkWin() {
    for (let i = 0; i < 3; i++) {
        if (
            (board[i][0] === currentPlayer && board[i][1] === currentPlayer && board[i][2] === currentPlayer) ||
            (board[0][i] === currentPlayer && board[1][i] === currentPlayer && board[2][i] === currentPlayer)
        ) {
            return true;
        }
    }
    
    if (
        (board[0][0] === currentPlayer && board[1][1] === currentPlayer && board[2][2] === currentPlayer) ||
        (board[0][2] === currentPlayer && board[1][1] === currentPlayer && board[2][0] === currentPlayer)
    ) {
        return true;
    }
    
    return false;
}

function checkTie() {
    for (let row of board) {
        if (row.includes('')) {
            return false;
        }
    }
    return true;
}

function restartGame() {
    location.reload();
}
restartButton.addEventListener('click', restartGame);