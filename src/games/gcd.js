import getRandInt, { gcd as getGcd } from '../utils.js';
import makeGame from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

const gcdGame = () => makeGame(
  description,
  () => {
    const a = getRandInt();
    const b = getRandInt();
    return { question: `${a} ${b}`, answer: getGcd(a, b) };
  },
);

export default gcdGame;
