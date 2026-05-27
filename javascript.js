let playerChoice = '';

function getComputerChoice() {
    // Generates random computer choice

    let randomNumber = Math.floor(Math.random() * 3) + 1;

    if (randomNumber === 1) {
        return "rock";
    }
    else if (randomNumber === 2) {
        return "paper";
    }
    else {
        return "scissors";
    }
}


function getPlayerChoice() {
    // Adds events to buttons for player choice

    const btns = document.querySelector('.playerButtons');
    btns.addEventListener("click", (event) => {
        playerChoice = event.target.id;
    });
}


function capitalizeString(string) {
    // Capitalizes first letter int string

    let capitalizedString = string.charAt(0).toUpperCase() + string.slice(1);
    return capitalizedString;
}


function declareWinner(humanScore, computerScore) {
    // Declares winner of game and prints the message about it

    if (humanScore > computerScore) {
        message.textContent("You won this game!");
        message.textContent(`Your score: ${humanScore} : Computer score: ${computerScore}`);
    }
    else if (humanScore < computerScore) {
        message.textContent("You lost this game!");
        message.textContent(`Your score: ${humanScore} : Computer score: ${computerScore}`);
    }
    else {
        message.textContent("Draw!");
        message.textContent(`Your score: ${humanScore} : Computer score: ${computerScore}`);
    }
}


function playGame() {

    getPlayerChoice();
    const message = document.querySelector('.gameInfo');
    if (humanChoice === computerChoice) {
        message.textContent(`Draw! ${capitalizeString(humanChoice)} = ${capitalizeString(computerChoice)}!`);
    }
    else if (humanChoice === "rock" && computerChoice === "scissors") {
        message.textContent("You win! Rock beats Scissors!");
        humanScore++;
    }
    else if (humanChoice === "rock" && computerChoice === "paper") {
        message.textContent("You lose! Paper beats Rock!");
        computerScore++;
    }
    else if (humanChoice === "paper" && computerChoice === "rock") {
        message.textContent("You win! Paper beats Rock!");
        humanScore++;
    }
    else if (humanChoice === "paper" && computerChoice === "scissors") {
        message.textContent("You lose! Scissors beat Paper!");
        computerScore++;
    }
    else if (humanChoice === "scissors" && computerChoice === "paper") {
        message.textContent("You win! Scissors beat Paper!");
        humanScore++;
    }
    else if (humanChoice === "scissors" && computerChoice === "rock") {
        message.textContent("You lose! Rock beats Scissors!");
        computerScore++;
    }


    let humanScore = 0;
    let computerScore = 0;
    let humanChoice = "";
    let computerChoice = "";

    declareWinner(humanScore, computerScore);    
}

playGame()