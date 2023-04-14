#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { playGame } from '../src/index.js';

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);

console.log('Answer "yes" if the number is even, otherwise answer "no".');

const getRandomNumber = () => Math.round(Math.random() * 100);
const isEven = (number) => (number % 2 === 0 ? 'yes' : 'no');

const playOneRound = () => {
  const expression = getRandomNumber(); // эта переменная будет разная в каждой игре
  const correctAnswer = isEven(expression); // и эта тоже.
  // как их вынести за пределы универсального первого шага?
  console.log(`Question: ${expression}`);
  const userAnswer = readlineSync.question('Your answer: ');

  if (userAnswer === correctAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  return false;
};

playGame();
