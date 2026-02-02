// Scores
let humanScore = 0;
let computerScore = 0;

// Computer choice function
const getComputerChoice = () => {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

// Play one round
function playRound(humanChoice) {
    const computerChoice = getComputerChoice();
    let roundMessage = '';

    if (humanChoice === computerChoice) {
        roundMessage = `It's a tie! You both chose ${humanChoice}.`;
    } else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
        humanScore++;
        roundMessage = `You win! ${humanChoice} beats ${computerChoice}.`;
    } else {
        computerScore++;
        roundMessage = `You lose! ${computerChoice} beats ${humanChoice}.`;
    }

    // Update DOM
    document.getElementById('roundResult').textContent = roundMessage;
    document.getElementById('score').textContent = `You: ${humanScore} - Computer: ${computerScore}`;

    // Check if someone reached 5 points
    if (humanScore === 5 || computerScore === 5) {
        const winnerMessage = humanScore === 5 
            ? `🎉 You won the game! Final score: ${humanScore} - ${computerScore}` 
            : `😢 You lost the game! Final score: ${humanScore} - ${computerScore}`;

        document.getElementById('finalWinner').textContent = winnerMessage;

        // Disable buttons to stop further play
        document.getElementById('rock').disabled = true;
        document.getElementById('paper').disabled = true;
        document.getElementById('scissors').disabled = true;
    }
}

// Add event listeners to buttons
document.getElementById('rock').addEventListener('click', () => playRound('rock'));
document.getElementById('paper').addEventListener('click', () => playRound('paper'));
document.getElementById('scissors').addEventListener('click', () => playRound('scissors'));
