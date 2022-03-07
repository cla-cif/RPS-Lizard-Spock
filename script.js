const reset_btn = document.getElementById("reset");
const rock_div = document.getElementById("urock");
const paper_div = document.getElementById("upaper");
const scissors_div = document.getElementById("uscissors");
const lizard_div = document.getElementById("ulizard");
const spock_div = document.getElementById("uspock");

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
        case "scissorsspaper":
        case "scissorsslizard":
        case "lizardspock":
        case "lizardpaper":
        case "spockrock":
        case "spockscissors":
            incrementUserScore();
            alert("you win");
            break;
        case "rockpaper":
        case "rockspock":
        case "paperlizard":
        case "paperscissors":
        case "scissorssspock":
        case "scissorssrock":
        case "lizardrock":
        case "lizardscissors":
        case "spocklizard":
        case "spockpaper":
            alert("computer win");
            incrementComputerScore()
            break;
    }
}



function incrementComputerScore() {
    let computerScore = parseInt(document.getElementById("computer-score").innerText);
    document.getElementById("computer-score").innerText = ++computerScore;
}

function incrementUserScore() {
    let userScore = parseInt(document.getElementById("user-score").innerText);
    document.getElementById("user-score").innerText = ++userScore;
}

function resetScore() {
    reset_btn.addEventListener("click", function () {
        document.getElementById("user-score").innerText = 0;
        document.getElementById("computer-score").innerText = 0;
    });
}
resetScore();

function computerChoice() {
    const computerDraws = ["rock", "paper", "scissors", "lizard", "spock"]
    const randomNumber = Math.floor(Math.random() * 5) + 1;
    return computerDraws[randomNumber]
    /* if (cChoices === "rock") {
         document.getElementById("path-rock").style.fill = "#ffd700";
         
     } else if (randomNumber == 2) {
         document.getElementById("path-paper").style.fill = "#ffd700";
       
     } else if (randomNumber == 3) {
         document.getElementById("path-scissors").style.fill = "#ffd700";
         
     } else if (randomNumber == 4) {
         document.getElementById("path-lizard").style.fill = "#ffd700";
      
     } else if (randomNumber == 5) {
         document.getElementById("path-spock").style.fill = "#ffd700";
      
     } */
}



const selectWinner = (user, computer) => {
    let result = null;

    const ifVal = (a, b, w) =>
        user.choice === a && computer.choice === b ? (result = w) : null;



    return result;
};