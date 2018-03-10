/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power) {
    if (Number.isInteger(power)) {
     return  power === 0 ? 1: base * pow(base, Math.abs(power) -1);
    }
    return 'Power must be an integer'
  }


module.exports = pow;
