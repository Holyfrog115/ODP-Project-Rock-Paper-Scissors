function getComputerChoice() {
    // Generates random computer choice

    let randomNumber = Math.floor(Math.random() * 3) + 1;

    if (randomNumber == 1) {
        return "rock";
    }
    else if (randomNumber == 2) {
        return "paper";
    }
    else {
        return "scissors";
    }
}


function getHumanChoice() {
    // Returns string with choice by user

    let userChoice = "";
    userChoice = prompt("Enter your choice of rock, paper of scissors");
    let loweredUserChoice = userChoice.toLowerCase();

    return loweredUserChoice;
}


function playRound(humanChoice, computerChoice) {
    // Plays a whole rock, paper, scissors round.
    // Increments score of winner

    if (humanChoice == computerChoice) {
        // Capitalize
        console.log(`Draw! ${humanChoice} = ${computerChoice}!`);
    }
    else if (humanChoice == "rock" && computerChoice == "scissors") {
        console.log("You win! Rock beats Scissors!");
        humanScore++;
    }
    else if (humanChoice == "rock" && computerChoice == "paper") {
        console.log("You lose! Paper beats Rock!");
        computerScore++;
    }
    else if (humanChoice == "paper" && computerChoice == "rock") {
        console.log("You win! Paper beats Rock!");
        humanScore++;
    }
    else if (humanChoice == "paper" && computerChoice == "scissors") {
        console.log("You lose! Scissors beat Paper!");
        computerScore++;
    }
    else if (humanChoice == "scissors" && computerChoice == "paper") {
        console.log("You win! Scissors beat Paper!");
        humanScore++;
    }
    else if (humanChoice == "scissors" && computerChoice == "rock") {
        console.log("You lose! Rock beats Scissors!");
        computerScore++;
    }
}


const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();
playRound(humanChoice, computerChoice);

humanScore = 0;
computerScore = 0;