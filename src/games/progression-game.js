import playGame from '../index.js';

const getInputGame = () => {
  const rules = 'What number is missing in the progression?';
  const startNumber = Math.round(Math.random() * 100);
  const step = Math.round(Math.random() * 10);

  const array = [];

  for (let i = 0; i <= 10; i += 1) {
    array[i] = startNumber + step * i;
  }

  const randomHide = Math.floor(Math.random() * 10);
  const correctAnswer = array[randomHide].toString();
  array[randomHide] = '..';
  const expression = array.join(' ');

  return [expression, correctAnswer, rules];
};

const playProgression = () => playGame(getInputGame);

export default playProgression;
