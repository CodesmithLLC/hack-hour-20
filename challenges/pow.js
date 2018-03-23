/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power) {
  let total = 1
  if(power < 1) return base
  if(power === 0) return total
    total = total*base
    console.log(total, power)
    pow(total, power-1)
}
module.exports = pow;
