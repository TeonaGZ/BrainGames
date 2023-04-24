import runGame from '../index.js';
import getRandomInt from '../helper-functions.js';

const isEven = (num) => (num % 2 === 0);

const intro = 'Answer "yes" if the number is even, otherwise answer "no".';

const getRoundData = () => {
  const value = getRandomInt();
  const questionValue = `${value}`;
  const rightAnswer = isEven(value) ? 'yes' : 'no';
  return [questionValue, rightAnswer];
};

const playEvenGame = () => runGame(intro, getRoundData);

export default playEvenGame;
