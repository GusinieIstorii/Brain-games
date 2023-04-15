import readlineSync from 'readline-sync';

const playGame = (getInputGame) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  const rules = getInputGame()[2];
  console.log(rules);
  for (let i = 0; i < 3; i += 1) {
    const inputGame = getInputGame();
    const expression = inputGame[0];
    const correctAnswer = inputGame[1];
    console.log(`Question: ${expression}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`,
      );
      console.log(`Let's try again, ${name}`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default playGame;
