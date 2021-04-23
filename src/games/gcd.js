import { randomInt } from '@dmhtoo/random-int';
import gcd from 'gcd';
import makeGame from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

const gcdGame = () => makeGame(
  description,
  () => {
    const a = randomInt();
    const b = randomInt();
    return { question: `${a} ${b}`, answer: gcd(a, b) };
  },
);

export default gcdGame;
