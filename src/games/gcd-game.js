import playGame from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const rules = 'Find the greatest common divisor of given numbers.';

const getCommonDivider = (number1, number2) => {
  // let correctAnswer;
  // let min;

  // if (number1 < number2) {
  //   min = number1;
  // } else {
  //   min = number2;
  // }
  // for (let i = 1; i <= min; i += 1) {
  //   if (number1 % i === 0 && number2 % i === 0) {
  //     correctAnswer = i;
  //   }
  // }
  let reassignedNum1 = number1;
  let reassignedNum2 = number2;
  while (reassignedNum1 !== 0 && reassignedNum2 !== 0) {
    if (reassignedNum1 > reassignedNum2) {
      reassignedNum1 %= reassignedNum2;
    } else {
      reassignedNum2 %= reassignedNum1;
    }
  }
  const correctAnswer = reassignedNum1 + reassignedNum2;

  return correctAnswer;
};

const getInputGame = () => {
  const randomNumber1 = getRandomNumber();
  const randomNumber2 = getRandomNumber();

  const expression = `${randomNumber1} ${randomNumber2}`;
  const correctAnswer = getCommonDivider(randomNumber1, randomNumber2).toString();
  // почему два предпоследних коммита с этим изменением прошли удачно, а третий показал ошибку?

  return [expression, correctAnswer];
};

const playGcd = () => playGame(getInputGame, rules);

export default playGcd;
