document.addEventListener("DOMContentLoaded", function () {
    let choices = document.getElementsByClassName("uchoice");
    for (let choice of choices) {
        choice.addEventListener("click", function () {
            computerChoice();

        });
    }
});

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


function incrementComputerScore() {    
    let computerScore = parseInt(document.getElementById("computer-score").innerText);
    document.getElementById("computer-score").innerText = ++computerScore;
}

function incrementUserScore () {
    let userScore = parseInt(document.getElementById("you-score").innerText);
    document.getElementById("you-score").innerText = ++userScore;
}

function resetScore() {
    let clear = document.getElementById("reset");
    clear.addEventListener("click", function () {
        document.getElementById("you-score").innerText = 0;
        document.getElementById("computer-score").innerText = 0;
    });
}
resetScore();

function computerChoice() {
    const rand = Math.floor(Math.random() * 5) + 1;
    let rock = document.getElementById("path-rock");
    let paper = document.getElementById("path-paper");
    let scissor = document.getElementById("path-scissor");
    let lizard = document.getElementById("path-lizard");
    let spock = document.getElementById("path-spock");
    if (rand == 1) {
        rock.style.fill = "#ffd700";
    } else if (rand == 2) {
        paper.style.fill = "#ffd700";
        paper.style.transitionDuration= "2s";
    } else if (rand == 3) {
        scissor.style.fill = "#ffd700";
        scissor.style.transitionDuration= "2s";
    } else if (rand == 4) {
        lizard.style.fill = "#ffd700";
        lizard.style.transitionDuration= "2s";
    } else if (rand == 5) {
        spock.style.fill = "#ffd700";
        spock.style.transitionDuration= "2s";
    }
}