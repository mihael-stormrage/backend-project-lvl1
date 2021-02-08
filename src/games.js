import getRandInt from './math.js';
import { ask } from './cli.js';

let played = 0;

const play = (game) => {
  while (played < 3) {
    if (!game()) break;
    played += 1;
  }
  return played === 3;
};

const even = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  return play(() => {
    const q = getRandInt();
    console.log(`Question: ${q}`);
    return ask(q % 2 === 0 ? 'yes' : 'no');
  });
};

export { even as default };
