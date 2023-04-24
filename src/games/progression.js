import runGame from '../index.js';
import getRandomInt from '../helper-functions.js';

const intro = 'What number is missing in the progression?';

const getProgression = (firstValue, step, arrLength) => {
  const progression = [firstValue];

  for (let i = 0; i < arrLength; i += 1) {
    const nextValue = progression[progression.length - 1] + step;
    progression.push(nextValue);
  }

  return progression;
};

const getRoundData = () => {
  const value = getRandomInt(1, 20);
  const stepValue = getRandomInt(1, 5);
  const progressionLength = getRandomInt(5, 10);
  const missingValuePlace = getRandomInt(0, progressionLength);

  const progression = getProgression(value, stepValue, progressionLength);

  const missingValue = progression[missingValuePlace];
  progression[missingValuePlace] = '..';

  const questionValue = `${progression}`;
  const rightAnswer = `${missingValue}`;
  return [questionValue, rightAnswer];
};

const playProgressionGame = () => runGame(intro, getRoundData);

export default playProgressionGame;
