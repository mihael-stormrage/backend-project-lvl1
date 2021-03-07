import getRandInt, { isPrime } from '../math.js';
import { ask } from '../cli.js';
import play from '../engine.js';

const prime = () => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  return play(() => {
    const q = getRandInt();
    console.log(`Question: ${q}`);
    return ask(isPrime(q) ? 'yes' : 'no');
  });
};

export default prime;
