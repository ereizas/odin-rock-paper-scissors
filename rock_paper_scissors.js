let humanScore = 0;
let computerScore = 0;

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

function getHumanChoice(){
    let choice = prompt("Choose a number:\n1. rock\n2. paper\n3. scissors")
    switch(choice) {
        case "1":
            return "rock";
        case "2":
            return "paper";
        case "3":
            return "scissors";
    }
}

function playRound(humanChoice,computerChoice){
    beats = {"rock":{"paper":false,"scissors":true},"paper":{"rock":true,"scissors":false},"scissors":{"rock":false,"paper":true}}
    if(humanChoice==computerChoice){
        console.log("Tie");
    }
    else if(beats[humanChoice][computerChoice]){
        humanScore++;
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    }
    else{
        computerScore++;
        console.log(`You lose. ${computerChoice} beats ${humanChoice}`)
    }
}

playRound(getHumanChoice(),getComputerChoice());