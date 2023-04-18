import playGame from '../index.js';

const getInputGame = () => {
  const rules = 'Find the greatest common divisor of given numbers.';
  const randomNumber1 = Math.round(Math.random() * 100);
  const randomNumber2 = Math.round(Math.random() * 100);

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

  return [expression, correctAnswer, rules];
};

const playGcd = () => playGame(getInputGame);

export default playGcd;
