import playGame from '../index.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const getInputGame = () => {
  const expression = Math.round(Math.random() * 100);
  let correctAnswer;
  if (expression % 2 === 0) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }
  return [expression, correctAnswer];
};

const playEven = () => playGame(getInputGame, rules);

export default playEven;
