import getRandInt from '../utils.js';
import makeGame from '../index.js';

const description = 'What number is missing in the progression?';

const getSeqEm = (start, step, n = 1) => start + (n - 1) * step;

const buildSeq = (start, step, n) => {
  const seq = [];
  for (let i = 1; i <= 10; i += 1) {
    seq.push(i === n ? '..' : getSeqEm(start, step, i));
  }
  return seq.join(' ');
};

const progressionGame = () => makeGame(
  description,
  () => {
    const start = getRandInt(1, 19);
    const step = getRandInt(1, 9);
    const n = getRandInt(1, 10);
    return { question: buildSeq(start, step, n), answer: getSeqEm(start, step, n) };
  },
);

export default progressionGame;
