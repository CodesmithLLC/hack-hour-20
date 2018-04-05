/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
  var arraya = []
  var arrayb = []
  var joined = []
  for(var i = 0; i <= a, i <= b; i++) {
    if(a % i === 0) arraya.push(i)
    if(b % i === 0) arrayb.push(i)
  }
  for(var x = 0; x < arraya.length; x++) {
    if(arrayb.includes(arraya[x])) {
      joined.push(arraya[x])
    }
  }
  return Math.max(...joined)
}

module.exports = gcd;
