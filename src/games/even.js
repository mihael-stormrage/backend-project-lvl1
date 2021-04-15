import getRandInt from '../utils.js';
import makeGame from '../index.js';

const even = () => makeGame(
  'Answer "yes" if the number is even, otherwise answer "no".',
  () => {
    const q = getRandInt();
    return { question: q, answer: q % 2 === 0 ? 'yes' : 'no' };
  },
);

export default even;
