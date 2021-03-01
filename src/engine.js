const engine = (game) => {
  let played = 0;
  while (played < 3) {
    if (!game()) break;
    played += 1;
  }
  return played === 3;
};

export default engine;
