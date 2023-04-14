#!/usr/bin/env node
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);

console.log('Answer "yes" if the number is even, otherwise answer "no".');

const getRandomNumber = () => Math.round(Math.random() * 100);
const isEven = (number) => (number % 2 === 0 ? 'yes' : 'no');

const playOneRound = () => {
  const randomNumber = getRandomNumber();
  const correctAnswer = isEven(randomNumber);
  console.log(`Question: ${randomNumber}`);
  const userAnswer = readlineSync.question('Your answer: ');

  if (userAnswer === correctAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  console.log(`Let's try again, ${name}`);
  return false;
};

const playGame = () => {
  for (let i = 0; i < 3; i += 1) {
    const roundResult = playOneRound();
    if (!roundResult) {
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

playGame();
