import gameLogic from '../index.js';
import getRandomInt from '../helper-functions.js';

const intro = 'What is the result of the expression?';

const startRound = () => {
  const value1 = getRandomInt(101);
  const value2 = getRandomInt(101);

  const operatorNumber = getRandomInt(3);
  const operators = ['+', '-', '*'];
  const operator = operators[operatorNumber];

  const calculate = () => {
    switch (operator) {
      case '+':
        return (value1 + value2);
      case '-':
        return (value1 - value2);
      case '*':
        return (value1 * value2);
      default:
        return 'invalid operator, use only "+", "-" and "*"';
    }
  };

  const questionValue = `${value1} ${operator} ${value2}`;
  const rightAnswer = String(calculate());
  return [questionValue, rightAnswer];
};

const playCalcGame = () => gameLogic(intro, startRound);

export default playCalcGame;
