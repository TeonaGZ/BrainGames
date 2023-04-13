import readlineSync from 'readline-sync';

const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
};

const isEven = (num) => {
    return num % 2 === 0 ? true : false
}; 

const evenGame = () => {
    console.log('Welcome to the Brain Games!');
    const userName = readlineSync.question('May I have your name? ');
    console.log('Hello, ' + userName + '!');
    console.log('Answer "yes" if the number is even, otherwise answer "no".');

    for (let i = 0; i < 3; i += 1) {
    let number = getRandomInt(101);
    const gameQuestion = 'Question: ' + number; 
    console.log(gameQuestion);
    
    const usersAnswer = readlineSync.question('Your answer: ');
    
    const trueEven = (isEven(number) === true) && (usersAnswer === 'yes');
    const trueOdd = (isEven(number) === false) && (usersAnswer === 'no');

    if (trueEven === true || trueOdd === true) {
        console.log('Correct!');
    } else if (isEven(number) === true) {
        const errAnswer = `'${usersAnswer}' is wrong answer ;(. Correct answer was 'yes'.
        Let's try again, ${userName}!`;
        console.log(errAnswer);
        i = -1;
    } else if (isEven(number) !== true) {
        const errAnswer = `'${usersAnswer}' is wrong answer ;(. Correct answer was 'no'.
        Let's try again, ${userName}!`;
        console.log(errAnswer);
        i = -1;
    }
    } 
    console.log(`Congratulations, ${userName}!`);
};

export default evenGame;




