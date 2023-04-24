import runGame from '../index.js';
import getRandomInt from '../helper-functions.js';

const intro = 'What is the result of the expression?';

const operators = ['+', '-', '*'];

const calculate = (sign, num1, num2) => {
  switch (sign) {
    case '+':
      return (num1 + num2);
    case '-':
      return (num1 - num2);
    case '*':
      return (num1 * num2);
    default:
      return 'invalid operator, use only "+", "-" and "*"';
  }
};

const getRoundData = () => {
  const value1 = getRandomInt();
  const value2 = getRandomInt();

  const operatorNumber = getRandomInt(0, 2);
  const operator = operators[operatorNumber];

  const questionValue = `${value1} ${operator} ${value2}`;
  const rightAnswer = String(calculate(operator, value1, value2));
  return [questionValue, rightAnswer];
};

const playCalcGame = () => runGame(intro, getRoundData);

export default playCalcGame;
