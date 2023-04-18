import playGame from '../index.js';

const getInputGame = () => {
  const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const expression = Math.round(Math.random() * 100);

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

  return [expression, correctAnswer, rules];
};

const playPrime = () => playGame(getInputGame);

export default playPrime;
