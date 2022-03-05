document.addEventListener("DOMContentLoaded", function () {
    let choices = document.getElementsByClassName("uchoice");
    for (let choice of choices) {
        choice.addEventListener("click", function () {
            let mygame = this.getAttribute("data-selection");
            // alert(`You clicked ${mygame}`);
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

// function resetScore() {
//     let clear = document.getElementById("reset");
//      clear.addEventListener("click", function() {
//          alert('you clicked reset');
//     let userScore = parseInt(document.getElementById("you-score").innerText);
// 	document.getElementById("you-score").innerText = 0;
//     let computerScore = parseInt(document.getElementById("computer-score").innerText);
// 	document.getElementById("computer-score").innerText = 0;

//      });
// }
// resetScore();

function resetScore() {
    let clear = document.getElementById("reset");
    clear.addEventListener("click", function () {
        let userScore = parseInt(document.getElementById("you-score").innerText);
        document.getElementById("you-score").innerText = 0;
        let computerScore = parseInt(document.getElementById("computer-score").innerText);
        document.getElementById("computer-score").innerText = 0;
    });
    if (document.getElementById("computer-score").innerText = 3) {alert('it is three')}
}
resetScore();