import greet, { ask } from './cli.js';

const play = (game) => {
  const roundsToWin = 3;
  let winsCount = 0;
  while (winsCount < roundsToWin) {
    if (!game()) break;
    winsCount += 1;
  }
  return winsCount === roundsToWin;
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
