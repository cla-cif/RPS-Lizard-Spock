
const reset_btn = document.getElementById("reset");
const rock_div = document.getElementById("urock");
const paper_div = document.getElementById("upaper");
const scissors_div = document.getElementById("uscissors");
const lizard_div = document.getElementById("ulizard");
const spock_div = document.getElementById("uspock");

document.addEventListener("DOMContentLoaded", function () {
    let choices = document.getElementsByClassName("uchoice");
    for (let choice of choices) {
        choice.addEventListener("click", function () {
            computerChoice();
            incrementComputerScore();
            incrementUserScore();
        });
    }
});


function incrementComputerScore() {    
    let computerScore = parseInt(document.getElementById("computer-score").innerText);
    document.getElementById("computer-score").innerText = ++computerScore;
}

function incrementUserScore () {
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
    const cChoices =["rock", "paper", "scissors", "lizard", "spock"]
    const randomNumber = Math.floor(Math.random() * 5) + 1;
    return cChoices[randomNumber]
    if (cChoices === "rock") {
        document.getElementById("path-rock").style.fill = "#ffd700";
        
    } else if (randomNumber == 2) {
        document.getElementById("path-paper").style.fill = "#ffd700";
      
    } else if (randomNumber == 3) {
        document.getElementById("path-scissor").style.fill = "#ffd700";
        r
    } else if (randomNumber == 4) {
        document.getElementById("path-lizard").style.fill = "#ffd700";
     
    } else if (randomNumber == 5) {
        document.getElementById("path-spock").style.fill = "#ffd700";
     
    }
}
console.log(computerChoice());


const selectWinner = (user, computer) => {
    let result = null;
  
    const ifVal = (a, b, w) =>
      user.choice === a && computer.choice === b ? (result = w) : null;
  
    ifVal("rock", "scissors", user);
    ifVal("rock", "lizard", user);
    ifVal("paper", "rock", user);
    ifVal("paper", "spock", user);
    ifVal("scissors", "paper", user);
    ifVal("scissors", "lizard", user);
    ifVal("lizard", "spock", user);
    ifVal("lizard", "paper", user);
    ifVal("spock","rock", user);
    ifVal("spock", "scissors", user);

    ifVal("rock", "paper", computer);
    ifVal("rock", "spock", computer);
    ifVal("paper", "lizard", computer);
    ifVal("paper", "scissors", computer);
    ifVal("scissors", "spock", computer);
    ifVal("scissors", "rock", computer);
    ifVal("lizard", "rock", computer);
    ifVal("lizard", "scissor", computer);
    ifVal("spock", "lizard", computer);
    ifVal("spock", "paper", computer);

    return result;
};
