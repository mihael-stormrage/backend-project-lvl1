import getRandInt, { sequence } from '../utils.js';
import makeGame from '../index.js';

const printSeq = (start, step, n) => {
  const seq = [];
  for (let i = 1; i <= 10; i += 1) {
    seq.push(i === n ? '..' : sequence(start, step, i));
  }
  return seq.join(' ');
};

const progressionGame = () => makeGame(
  'What number is missing in the progression?',
  () => {
    const start = getRandInt(1, 19);
    const step = getRandInt(1, 9);
    const n = getRandInt(1, 10);
    return { question: printSeq(start, step, n), answer: sequence(start, step, n) };
  },
);

export default progressionGame;
