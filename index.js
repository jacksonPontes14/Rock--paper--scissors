window.alert("Let's play rock, paper and scissor.");

let promptAnswer = prompt("Choice one:");

let humanScore = 0;
let computerScore = 0;


//Human choice
function getHumanChoice() {
    lowerCaseAnswer = promptAnswer.toLowerCase();
    if (lowerCaseAnswer === "rock") {
    return "Rock";
    } else if (lowerCaseAnswer === "paper") {
        return "Paper";
    } else if (lowerCaseAnswer === "scissor") {
        return "Scissor";
    } else {
        return "You can only choose Rock, Paper or Scissors"
    }
}


//Computer choice
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    if ( randomNumber === 1) {
        return "Rock"
    } else if (randomNumber === 2) {
        return "Paper"
    } else {
        return "Scissor"
    }
}

//Game round
function playRound(humanChoice, computerChoice) {
    if (humanChoice === "Rock" || computerChoice === "Scissor") {
        return `You win! ${humanChoice} beats ${computerChoice}`
    }
    else if (humanChoice === "Paper" || computerChoice === "Rock") {
        return `You win! ${humanChoice} beats ${computerChoice}`
    }
    else if (humanChoice === "Scissor" || computerChoice === "Paper") {
        return `You win! ${humanChoice} beats ${computerChoice}`
    } else if (humanChoice === computerChoice) {
        promptAnswer;
        return "You draw, let's play again"
    }
    else {
        return `You lose! ${computerChoice} beats ${humanChoice}`
    }
}


const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
