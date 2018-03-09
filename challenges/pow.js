/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

<<<<<<< HEAD

function pow(base, power) {
    if(power === 0){
      return 1;
    }
  
    if(power === 1){
      return base;
    } else {
      return base * pow(base, power-1);
    }
=======
function pow(base, power) {

>>>>>>> 327fe1a423b154f33b38e9ad8ccadd26e42fa80b
}

module.exports = pow;
