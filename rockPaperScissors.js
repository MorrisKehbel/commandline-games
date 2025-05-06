const args = process.argv.slice(2);

// const args = ["Rock"];
const items = ["Rock", "Paper", "Scissors"];
const randomChoice = items[Math.floor(Math.random() * items.length)];

const getResult = () => {
  if (args == randomChoice) return "Its a draw";
  else if (
    (args == "Rock" && randomChoice == "Paper") ||
    (args == "Scissors" && randomChoice == "Rock") ||
    (args == "Paper" && randomChoice == "Scissors")
  ) {
    return "You lost";
  } else return "You won";
};

console.log(
  `You chose ${args}. Computer chose ${randomChoice}. ${getResult()}.`
);
