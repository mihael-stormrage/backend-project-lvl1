import readlineSync from 'readline-sync';

const greet = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

const ask = (expected) => {
  const answer = readlineSync.question('Your answer: ');
  const isRight = answer === expected;
  console.log(isRight ? 'Correct!' : `'${answer}' is wrong answer ;(. Correct answer was '${expected}'.`);
  return isRight;
};

export { greet as default, ask };
