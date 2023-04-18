import playGame from '../index.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getInputGame = () => {
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

  return [expression, correctAnswer];
};

const playPrime = () => playGame(getInputGame, rules);

export default playPrime;
