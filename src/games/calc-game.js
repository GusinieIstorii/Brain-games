import playGame from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const rules = 'What is the result of the expression?';

const calculate = (number1, operator, number2) => {
  let correctAnswer;
  switch (operator) {
    case '+':
      correctAnswer = (number1 + number2);
      break;
    case '-':
      correctAnswer = (number1 - number2);
      break;
    case '*':
      correctAnswer = (number1 * number2);
      break;
    default:
      correctAnswer = operator;
  }
  return correctAnswer;
};

const getInputGame = () => {
  const randomNumber1 = getRandomNumber();
  const randomNumber2 = getRandomNumber();

  const operators = ['+', '-', '*'];
  const random = getRandomNumber(operators.length - 1);
  const operator = operators[random];

  const expression = `${randomNumber1} ${operator} ${randomNumber2}`;
  const correctAnswer = calculate(randomNumber1, operator, randomNumber2).toString();

  return [expression, correctAnswer];
};

const playCalc = () => playGame(getInputGame, rules);

export default playCalc;
