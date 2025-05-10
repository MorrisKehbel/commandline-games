const args = process.argv.slice(2);
const items = ["rock", "paper", "scissors"];
const randomChoice = items[Math.floor(Math.random() * items.length)];
const userChoice = args[0]?.toLowerCase();

const getResult = () => {
  if (!items.includes(userChoice)) {
    console.error("Wrong input! Choose one of: Rock, Paper or Scissors.");
    return;
  }
  let result = "";
  if (userChoice === randomChoice) {
    result = "It's a draw";
  } else if (
    (userChoice === "rock" && randomChoice === "paper") ||
    (userChoice === "scissors" && randomChoice === "rock") ||
    (userChoice === "paper" && randomChoice === "scissors")
  ) {
    result = "You lost";
  } else {
    result = "You won";
  }
  console.log(
    `You chose ${userChoice}. Computer chose ${randomChoice}. ${result}.`
  );
};

getResult();
