/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd (a, b) {
  let max = Math.max(a, b), min = Math.min(a, b);
  if (max % min === 0) return min;
  else if (max % 2 !== 0 && min % 2 !== 0) return 1;
  else return max % min;
}

// function gcd1Liner (a, b) {
//   return Math.max(a, b) % Math.min(a, b) === 0 ? Math.min(a, b) : Math.max(a, b) % Math.min(a, b);
// }

console.log(gcd(17, 15))
console.log(gcd(44, 8))
console.log(gcd(123, 60))

module.exports = gcd;
