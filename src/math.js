const getRandInt = (min = 0, max = 100) => Math.floor(Math.random() * (max - min + 1)) + min;

export const gcd = (a, b) => (!b ? a : gcd(b, a % b));

export default getRandInt;
