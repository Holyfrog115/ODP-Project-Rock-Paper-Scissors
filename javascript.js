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

    return userChoice;
}






humanScore = 0;
computerScore = 0;