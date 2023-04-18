import playGame from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const rules = 'What number is missing in the progression?';

const getInputGame = () => {
  const startNumber = getRandomNumber();
  const step = getRandomNumber(10);

  const array = [];

  for (let i = 0; i <= 10; i += 1) {
    array[i] = startNumber + step * i;
  }

  const randomHide = getRandomNumber(10);
  const correctAnswer = array[randomHide].toString();
  array[randomHide] = '..';
  const expression = array.join(' ');

  return [expression, correctAnswer];
};

const playProgression = () => playGame(getInputGame, rules);

export default playProgression;
