import readlineSync from 'readline-sync';
import greet from './cli.js';

const play = (game) => {
  const roundsToWin = 3;
  let winsCount = 0;
  while (winsCount < roundsToWin) {
    if (!game()) break;
    winsCount += 1;
  }
  return winsCount === roundsToWin;
};

const askAssert = (expected) => {
  const answer = readlineSync.question('Your answer: ');
  const isRight = answer === expected.toString();
  console.log(isRight ? 'Correct!' : `'${answer}' is wrong answer ;(. Correct answer was '${expected}'.`);
  return isRight;
};

const makeGame = (description, question) => {
  const name = greet();
  if (!question) return;
  console.log(description);

  const game = () => play(() => {
    const { question: q, answer: ans } = question();
    console.log(`Question: ${q}`);
    return askAssert(ans);
  });
  const congrats = `Congratulations, ${name}!`;
  const looseTxt = `Let's try again, ${name}!`;
  console.log(game() ? congrats : looseTxt);
};

export default makeGame;
