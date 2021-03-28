import getRandInt from '../math.js';
import makeGame from '../index.js';

const even = () => makeGame(
  'Answer "yes" if the number is even, otherwise answer "no".',
  () => getRandInt(),
  (q) => (q % 2 === 0 ? 'yes' : 'no'),
);

export default even;
