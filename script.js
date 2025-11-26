function playGame(event) {
    function getComputerChoice() {
        let rng = Math.random()
        if (rng < 0.33) return "rock"
        else if (rng >= 0.66) return "paper"
        else return "scissors"
    }

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
        msg.textContent = message
    }

    let humanSelection = event.target.textContent
    let computerSelection = getComputerChoice()
        
    playRound(humanSelection, computerSelection)

    player.textContent = humanScore
    computer.textContent = computerScore

    if (humanScore === 5 || computerScore === 5) {
        const winner = humanScore === 5 ? "YOU WON!" : "YOU LOST!"
        const final = document.createElement("div")
        final.setAttribute("class", "final")
        final.textContent = `GAME OVER! ${winner}`
        page.appendChild(final)
        buttons.forEach((button) => button.disabled = true)
    }
}
let humanScore = 0
let computerScore = 0

const page = document.querySelector("body")

const msg = document.querySelector(".messages")
msg.textContent = "Welcome to Rock, Paper, Scissors"

const player = document.querySelector(".player")
const computer = document.querySelector(".computer")

const buttons = document.querySelectorAll(".selection button")
buttons.forEach((button) => {
    button.addEventListener("click", playGame)
})