import readlineSync from 'readline-sync';

const gameLogic = (intro, startRound) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(intro);

  const wonRoundsCount = 3;

  for (let i = 0; i < wonRoundsCount; i += 1) {
    const [questionValue, rightAnswer] = startRound();
    console.log(`Question: ${questionValue}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === rightAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.
      Let's try again, ${userName}!`);
      i = -1;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default gameLogic();
