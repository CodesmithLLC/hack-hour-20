/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
  let max = Math.max(a, b), min = Math.min(a, b);
  let mod = max % min;
  if (mod === 0) return min
  else return mod;
}

console.log(gcd(10, 8))
console.log(gcd(8, 10))
console.log(gcd(120, 60))

module.exports = gcd;
