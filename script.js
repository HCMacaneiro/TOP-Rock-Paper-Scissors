let humanScore = 0;
let computerScore = 0;

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

function getHumanChoice() {
    let choice = prompt("Choose: Rock, Paper or Scissors");
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
}


const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();


playRound(humanSelection, computerSelection);