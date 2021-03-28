import getRandInt from '../math.js';
import { ask } from '../cli.js';
import play from '../engine.js';

const calc = () => {
  console.log('What is the result of the expression?');

  return play(() => {
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
    console.log(`Question: ${q}`);
    return ask(ans.toString());
  });
};

export default calc;
