import { randomInt } from '@dmhtoo/random-int';
import makeGame from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const evenGame = () => makeGame(
  description,
  () => {
    const q = randomInt();
    return { question: q, answer: q % 2 === 0 ? 'yes' : 'no' };
  },
);

export default evenGame;
