const getRandInt = (min = 0, max = 100) => Math.floor(Math.random() * (max - min + 1)) + min;

export const gcd = (a, b) => (!b ? a : gcd(b, a % b));

export const sequence = (start, step, n = 1) => start + (n - 1) * step;

export default getRandInt;
