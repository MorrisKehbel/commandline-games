const args = process.argv.slice(2);

// const args = ["Rock"];
const items = ["Rock", "Paper", "Scissors"];
const randomChoice = items[Math.floor(Math.random() * items.length)];

const getResult = () => {
  if (args == randomChoice) return "draw";
  else if (args == "Rock" && randomChoice == "Scissors") return "won";
  else if (args == "Rock" && randomChoice == "Paper") return "lost";
  else if (args == "Paper" && randomChoice == "Rock") return "won";
  else if (args == "Paper" && randomChoice == "Scissors") return "lost";
  else if (args == "Scissors" && randomChoice == "Rock") return "lost";
  else if (args == "Scissors" && randomChoice == "Paper") return "won";
};

console.log(
  `You chose ${args}. Computer chose ${randomChoice}. You ${getResult()}.`
);
