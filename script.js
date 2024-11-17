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


    const resultDiv = document.querySelector("#div-result");
    const computerScoreH2 = document.createElement("h2");
    computerScoreH2.innerText = `Computer Score: ${computerScore}`;
    resultDiv.appendChild(computerScoreH2);
    const humanScoreH2 = document.createElement("h2");
    humanScoreH2.innerText = `Your Score: ${humanScore}`;
    resultDiv.appendChild(humanScoreH2);
    const resultPara = document.createElement("p");


    function playRound(humanChoice, computerChoice) {
        if (humanChoice.toLowerCase() == computerChoice.toLowerCase()) {
            resultPara.innerText = `Draw! ${humanChoice} is equal to ${computerChoice}`;
        }
        else if (humanChoice.toLowerCase() == "rock" && computerChoice.toLowerCase() == "paper") {
            resultPara.innerText = "You Lose! Paper beats Rock";
            computerScore++;
            computerScoreH2.innerText = `Computer Score: ${computerScore}`;
        }
        else if (humanChoice.toLowerCase() == "paper" && computerChoice.toLowerCase() == "rock") {
            resultPara.innerText = "You Win! Paper beats Rock";
            humanScore++;
            humanScoreH2.innerText = `Your Score: ${humanScore}`;
        }
        else if (humanChoice.toLowerCase() == "scissors" && computerChoice.toLowerCase() == "rock") {
            resultPara.innerText = "You Lose! Rock beats Scissors";
            computerScore++;
            computerScoreH2.innerText = `Computer Score: ${computerScore}`;
        }
        else if (humanChoice.toLowerCase() == "rock" && computerChoice.toLowerCase() == "scissors") {
            resultPara.innerText = "You Win! Rock beats Scissors";
            humanScore++;
            humanScoreH2.innerText = `Your Score: ${humanScore}`;
        }
        else if (humanChoice.toLowerCase() == "paper" && computerChoice.toLowerCase() == "scissors") {
            resultPara.innerText = "You Lose! Scissors beats Paper";
            computerScore++;
            computerScoreH2.innerText = `Computer Score: ${computerScore}`;
        }
        else if (humanChoice.toLowerCase() == "scissors" && computerChoice.toLowerCase() == "paper") {
            resultPara.innerText = "You Win! Scissors beats Paper";
            humanScore++;
            humanScoreH2.innerText = `Your Score: ${humanScore}`;
        }
        resultDiv.appendChild(resultPara);
    }


    /*for (i = 0; i < 5; i++) {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }*/

    if (humanScore > computerScore) {
        resultPara.innerText = `You Win! You won ${humanScore} of 5 rounds`;
    }
    else if (computerScore > humanScore) {
        resultPara.innerText = `You Lose! You lost ${computerScore} of 5 rounds`;
    }
    else {
        resultPara.innerText = "Draw!";
    }
}

playGame();