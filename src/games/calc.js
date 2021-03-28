import getRandInt from '../math.js';
import makeGame from '../index.js';

const calc = () => makeGame(
  'What is the result of the expression?',
  () => {
    const a = getRandInt();
    const b = getRandInt();
    let q;
    let ans;
    switch (getRandInt(1, 3)) {
      case 1:
        q = `${a} + ${b}`;
        ans = a + b;
        break;
      case 2:
        q = `${a} - ${b}`;
        ans = a - b;
        break;
      case 3:
        q = `${a} * ${b}`;
        ans = a * b;
        break;
      default:
        break;
    }
    return { question: q, answer: ans };
  },
);

export default calc;
