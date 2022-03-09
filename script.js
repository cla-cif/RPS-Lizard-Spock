let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const reset_btn = document.getElementById("btn-reset");
const rock_div = document.getElementById("urock");
const paper_div = document.getElementById("upaper");
const scissors_div = document.getElementById("uscissors");
const lizard_div = document.getElementById("ulizard");
const spock_div = document.getElementById("uspock");
const result_p = document.getElementById("result-message");

/*document.addEventListener("DOMContentLoaded", function () {}); NOT SURE HOW TO USE THIS*/

function main() {
    //pass to the game funcion the user's choice on click and makes the result message visible
    rock_div.addEventListener("click", function () {
        game("rock");
        result_p.style.visibility = "visible";
    })
    paper_div.addEventListener("click", function () {
        game("paper");
        result_p.style.visibility = "visible";
    })
    scissors_div.addEventListener("click", function () {
        game("scissors");
        result_p.style.visibility = "visible";
    })
    lizard_div.addEventListener("click", function () {
        game("lizard");
        result_p.style.visibility = "visible";
    })
    spock_div.addEventListener("click", function () {
        game("spock");
        result_p.style.visibility = "visible";
    })
};
main();

function game(uChoice) {
    //takes as an argument the user's choice and compares it with the random computer choice
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
            incrementComputerScore();
            break;

        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
        case "lizardlizard":
        case "spockspock":
           tie();
           break;
    }
}

function tie() {
    //displays a temporary message with the outcome of the game function
    result_p.innerHTML = "IT'S A TIE!"
    setTimeout(() => (result_p.style.visibility = "hidden"), 1500);
}

function incrementComputerScore() {
    //displays a temporary message with the outcome of the game function and increments the score
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = "COMPUTER WON!";
    setTimeout(() => (result_p.style.visibility = "hidden"), 1500);
}

function incrementUserScore() {
    //displays a temporary message with the outcome of the game function and increments the score
    userScore++;
    userScore_span.innerHTML = userScore;
    result_p.innerHTML = "YOU WON!";
    setTimeout(() => (result_p.style.visibility = "hidden"), 1500);
}

function winner(userScore, computerScore) {
    // IT DOESN'T WORK! - displays the winner and resets the game
    if (computerScore == "10") {
        result_p.innerHTML = "COMPUTER WON THE MATCH!";
        setTimeout(() => (result_p.style.visibility = "hidden"), 1500);
    }
    if (userScore == "10") {
        result_p.innerHTML = "YOU WON THE MATCH!";
        setTimeout(() => (result_p.style.visibility = "hidden"), 1500);
    }
}
winner();

function resetScore() {
    //reset the score variables on click and displays the updated value
    reset_btn.addEventListener("click", function () {
        userScore = 0;
        computerScore = 0;
        userScore_span.innerHTML = 0;
        computerScore_span.innerHTML = 0;
        result_p.style.visibility = "hidden";
    });
}
resetScore();

function styleComputerChoice(){
    //instead of repeating the same 
}

function computerChoice() {
    //generates a random number associated with 
    const computerDraws = ["rock", "paper", "scissors", "lizard", "spock"]
    const randomNumber = Math.floor(Math.random() * computerDraws.length);
    
    const rock = document.getElementById("path-rock");
    const paper = document.getElementById("path-paper");
    const scissors = document.getElementById("path-scissors");
    const lizard = document.getElementById("path-lizard");
    const spock = document.getElementById("path-spock");

    if (randomNumber == "0") {
        rock.style.stroke="#ffd700";
        setTimeout(() => (rock.style.stroke = "#000"), 1500);

    } else if (randomNumber == "1") {
        paper.style.stroke="#ffd700";
        setTimeout(() => (paper.style.stroke = "#000"), 1500);

    } else if (randomNumber == "2") {
        scissors.style.stroke="#ffd700";
        setTimeout(() => (scissors.style.stroke = "#000"), 1500);


    } else if (randomNumber == "3") {
        lizard.style.stroke="#ffd700";
        setTimeout(() => (lizard.style.stroke = "#000"), 1500);

    } else if (randomNumber == "4") {
        spock.style.stroke="#ffd700";
        setTimeout(() => (spock.style.stroke = "#000"), 1500);
        
    }
    return computerDraws[randomNumber];
 
}

