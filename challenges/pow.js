/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power) {
    if(power === 0){ //number we are going to mult base by 
     return 1;
     } else {   
    return base * pow(base, power-1)
    }
}
console.log(pow(3,2));
console.log(pow(4,2));
console.log(pow(6,2));


//module.exports = pow;
