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
        result_p.style.visibility="visible";
    })
    paper_div.addEventListener("click", function () {
        game("paper");
        result_p.style.visibility="visible";
    })
    scissors_div.addEventListener("click", function () {
        game("scissors");
        result_p.style.visibility="visible";
    })
    lizard_div.addEventListener("click", function () {
        game("lizard");
        result_p.style.visibility="visible";
    })
    spock_div.addEventListener("click", function () {
        game("spock");
        result_p.style.visibility="visible";
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
        result_p.innerHTML ="IT'S A TIE!"
        setTimeout (()=> (result_p.style.visibility="hidden"), 1500);
    }
}


function incrementComputerScore() {
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML= "COMPUTER WON!";
    setTimeout (()=> (result_p.style.visibility="hidden"), 1500);
}

function incrementUserScore() {
    userScore++;
    userScore_span.innerHTML = userScore;
    result_p.innerHTML= "YOU WON!";
    setTimeout (()=> (result_p.style.visibility="hidden"), 1500);
}
function winMatch () {
    if (userScore==10) {
        alert("you reached 10");
        result_p.innerHTML= "COMPUTER WON THE MATCH!";
        setTimeout (()=> (result_p.style.visibility="hidden"), 1500);
        resetScore()
    }
    if (userScore==10) {
        alert("you reached 10");
        result_p.innerHTML= "YOU WON THE MATCH!";
        setTimeout (()=> (result_p.style.visibility="hidden"), 1500);
        resetScore()
    }
}
winMatch();

function resetScore() {
    reset_btn.addEventListener("click", function () {
        computerScore_span.innerHTML = "";
        userScore_span.innerHTML = "";
        result_p.style.visibility="hidden";
    });
}
resetScore();

function computerChoice() {
    const computerDraws = ["rock", "paper", "scissors", "lizard", "spock"]
    const randomNumber = Math.floor(Math.random() * 5);

    if (randomNumber == "0") {
        document.getElementById("path-rock").style.stroke = "#ffd700";
        setTimeout (()=> (document.getElementById("path-rock").style.stroke = "#000"), 1500);
   
    } else if (randomNumber == "1") {
        document.getElementById("path-paper").style.stroke= "#ffd700";
        setTimeout (()=> (document.getElementById("path-paper").style.stroke = "#000"), 1500);

    } else if (randomNumber == "2") {
        document.getElementById("path-scissors").style.stroke = "#ffd700";
        setTimeout (()=> (document.getElementById("path-scissors").style.stroke = "#000"), 1500);

    } else if (randomNumber == "3") {
        document.getElementById("path-lizard").style.stroke = "#ffd700";
        setTimeout (()=> (document.getElementById("path-lizard").style.stroke = "#000"), 1500);

    } else if (randomNumber == "4") {
        document.getElementById("path-spock").style.stroke = "#ffd700";
        setTimeout (()=> (document.getElementById("path-spock").style.stroke = "#000"), 1500);
    }
    return computerDraws[randomNumber];
}




const selectWinner = (user, computer) => {
    let result = null;

    const ifVal = (a, b, w) =>
        user.choice === a && computer.choice === b ? (result = w) : null;



    return result;
};