document.addEventListener("DOMContentLoaded", function() {
    let choices = document.getElementsByClassName("uchoice");
    for (let choice of choices) {
        choice.addEventListener("click", function() {
            let mygame = this.getAttribute("data-selection");
                alert(`You clicked ${mygame}`);
                incrementScore();
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
     clear.addEventListener("click", function() {
         alert('you clicked reset');
     });
}

function restartGame() {   scoreboard.player = 0;/ Return player score back to zero
    scoreboard.computer = 0; // Return computer score back to zero
    score.innerHTML = `
      <p>Player: 0</p>
      <p>Computer: 0</p>
      `;
    restart.style.display = "none"; // Once restarted hide button again
}





function ComputerChoice() {
    const rand = Math.floor(Math.random() * 5) + 1;
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
  