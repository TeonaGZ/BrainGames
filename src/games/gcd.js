import runGame from '../index.js';
import getRandomInt from '../helper-functions.js';

const intro = 'Find the greatest common divisor of given numbers.';

const getGCD = (num1, num2) => {
  if (num2 === 0) {
    return num1;
  }
  return getGCD(num2, num1 % num2);
};

const getRoundData = () => {
  const value1 = getRandomInt();
  const value2 = getRandomInt();

  const questionValue = `${value1} ${value2}`;
  const rightAnswer = String(getGCD(value1, value2));
  return [questionValue, rightAnswer];
};

const playGcdGame = () => runGame(intro, getRoundData);

export default playGcdGame;
