import getRandInt from '../utils.js';
import makeGame from '../index.js';

const calcGame = () => makeGame(
  'What is the result of the expression?',
  () => {
    const a = getRandInt();
    const b = getRandInt();
    switch (getRandInt(1, 3)) {
      case 1:
        return { question: `${a} + ${b}`, answer: a + b };
      case 2:
        return { question: `${a} - ${b}`, answer: a - b };
      case 3:
        return { question: `${a} * ${b}`, answer: a * b };
      default:
        throw new Error('Wrong operator');
    }
  },
);

export default calcGame;
