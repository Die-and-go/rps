


//Function that gets a random variable (COMPLETE)
function getComputerChoice() {

let computerSelection = ["rock", "paper", "scissors"][Math.floor(Math.random() * 3)];

return computerSelection;
}

console.log(getComputerChoice())


//Function that allows a player to type and enter a variable
function getPlayerChoice() {

    let playerSelection = prompt("Select rock, paper, or scissors");

    if(playerSelection == "rock") {
        console.log("you chose rock")
    } else if(playerSelection == "paper") {
        console.log ("you chose paper")
    } else if(playerSelection == "scissors") {
        console.log("you chose scissors")
    }
}

console.log(getPlayerChoice())