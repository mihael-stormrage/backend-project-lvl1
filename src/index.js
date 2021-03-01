import greet from './cli.js';

const makeGame = (brainGame) => {
  const name = greet();
  if (brainGame && brainGame()) console.log(`Congratulations, ${name}!`);
};

export default makeGame;
