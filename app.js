const startGameBtn = document.getElementById('start-game-btn');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DRAW = 'DRAW';
const PLAYER_WIN = 'PLAYER WIN';
const COMPUTER_WIN = 'COMPUTER WIN';
const DEFAULT_CHOICE = ROCK;
let gameIsRunning = false;

const getPlayerChoice = function () {
    const selection = prompt (`Please select ${ROCK}, ${PAPER} or ${SCISSORS}?`);
    if (selection !== ROCK &&
        selection !== PAPER &&
        selection !== SCISSORS) {
            alert (`You did not select right option, so by default ${DEFAULT_CHOICE} will be select`, '');
            return DEFAULT_CHOICE;
        }
    return selection;
}
const getComputerChoice = function () {
    const randomValue = Math.random();
    if (randomValue < 0.34) {
        return ROCK;
    } else if (randomValue < 0.67) {
        return PAPER;
    }else {
        return SCISSORS;
    }
}
const getWinner = function (cChoice, pChoice) {
    if (cChoice === pChoice) {
        return DRAW;
    }else if (cChoice === ROCK && pChoice === PAPER ||
              cChoice === PAPER && pChoice === SCISSORS ||
              cChoice === SCISSORS && pChoice === ROCK) {
                  return PLAYER_WIN;
    } else {
        return COMPUTER_WIN;
    }
}
startGameBtn.addEventListener('click', function () {
    if (gameIsRunning) {
        return;
    }
    gameIsRunning = true;
    console.log ('Game start...');
    const playerSelection = getPlayerChoice ();
    const computerSelection = getComputerChoice ();
    const result = getWinner (computerSelection, playerSelection);
    let message =`You picked ${playerSelection} and computer picked ${computerSelection} then you`;
    if (result === DRAW){
        message = message + ` had a draw`; 
    }else if (result === PLAYER_WIN) {
        message = message + ' Win';
    }else {
        message = message + ' Lose';
    }
    alert (message);
    gameIsRunning = false;
});