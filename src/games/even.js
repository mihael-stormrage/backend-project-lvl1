import getRandInt from '../utils.js';
import makeGame from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const evenGame = () => makeGame(
  description,
  () => {
    const q = getRandInt();
    return { question: q, answer: q % 2 === 0 ? 'yes' : 'no' };
  },
);

export default evenGame;
