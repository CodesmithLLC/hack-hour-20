/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power) {
    // if(power === 1){
    //     return base;
    // }else{ 
    //     total = pow(base,power-1,total);
    //     return total*base;
    // }
    let total = 1;
    for(let i =0 ;i<power;i++){
        total*=base;
    } 
    return total;
}
console.log(pow(2,10));
module.exports = pow;
