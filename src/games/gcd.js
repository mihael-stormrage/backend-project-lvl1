import getRandInt, { gcd as getGcd } from '../math.js';
import { ask } from '../cli.js';
import play from '../engine.js';

const gcd = () => {
  console.log('Find the greatest common divisor of given numbers.');

  return play(() => {
    const a = getRandInt();
    const b = getRandInt();
    console.log(`Question: ${a} ${b}`);
    return ask(getGcd(a, b).toString());
  });
};

export default gcd;
