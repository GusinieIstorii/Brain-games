import readlineSync from 'readline-sync';

const askName = () => {
  const name = readlineSync.question('May I have your name? ');
  return name;
};

const name = askName();

const sayHello = () => {
  console.log(`Hello, ${name}!`);
};

const playGame = (playOneRound) => {
  for (let i = 0; i < 3; i += 1) {
    const roundResult = playOneRound();
    if (!roundResult) {
      console.log(`Let's try again, ${name}`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export { askName, sayHello, playGame };
