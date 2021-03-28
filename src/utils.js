const getRandInt = (min = 0, max = 100) => Math.floor(Math.random() * (max - min + 1)) + min;

export const gcd = (a, b) => (!b ? a : gcd(b, a % b));

export const sequence = (start, step, n = 1) => start + (n - 1) * step;

export const isPrime = (n) => {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i += 1) {
    if (!(n % i)) return false;
  }
  return true;
};

export default getRandInt;
