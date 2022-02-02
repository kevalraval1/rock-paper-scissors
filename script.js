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
        console.log("Tie");
        return "Tie";
    }
    else if (playerSelection == "rock") {
        if (computerSelection == "Paper") {
            console.log("Lose");
            return "Lose";
        }
        console.log("Win");
        return "Win";
    }
    else if (playerSelection == "paper") {
        if (computerSelection == "Scissors") {
            console.log("Lose");
            return "Lose";
        }
        console.log("Win");
        return "Win";
    }
    else if (playerSelection == "scissors") {
        if (computerSelection == "Rock") {
            console.log("Lose");
            return "Lose";
        }
        console.log("Win");
        return "Win";
    }
}

let playerCount = 0;
let computerCount = 0;
const results = document.querySelector("#result");

function game(result, playerCount, computerCount) {
    if (result == "Win") {
        results.textContent = `You win, score is ${playerCount} - ${computerCount}`;
        console.log(`You win, score is ${playerCount} - ${computerCount}`)
    }
    else if (result == "Lose") {
        results.textContent = `You lose, score is ${playerCount} - ${computerCount}`;
        console.log(`You lose, score is ${playerCount} - ${computerCount}`)
    }
    else {
    results.textContent = `It's a tie, score is ${playerCount} - ${computerCount}`;
    console.log(`It's a tie, score is ${playerCount} - ${computerCount}`)
    }
}


do {
    const rock = document.querySelector("#rock");
    const paper = document.querySelector("#paper");
    const scissors = document.querySelector("#scissors")
    let result;
    rock.addEventListener("click", () => {
        result = playGame("rock", computerPlay())
        if (result == "Win") {
            playerCount ++;
        }
        else if (result == "Lose") {
            computerCount ++;
        }
        game(result, playerCount, computerCount)
        checkEnd(playerCount, computerCount)
    });
    paper.addEventListener("click", () => {
        result = playGame("paper", computerPlay())
        if (result == "Win") {
            playerCount ++;
        }
        else if (result == "Lose") {
            computerCount ++;
        }
        game(result, playerCount, computerCount)
        checkEnd(playerCount, computerCount)
    });
    scissors.addEventListener("click", () => {
        result = playGame("scissors", computerPlay())
        if (result == "Win") {
            playerCount ++;
        }
        else if (result == "Lose") {
            computerCount ++;
        }
        game(result, playerCount, computerCount)
        checkEnd(playerCount, computerCount)
    });

    function checkEnd(playerCount, computerCount, endBool) {
        if (playerCount == 5) {
            results.textContent += `\nCongrats, you've won! ${playerCount} - ${computerCount}`;
            return true
        }
        else if (computerCount == 5) {
            results.textContent += `\nYou've lost. ${playerCount} - ${computerCount}`;
            return true
        }
        return false
    }

} while (!checkEnd)

