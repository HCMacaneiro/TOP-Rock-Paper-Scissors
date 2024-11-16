function playGame() {
let humanScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener("click", (e) => {
       const choice = e.target.innerText;
       playRound(choice, getComputerChoice());
    })
})

function getComputerChoice() {
    let rand = Math.floor(Math.random() * 10 / 4);
    let choice;
    switch (rand) {
        case 0:
            choice = "Rock";
            break;
        case 1:
            choice = "Paper";
            break;
        default:
            choice = "Scissors";
            break;
    }
    return choice;
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice.toLowerCase() == computerChoice.toLowerCase()) {
        console.log(`Draw! ${humanChoice} is equal to ${computerChoice}`);
    }
    else if (humanChoice.toLowerCase() == "rock" && computerChoice.toLowerCase() == "paper") {
        console.log("You Lose! Paper beats Rock");
        computerScore++;
    }
    else if (humanChoice.toLowerCase() == "paper" && computerChoice.toLowerCase() == "rock") {
        console.log("You Win! Paper beats Rock");
        humanScore++;
    }
    else if (humanChoice.toLowerCase() == "scissors" && computerChoice.toLowerCase() == "rock") {
        console.log("You Lose! Rock beats Scissors");
        computerScore++;
    }
    else if (humanChoice.toLowerCase() == "rock" && computerChoice.toLowerCase() == "scissors") {
        console.log("You Win! Rock beats Scissors");
        humanScore++;
    }
    else if (humanChoice.toLowerCase() == "paper" && computerChoice.toLowerCase() == "scissors") {
        console.log("You Lose! Scissors beats Paper");
        computerScore++;
    }
    else if (humanChoice.toLowerCase() == "scissors" && computerChoice.toLowerCase() == "paper") {
        console.log("You Win! Scissors beats Paper");
        humanScore++;
    }
}


/*for (i = 0; i < 5; i++) {
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
}*/

if (humanScore > computerScore) {
    console.log(`You Win! You won ${humanScore} of 5 rounds`);
}
else if (computerScore > humanScore) {
    console.log(`You Lose! You lost ${computerScore} of 5 rounds`);
}
else {
    console.log("Draw!");
}
}

playGame();