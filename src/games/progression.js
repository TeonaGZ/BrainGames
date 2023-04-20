import gameLogic from '../index.js';
import getRandomInt from '../helper-functions.js';

const intro = 'What number is missing in the progression?';

const getProgression = (firstValue, step, arrLength) => {
  const progression = [firstValue];
  const missingValuePlace = getRandomInt(0, arrLength);

  let arrValue = firstValue;
  for (let i = 0; i < arrLength; i += 1) {
    const nextValue = arrValue + step;
    arrValue = nextValue;
    progression.push(nextValue);
  }
  const missingValue = progression[missingValuePlace];
  progression[missingValuePlace] = '..';
  return [progression, missingValue];
};

const startRound = () => {
  const value = getRandomInt(1, 20);
  const stepValue = getRandomInt(1, 5);
  const progressionLength = getRandomInt(5, 10);

  const [questionProgression, missingValue] = getProgression(value, stepValue, progressionLength);
  const questionValue = questionProgression.join(' ');
  const rightAnswer = `${missingValue}`;
  return [questionValue, rightAnswer];
};

const playProgressionGame = () => gameLogic(intro, startRound);

export default playProgressionGame;
