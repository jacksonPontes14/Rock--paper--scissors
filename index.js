window.alert("Let's play rock, paper and scissors");

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
    } else if (lowerCaseAnswer === "scissors") {
        return "Scissors";
    } else {
        promptAnswer = prompt("You can only choose Rock, Paper or Scissors. Choose again:");
        return getHumanChoice();
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
        return "Scissors"
    }
}

//Game round
function playRound(humanChoice, computerChoice) {
    // When you win
    if (humanChoice == "Rock" && computerChoice == "Scissors") {
        humanScore = humanScore + 1;
        window.alert(`
        You win! ${humanChoice} beats ${computerChoice}
        Your pontuation: ${humanScore}
        Computer pontuation: ${computerScore}`)
    }
    else if (humanChoice == "Paper" && computerChoice == "Rock") {
        humanScore = humanScore + 1;
        window.alert(`
        You win! ${humanChoice} beats ${computerChoice}
        Your pontuation: ${humanScore}
        Computer pontuation: ${computerScore}`)
    }
    else if (humanChoice == "Scissors" && computerChoice == "Paper") {
        humanScore = humanScore + 1;
        window.alert(`
        You win! ${humanChoice} beats ${computerChoice}
        Your pontuation: ${humanScore}
        Computer pontuation: ${computerScore}`) 
    } 

    // Draw
    else if (humanChoice === computerChoice) {
        window.alert("You both draw!")
    }

    // When you lose
    else {
        computerScore = computerScore + 1;
        window.alert(`
        You lose! ${computerChoice} beats ${humanChoice}
        Your pontuation: ${humanScore}
        Computer pontuation: ${computerScore}`)
    }
}

let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();

function playGame() {
    for (let i = 0; i < 5; i++) { 
    promptAnswer = prompt("Choice one:");
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    } 
}

playGame();

if (humanScore > computerScore){
    window.alert("You won the game. Congratulations!")
} else if  (humanScore <  computerScore){
    window.alert("You lose the game.")
}
