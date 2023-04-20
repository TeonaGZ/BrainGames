import gameLogic from '../index.js';
import getRandomInt from '../helper-functions.js';

const intro = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const startRound = () => {
  const value = getRandomInt();
  const questionValue = `${value}`;
  const rightAnswer = isPrime(value) ? 'yes' : 'no';
  return [questionValue, rightAnswer];
};

const playPrimeGame = () => gameLogic(intro, startRound);

export default playPrimeGame;
