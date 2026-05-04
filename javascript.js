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


function capitalizeString(string) {
    // Capitalizes first letter int string

    let capitalizedString = string.charAt(0).toUpperCase() + string.slice(1);
    return capitalizedString;
}


function playGame() {
    // Plays a complete game with 5 rounds

    function playRound(humanChoice, computerChoice) {
        // Plays a whole rock, paper, scissors round.
        // Increments score of winner

        if (humanChoice == computerChoice) {
            console.log(`Draw! ${capitalizeString(humanChoice)} = ${capitalizeString(computerChoice)}!`);
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

    let humanScore = 0;
    let computerScore = 0;
    let humanChoice = "";
    let computerChoice = "";


    for (let i = 0; i < 5; i++) {
        humanChoice = getHumanChoice();
        computerChoice = getComputerChoice();

        playRound(humanChoice, computerChoice);
    }
}
