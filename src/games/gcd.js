import getRandInt, { gcd as getGcd } from '../utils.js';
import makeGame from '../index.js';

const gcd = () => makeGame(
  'Find the greatest common divisor of given numbers.',
  () => {
    const a = getRandInt();
    const b = getRandInt();
    return { question: `${a} ${b}`, answer: getGcd(a, b) };
  },
);

export default gcd;
