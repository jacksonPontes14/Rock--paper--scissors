let para = document.querySelector(".paragraph");

let rockButton = document.querySelector("#rock");
let paperButton = document.querySelector("#paper");
let scissorsButton = document.querySelector("#scissors");

let humanPoints = document.querySelector("#human-points"); 
let cpuPointes = document.querySelector("#cpu-points");

let humanPlay = "";

let humanScore = 0;
let computerScore = 0;


//Human choice
rockButton.addEventListener("click", () => {
    humanPlay = "Rock";
    para.textContent = `You choose ${humanPlay}`;
    playRound(humanPlay, getComputerChoice());
    humanPoints.textContent = `Player: ${humanScore}`;
    cpuPointes.textContent = `CPU: ${computerScore}`;
});

paperButton.addEventListener("click", () => {
    humanPlay = "Paper";
    para.textContent = `You choose ${humanPlay}`;
    playRound(humanPlay, getComputerChoice());
    humanPoints.textContent = `Player: ${humanScore}`;
    cpuPointes.textContent = `CPU: ${computerScore}`;
});

scissorsButton.addEventListener("click", () => {
    humanPlay = "Scissors";
    para.textContent = `You choose ${humanPlay}`;
    playRound(humanPlay, getComputerChoice());
    humanPoints.textContent = `Player: ${humanScore}`;
    cpuPointes.textContent = `CPU: ${computerScore}`;
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
        para.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
    }
    else if (humanChoice == "Paper" && computerChoice == "Rock") {
        humanScore = humanScore + 1;
        para.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
    }
    else if (humanChoice == "Scissors" && computerChoice == "Paper") {
        humanScore = humanScore + 1;
        para.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
    } 

    // Draw
    else if (humanChoice === computerChoice) {
        para.textContent = `You both draw!`;
    }
    // When you lose
    else {
        computerScore = computerScore + 1;
        para.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
    }
}

