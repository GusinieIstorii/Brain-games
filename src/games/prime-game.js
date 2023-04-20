import playGame from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (expression) => {
  if (expression <= 1) {
    return false;
  }

  for (let i = 2; i < expression; i += 1) {
    if (expression % i === 0) {
      return false;
    }
  }
  return true;
};

const getInputGame = () => {
  const expression = getRandomNumber();

  let correctAnswer;
  if (isPrime(expression)) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }

  return [expression, correctAnswer];
};

const playPrime = () => playGame(getInputGame, rules);

export default playPrime;
