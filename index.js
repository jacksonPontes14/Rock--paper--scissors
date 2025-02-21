let rockButton = document.querySelector("#rock");
let paperButton = document.querySelector("#paper");
let scissorsButton = document.querySelector("#scissors");

let humanPoints = document.querySelector("#human-points"); 
let cpuPointes = document.querySelector("#cpu-points");

let humanChoice = "";

let humanScore = 0;
let computerScore = 0;


//Human choice
rockButton.addEventListener("click", () => {
    humanChoice = "Rock";
    window.alert(`You choose ${humanChoice}`);
    return humanChoice
});

paperButton.addEventListener("click", () => {
    humanChoice = "Paper";
    window.alert(`You choose ${humanChoice}`);
    return humanChoice
});

scissorsButton.addEventListener("click", () => {
    humanChoice = "Scissors";
    window.alert(`You choose ${humanChoice}`);
    return humanChoice
});


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
        Your pontuation: ${humanScore}""
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
