/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power) {
  var total = 0
  var oldBase = base
  var num = 0
  if(num === power) {return total}
    total *= base
    pow(total, num++)
}

module.exports = pow;
