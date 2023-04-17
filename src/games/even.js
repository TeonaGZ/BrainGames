import gameLogic from '../index.js';

const getRandomInt = (max) => Math.floor(Math.random() * max);
const isEven = (num) => (num % 2 === 0);

const intro = 'Answer "yes" if the number is even, otherwise answer "no".';

const startRound = () => {
  const value = getRandomInt(101);
  const questionValue = `${value}`;
  const rightAnswer = isEven(value) ? 'yes' : 'no';
  return [questionValue, rightAnswer];
};

const playEvenGame = () => gameLogic(intro, startRound);

export default playEvenGame;