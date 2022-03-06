document.addEventListener("DOMContentLoaded", function () {
    let choices = document.getElementsByClassName("uchoice");
    for (let choice of choices) {
        choice.addEventListener("click", function () {
            incrementScore();
            computerChoice();

        });
    }
});

// function outRock() {
//     var rock = document.getElementById("crock");
//     rock.style.fill = "#ffd700";
// };

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

function computerChoice() {
    const rand = Math.floor(Math.random() * 5) + 1;
    alert(`Computer chose: ${rand}`);
    let rock = document.getElementById("crock");
    let paper = document.getElementById("cpaper");
    let scissor = document.getElementById("cscissor");
    let lizard = document.getElementById("clizard");
    let spock = document.getElementById("cspock");

    if (rand == 1) {
        rock.style.fill = "#ffd700";
    } else if (rand == 2) {
        paper.style.fill = "#ffd700";
    } else if (rand == 3) {
        scissor.style.fill = "#ffd700";
    } else if (rand == 4) {
        lizard.style.fill = "#ffd700";
    } else if (rand == 5) {
        spock.style.fill = "#ffd700";
    }
}