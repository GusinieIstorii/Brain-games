import playGame from '../index.js';

const getInputGame = () => {
  const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
  const expression = Math.round(Math.random() * 100);
  let correctAnswer;
  if (expression % 2 === 0) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }
  return [expression, correctAnswer, rules];
};

const playEven = () => playGame(getInputGame);

export default playEven;
