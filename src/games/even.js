import gameLogic from '../index.js';
import getRandomInt from '../helper-functions.js';

const isEven = (num) => (num % 2 === 0);

const intro = 'Answer "yes" if the number is even, otherwise answer "no".';

const startRound = () => {
  const value = getRandomInt();
  const questionValue = `${value}`;
  const rightAnswer = isEven(value) ? 'yes' : 'no';
  return [questionValue, rightAnswer];
};

const playEvenGame = () => gameLogic(intro, startRound);

export default playEvenGame;
