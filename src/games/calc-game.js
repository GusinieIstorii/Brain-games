import playGame from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const rules = 'What is the result of the expression?';

const getInputGame = () => {
  const randomNumber1 = getRandomNumber();
  const randomNumber2 = getRandomNumber();

  const operators = ['+', '-', '*'];
  const random = Math.floor(Math.random() * operators.length);
  const operator = operators[random];

  const expression = `${randomNumber1} ${operator} ${randomNumber2}`;

  let correctAnswer;
  switch (operator) {
    case '+':
      correctAnswer = (randomNumber1 + randomNumber2).toString();
      break;
    case '-':
      correctAnswer = (randomNumber1 - randomNumber2).toString();
      break;
    case '*':
      correctAnswer = (randomNumber1 * randomNumber2).toString();
      break;
    default:
      correctAnswer = "Wat's going on?!";
  }

  return [expression, correctAnswer];
};

const playCalc = () => playGame(getInputGame, rules);

export default playCalc;
