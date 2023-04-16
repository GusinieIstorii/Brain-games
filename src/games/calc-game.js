const getInputGame = () => {
  const rules = 'What is the result of the expression?';
  const randomNumber1 = Math.round(Math.random() * 100);
  const randomNumber2 = Math.round(Math.random() * 100);

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

  return [expression, correctAnswer, rules];
};

export default getInputGame;
