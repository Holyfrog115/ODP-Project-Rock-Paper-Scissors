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


function capitalizeString(string) {
    // Capitalizes first letter int string

    let capitalizedString = string.charAt(0).toUpperCase() + string.slice(1);
    return capitalizedString;
}


function declareWinner(humanScore, computerScore) {
    // Declares winner of game and prints the message about it

    if (humanScore > computerScore) {
        message.textContent = "You won this game!";
        message.textContent = `Your score: ${humanScore} : Computer score: ${computerScore}`;
    }
    else if (humanScore < computerScore) {
        message.textContent = "You lost this game!";
        message.textContent = `Your score: ${humanScore} : Computer score: ${computerScore}`;
    }
    else {
        message.textContent = "Draw!";
        message.textContent = `Your score: ${humanScore} : Computer score: ${computerScore}`;
    }
}


function playRound(playerChoice, computerChoice) {

    const message = document.querySelector('.gameInfo');
    if (playerChoice === computerChoice) {
        message.textContent = `Draw! ${capitalizeString(playerChoice)} = ${capitalizeString(computerChoice)}!`;
    }
    else if (playerChoice === "rock" && computerChoice === "scissors") {
        message.textContent = "You win! Rock beats Scissors!";
        humanScore++;
    }
    else if (playerChoice === "rock" && computerChoice === "paper") {
        message.textContent = "You lose! Paper beats Rock!";
        computerScore++;
    }
    else if (playerChoice === "paper" && computerChoice === "rock") {
        message.textContent = "You win! Paper beats Rock!";
        humanScore++;
    }
    else if (playerChoice === "paper" && computerChoice === "scissors") {
        message.textContent = "You lose! Scissors beat Paper!";
        computerScore++;
    }
    else if (playerChoice === "scissors" && computerChoice === "paper") {
        message.textContent = "You win! Scissors beat Paper!";
        humanScore++;
    }
    else if (playerChoice === "scissors" && computerChoice === "rock") {
        message.textContent = "You lose! Rock beats Scissors!";
        computerScore++;
    }
}

function playGame() {
    let playerChoice = '';
    let computerChoice = '';

    const btns = document.querySelector('.playerButtons');
    btns.addEventListener("click", (event) => {
        playerChoice = event.target.id;
        computerChoice = getComputerChoice();
        playRound(playerChoice, computerChoice);
    });  
}

playGame()