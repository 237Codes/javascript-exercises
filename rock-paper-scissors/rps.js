console.log("Hello World");

//Create computer Logic

 function getComputerChoice(){
    const choices = ["rock", "paper", "scissors"];
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    return randomChoice
}


//Create Logic to get human choice

function getHumanChoice() {
    const choices = ["rock", "paper", "scissors"];
    let userChoice = prompt("Please enter your choice (rock, paper, or scissors):").toLowerCase();

    while (!choices.includes(userChoice)) {
        userChoice = prompt("Invalid choice. Please enter rock, paper, or scissors:").toLowerCase();
    }

    return userChoice;
}




function playGame(){

    //declare the player score variables
    let humanScore = 0;
    let computerScore = 0;

    //Play 5 rounds
    let rounds = 5;

    while(rounds > 0){
        //get choices from human and computer
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();

        function playRound(humanChoice, computerChoice) {
            if (humanChoice === computerChoice) {
                console.log("It's a tie!");
            } else if (humanChoice === "rock") {
                if (computerChoice === "scissors") {
                    humanScore += 1;
                   console.log("You win! Rock beats Scissors.");
                } else {
                    computerScore +=1;
                    console.log("You lose! Paper beats Rock.");
                }
            } else if (humanChoice === "paper") {
                if (computerChoice === "rock") {
                    humanScore += 1;
                    console.log("You win! Paper beats Rock.");
                } else {
                    computerScore +=1;
                   console.log("You lose! Scissors beats Paper.");
                }
            } else if (humanChoice === "scissors") {
                if (computerChoice === "paper") {
                    humanScore += 1;
                    console.log("You win! Scissors beats Paper.");
                } else {
                    computerScore +=1;
                   console.log("You lose! Rock beats Scissors.");
                }
            }
        }

        playRound(humanChoice, computerChoice);
        // Decrement the rounds
        rounds--
        console.log(`Score: Human ${humanScore} - Computer ${computerScore}`);
    }

    // Declare Winner when game is over
    if (humanScore > computerScore) {
        console.log("Congratulations! You won the game!");
    } else if (humanScore < computerScore) {
        console.log("Sorry! You lost the game.");
    } else {
        console.log("It's a tie game!");
    }

}

playGame();