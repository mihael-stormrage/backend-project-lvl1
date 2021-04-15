import getRandInt, { isPrime } from '../utils.js';
import makeGame from '../index.js';

const primeGame = () => makeGame(
  'Answer "yes" if given number is prime. Otherwise answer "no".',
  () => {
    const q = getRandInt();
    return { question: q, answer: isPrime(q) ? 'yes' : 'no' };
  },
);

export default primeGame;
