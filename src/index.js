import greet, { ask } from './cli.js';

const play = (game) => {
  const rounds = 3;
  let played = 0;
  while (played < rounds) {
    if (!game()) break;
    played += 1;
  }
  return played === rounds;
};

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
