import greet from './cli.js';

const makeGame = (brainGame) => {
  const name = greet();
  if (brainGame && brainGame()) console.log(`Congratulations, ${name}!`);
  else console.log(`Let's try again, ${name}!`);
};

export default makeGame;
