document.addEventListener("DOMContentLoaded", function () {
    let choices = document.getElementsByClassName("uchoice");
    for (let choice of choices) {
        choice.addEventListener("click", function () {
            let mygame = this.getAttribute("data-selection");
            incrementScore();
            computerChoice ();
        });
    }
});

function incrementScore() {
    // Gets the current score from the DOM and increments it
    let userScore = parseInt(document.getElementById("you-score").innerText);
    document.getElementById("you-score").innerText = ++userScore;
    let computerScore = parseInt(document.getElementById("computer-score").innerText);
    document.getElementById("computer-score").innerText = ++computerScore;
}


function resetScore() {
    let clear = document.getElementById("reset");
    clear.addEventListener("click", function () {
        document.getElementById("you-score").innerText = 0;
        document.getElementById("computer-score").innerText = 0;
    });
}
resetScore();

function computerChoice () {
    const rand = Math.floor(Math.random() * 5) + 1;
        alert (`Computer chose: ${rand}`);
    if (rand == 1) {
      return "Rock";
    } else if (rand == 2) {
      return "Paper";
    } else if (rand == 3) {
      return "Scissors";
    } else if (rand == 4) {
      return "Lizard";
    } else if (rand == 5) {
      return "Spock";
    }
  }