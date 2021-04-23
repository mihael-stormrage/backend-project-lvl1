import getRandInt from '../utils.js';
import makeGame from '../index.js';

const description = 'What is the result of the expression?';

const Operations = {
  plus: (a, b) => a + b,
  minus: (a, b) => a - b,
  product: (a, b) => a * b,
};

Operations.plus.toString = () => '+';
Operations.minus.toString = () => '-';
Operations.product.toString = () => '*';

const randOperation = (a, b) => {
  const operators = Object.values(Operations);
  const i = getRandInt(0, operators.length - 1);
  return {
    question: `${a} ${operators[i]} ${b}`,
    answer: operators[i](a, b),
  };
};

const calcGame = () => makeGame(
  description,
  () => randOperation(getRandInt(), getRandInt()),
);

export default calcGame;
