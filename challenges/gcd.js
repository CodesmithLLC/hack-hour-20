/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
  if (a === b) {
    return a;
  }
  let difference = Math.abs(a - b);
  for (let i = difference; i > 1; i--) {
    if (a%i === 0 && b%i === 0) {
      return i;
    }
  }
  return 1;
}

module.exports = gcd;