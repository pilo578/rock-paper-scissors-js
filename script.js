const playGame = function () {
    //Computeer choice is made here:
    const getComputerChoice = function() {
        const choices = ['rock', 'paper', 'scissors'];
        const randomIndex = Math.floor(Math.random() * choices.length);
        return choices[randomIndex];
    };

    //Human choice is made here:
    const getHumanChoice = function () {
        let choice = prompt("Enter rock, paper, or scissors:").toLowerCase();
        return choice;
    };

    //Scores Table!!
    //the scores are made GLOBAL here
    let humanScore = 0;
    let computerScore = 0;

    //Game Logic
    function playRound(humanChoice, computerChoice) {
        if (humanChoice == computerChoice) {
            console.log(`It's a tie! You both chose ${humanChoice}.`);
        } else if (
            (humanChoice === 'rock' && computerChoice == 'scissors') ||
            (humanChoice === 'paper' && computerChoice == 'rock') ||
            (humanChoice === 'scissors' && computerChoice == 'paper')
            ) {
                humanScore ++;
                console.log(`You win! ${humanChoice} beats ${computerChoice}`);
            } else {
                computerScore++;
                console.log(`You lose! ${computerChoiceChoice} beats ${humanChoice}`);
            }

            console.log(`Score: You ${humanScore} - Computer ${computerScore}`);
    }

    //PLAY 5 ROUNDS
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    // WINNER!!
    if (humanScore > computerScore) {
        console.log(`You won the game! Final score: ${humanScore} - ${computerScore}`);
    } else if (humanScore < computerScore) {
        console.log(`You lost the game! Final score: ${humanScore} - ${computerScore}`);
    } else {
        console.log(`The game is a tie! Final score: ${humanScore} - ${computerScore}`);
    }
};

// START THE GAME!!
playGame();
