import getRandInt from '../math.js';
import { ask } from '../cli.js';
import play from '../engine.js';

const even = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  return play(() => {
    const q = getRandInt();
    console.log(`Question: ${q}`);
    return ask(q % 2 === 0 ? 'yes' : 'no');
  });
};

export default even;
