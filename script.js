console.log("Welcome to console Rock, Paper, Scissors")

function getComputerChoice() {
    let rng = Math.random()
    if (rng < 0.33) return "rock"
    else if (rng >= 0.66) return "paper"
    else return "scissors"
}

function getHumanChoice() {
    return prompt("Choose what you want to play - rock, paper, scissors").toLowerCase()
}

function playGame() {
    function playRound(humanChoice, computerChoice) {
        let message = ''
        if (humanChoice === "rock" && computerChoice === "scissors") {
            humanScore += 1
            message = "You win! Rock beats Scissors"
        }
        else if (humanChoice === "paper" && computerChoice === "rock") {
            humanScore += 1
            message = "You win! Paper beats Rock"
        }
        else if (humanChoice === "scissors" && computerChoice === "paper") {
            humanScore += 1
            message = "You win! Scissors beat Paper"
        }
        else if (computerChoice === "rock" && humanChoice === "scissors") {
            computerScore += 1
            message = "You lose! Rock beats Scissors"
        }
        else if (computerChoice === "paper" && humanChoice === "rock") {
            computerScore += 1
            message = "You lose! Paper beats Rock"
        }
        else if (computerChoice === "scissors" && humanChoice === "paper") {
            computerScore += 1
            message = "You lose! Scissors beat Paper"
        }
        else message = "It's a draw!"
        console.log(message)
    }

    let humanScore = 0
    let computerScore = 0

    for (let i = 0; i < 5; i++) {
        let humanSelection = getHumanChoice()
        let computerSelection = getComputerChoice()
        
        playRound(humanSelection, computerSelection)
    }

    console.log(`Final score: YOU ${humanScore} - COMPUTER ${computerScore}`)
}

playGame()
