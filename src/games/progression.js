import getRandInt, { sequence } from '../math.js';
import { ask } from '../cli.js';
import play from '../engine.js';

const printSeq = (start, step, n) => {
  const seq = [];
  for (let i = 1; i <= 10; i += 1) {
    seq.push(i === n ? '..' : sequence(start, step, i));
  }
  return seq.join(' ');
};

const progression = () => {
  console.log('What number is missing in the progression?');

  return play(() => {
    const start = getRandInt(1, 19);
    const step = getRandInt(1, 9);
    const n = getRandInt(1, 10);
    console.log(`Question: ${printSeq(start, step, n)}`);
    return ask(sequence(start, step, n).toString());
  });
};

export default progression;
