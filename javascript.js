let playerScore = 0;
let computerScore = 0;

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


function updateScore() {
    const score = document.querySelector('.score');
    score.textContent = `Your score: ${playerScore} : Computer score: ${computerScore}`;
}


function declareWinner() {
    // Declares winner of game and prints the message about it

    const message = document.querySelector('.gameInfo');
    if (playerScore > computerScore) {
        message.setAttribute("id", "neutral")
        message.textContent = "You won this game!";
    }
    else if (playerScore < computerScore) {
        message.setAttribute("id", "neutral")
        message.textContent = "You lost this game!";
    }
    else {
        message.setAttribute("id", "neutral")
        message.textContent = "Draw!";
    }
}


function playRound(playerChoice, computerChoice) {

    const message = document.querySelector('.gameInfo');
    if (playerChoice === computerChoice) {
        message.setAttribute("id", "neutral")
        message.textContent = `Draw! ${capitalizeString(playerChoice)} = ${capitalizeString(computerChoice)}!`;
    }
    else if (playerChoice === "rock" && computerChoice === "scissors") {
        message.setAttribute("id", "win")
        message.textContent = "You win! Rock beats Scissors!";
        playerScore++;
    }
    else if (playerChoice === "rock" && computerChoice === "paper") {
        message.setAttribute("id", "lose")
        message.textContent = "You lose! Paper beats Rock!";
        computerScore++;
    }
    else if (playerChoice === "paper" && computerChoice === "rock") {
        message.setAttribute("id", "win")
        message.textContent = "You win! Paper beats Rock!";
        playerScore++;
    }
    else if (playerChoice === "paper" && computerChoice === "scissors") {
        message.setAttribute("id", "lose")
        message.textContent = "You lose! Scissors beat Paper!";
        computerScore++;
    }
    else if (playerChoice === "scissors" && computerChoice === "paper") {
        message.setAttribute("id", "win")
        message.textContent = "You win! Scissors beat Paper!";
        playerScore++;
    }
    else if (playerChoice === "scissors" && computerChoice === "rock") {
        message.setAttribute("id", "lose")
        message.textContent = "You lose! Rock beats Scissors!";
        computerScore++;
    }
}

function playGame() {
    let playerChoice = '';
    let computerChoice = '';
    updateScore();

    const btns = document.querySelector('.playerButtons');
    btns.addEventListener("click", (event) => {
        playerChoice = event.target.id;
        computerChoice = getComputerChoice();
        if (playerScore < 5 && computerScore < 5) {
            playRound(playerChoice, computerChoice);
            updateScore();

            if (playerScore >= 5 || computerScore >= 5) {
                declareWinner();
            }
        }
    });  
}

playGame()