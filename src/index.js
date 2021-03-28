import greet, { ask } from './cli.js';
import play from './engine.js';

const makeGame = (description, question, checker) => {
  const name = greet();
  if (!question) return;
  console.log(description);

  const game = () => play(() => {
    const q = question();
    const ans = q?.answer ?? checker(q);
    console.log(`Question: ${q?.question ?? q}`);
    return ask(ans);
  });
  console.log(game() ? `Congratulations, ${name}!` : `Let's try again, ${name}!`);
};

export default makeGame;
