function getComputerChoice(){
    let choice = Math.floor(Math.random()*3);
    switch(choice) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}
let winnerHeader = document.querySelector("#winner");
let humanScorePara = document.querySelector("#humanScore");
let computerScorePara = document.querySelector("#computerScore");
let resultPara = document.querySelector("#result");
let humanScore = 0;
let computerScore = 0;
function playRound(humanChoice,computerChoice){
    beats = {"rock":{"paper":false,"scissors":true},"paper":{"rock":true,"scissors":false},"scissors":{"rock":false,"paper":true}}
    if(humanChoice==computerChoice){
        resultPara.textContent = "Tie";
    }
    else if(beats[humanChoice][computerChoice]){
        humanScore++;
        humanScorePara.textContent = humanScore;
        resultPara.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
    }
    else{
        computerScore++;
        computerScorePara.textContent = computerScore;
        resultPara.textContent = `You lose. ${computerChoice} beats ${humanChoice}`;
    }
    if(humanScore==5){
        winnerHeader.textContent = "You won!";
    }
    else if(computerScore==5){
        winnerHeader.textContent = "You lost :(";
    }
}

let options = document.querySelector("#options");

options.addEventListener("click", function(event){
    playRound(event.target.id,getComputerChoice());
})

playGame();