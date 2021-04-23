import { randomInt } from '@dmhtoo/random-int';
import isPrime from 'quick-is-prime';
import makeGame from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const primeGame = () => makeGame(
  description,
  () => {
    const q = randomInt();
    return { question: q, answer: isPrime(q) ? 'yes' : 'no' };
  },
);

export default primeGame;
