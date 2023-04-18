import playGame from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const rules = 'Find the greatest common divisor of given numbers.';

const getInputGame = () => {
  const randomNumber1 = getRandomNumber();
  const randomNumber2 = getRandomNumber();

  const expression = `${randomNumber1} ${randomNumber2}`;
  let correctAnswer;
  let min;

  if (randomNumber1 < randomNumber2) {
    min = randomNumber1;
  } else {
    min = randomNumber2;
  }
  for (let i = 1; i <= min; i += 1) {
    if (randomNumber1 % i === 0 && randomNumber2 % i === 0) {
      correctAnswer = i.toString();
    }
  }

  return [expression, correctAnswer];
};

const playGcd = () => playGame(getInputGame, rules);

export default playGcd;
