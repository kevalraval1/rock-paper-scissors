function computerPlay() {
    let choice = Math.floor(Math.random() * 3);
    if (choice == 0) {
        return "Rock";
    }
    else if (choice == 1) {
        return "Paper";
    }
    return "Scissors";
}

function playGame(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection == computerSelection.toLowerCase()) {
        return "Tie";
    }
    else if (playerSelection == "rock") {
        if (computerSelection == "Paper") {
            return "Lose";
        }
        return "Win";
    }
    else if (playerSelection == "paper") {
        if (computerSelection == "Scissors") {
            return "Lose";
        }
        return "Win";
    }
    else if (playerSelection == "scissors") {
        if (computerSelection == "Rock") {
            return "Lose";
        }
        return "Win";
    }
}

function game() {
    let playerCount = 0;
    let computerCount = 0;
    while (playerCount < 5 && computerCount < 5) {
        let playerSelection = prompt("Enter your selection: ");
        let result = playGame(playerSelection, computerPlay());
        if (result == "Win") {
            playerCount ++;
            console.log(`You win, score is ${playerCount} - ${computerCount}`)
            continue;
        }
        else if (result == "Lose") {
            computerCount ++;
            console.log(`You lose, score is ${playerCount} - ${computerCount}`)
            continue;
        }
        console.log(`It's a tie, score is ${playerCount} - ${computerCount}`)
        continue;
    }
    console.log(`Game is over! The winner is ${(playerCount > computerCount) ? "you!" : "the computer!"}`)
}
game()