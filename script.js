let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
    return Math.floor(Math.random() * 10);
};

const compareGuesses = (userChoice, computerChoice, secretTarget) => {
    const userDifference = Math.abs(secretTarget - userChoice);
    const computerDifference = Math.abs(secretTarget - computerChoice);

    if (userDifference <= computerDifference) {
        return true;
    } else {
        return false;
    };
};

const updateScore = winner => {
    if (winner === "human") {
        humanScore++;
    } else if (winner === "computer") {
        computerScore++;
    };
};

const advanceRound = () => currentRoundNumber++;