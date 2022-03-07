let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const reset_btn = document.getElementById("reset");
const rock_div = document.getElementById("urock");
const paper_div = document.getElementById("upaper");
const scissors_div = document.getElementById("uscissors");
const lizard_div = document.getElementById("ulizard");
const spock_div = document.getElementById("uspock");
const result_p = document.getElementById("result-message");

/*document.addEventListener("DOMContentLoaded", function () {
    let choices = document.getElementsByClassName("uchoice");
    for (let choice of choices) {
        choice.addEventListener("click", function () {
            computerChoice();
            incrementComputerScore();
            incrementUserScore();
        });
    }
});*/
function main() {
    rock_div.addEventListener("click", function () {
        game("rock");
    })
    paper_div.addEventListener("click", function () {
        game("paper");
    })
    scissors_div.addEventListener("click", function () {
        game("scissors");
    })
    lizard_div.addEventListener("click", function () {
        game("lizard");
    })
    spock_div.addEventListener("click", function () {
        game("spock");
    })
};
main();

function game(uChoice) {
    const cChoice = computerChoice();
    switch (uChoice + cChoice) {
        case "rockscissors":
        case "rocklizard":
        case "paperrock":
        case "paperspock":
        case "scissorspaper":
        case "scissorslizard":
        case "lizardspock":
        case "lizardpaper":
        case "spockrock":
        case "spockscissors":
            incrementUserScore();

            break;
        case "rockpaper":
        case "rockspock":
        case "paperlizard":
        case "paperscissors":
        case "scissorsspock":
        case "scissorsrock":
        case "lizardrock":
        case "lizardscissors":
        case "spocklizard":
        case "spockpaper":

            incrementComputerScore()
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
        case "lizardlizard":
        case "spockspock":
        result_p.innerHTML ="IT'S A DRAW!"
    }
}


function incrementComputerScore() {
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML= "COMPUTER WON!";
}

function incrementUserScore() {
    userScore++;
    userScore_span.innerHTML = userScore;
    result_p.innerHTML= "YOU WON!";
}

function resetScore() {
    reset_btn.addEventListener("click", function () {
        computerScore_span.innerHTML = 0;
        userScore_span.innerHTML = 0;
    });
}
resetScore();

function computerChoice() {
    const computerDraws = ["rock", "paper", "scissors", "lizard", "spock"]
    const randomNumber = Math.floor(Math.random() * 5) + 1;

    if (computerDraws[1]) {
        document.getElementById("path-rock").style.fill = "#ffd700";

    } else if (computerDraws[2]) {
        document.getElementById("path-paper").style.fill = "#ffd700";

    } else if (computerDraws[3]) {
        document.getElementById("path-scissors").style.fill = "#ffd700";

    } else if (computerDraws[4]) {
        document.getElementById("path-lizard").style.fill = "#ffd700";

    } else if (computerDraws[5]) {
        document.getElementById("path-spock").style.fill = "#ffd700";
    }
    return computerDraws[randomNumber];
}



const selectWinner = (user, computer) => {
    let result = null;

    const ifVal = (a, b, w) =>
        user.choice === a && computer.choice === b ? (result = w) : null;



    return result;
};