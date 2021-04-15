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

const makeGame = (description, question) => {
  const name = greet();
  if (!question) return;
  console.log(description);

  const game = () => play(() => {
    const { question: q, answer: ans } = question();
    console.log(`Question: ${q}`);
    return ask(ans);
  });
  const congrats = `Congratulations, ${name}!`;
  const looseTxt = `Let's try again, ${name}!`;
  console.log(game() ? congrats : looseTxt);
};

export default makeGame;
