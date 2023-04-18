import playGame from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (expression) => {
  let correctAnswer = 'yes';

  if (expression <= 1) {
    correctAnswer = 'no';
  }

  for (let i = 2; i < expression; i += 1) {
    if (expression % i === 0) {
      correctAnswer = 'no';
      break;
    }
  }
  return correctAnswer;
};

const getInputGame = () => {
  const expression = getRandomNumber();
  const correctAnswer = isPrime(expression);

  return [expression, correctAnswer];
};

const playPrime = () => playGame(getInputGame, rules);

export default playPrime;
