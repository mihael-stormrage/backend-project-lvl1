import getRandInt from '../math.js';
import { ask } from '../cli.js';
import play from '../engine.js';

const calc = () => {
  console.log('What is the result of the expression?');

  return play(() => {
    const a = getRandInt();
    const b = getRandInt();
    let q;
    switch (getRandInt(1, 3)) {
      case 1:
        q = `${a} + ${b}`;
        break;
      case 2:
        q = `${a} - ${b}`;
        break;
      case 3:
        q = `${a} * ${b}`;
        break;
      default:
        break;
    }
    console.log(`Question: ${q}`);
    // eslint-disable-next-line no-eval
    return ask(eval(q).toString());
  });
};

export default calc;
