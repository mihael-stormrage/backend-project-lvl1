import { randomInt } from '@dmhtoo/random-int';
import makeGame from '../index.js';

const description = 'What number is missing in the progression?';

const getSeqEm = (start, step, i = 0) => start + i * step;

const seqLastIndex = 9;

const buildSeq = (start, step, blankIndex) => {
  const seq = [];
  for (let i = 0; i <= seqLastIndex; i += 1) {
    seq.push(i === blankIndex ? '..' : getSeqEm(start, step, i));
  }
  return seq.join(' ');
};

const progressionGame = () => makeGame(
  description,
  () => {
    const start = randomInt(1, 19);
    const step = randomInt(1, 9);
    const blankIndex = randomInt(0, seqLastIndex);
    return {
      question: buildSeq(start, step, blankIndex),
      answer: getSeqEm(start, step, blankIndex),
    };
  },
);

export default progressionGame;
