/* Given a positive integer, return it as a string in Roman Numeral form.
 * Some basic conversions are given below:
 *
 *      1     ->    I
 *      4     ->    IV
 *      5     ->    V
 *      9     ->    IX
 *      10    ->    X
 *      40    ->    XL
 *      50    ->    L
 *      90    ->    XC
 *      100   ->    C
 *      400   ->    CD
 *      500   ->    D
 *      900   ->    CM
 *      1000  ->    M
 * 
 */

function romanNumeral(n) {
    let returnString = "";
    while(n>1000){
      returnString += "M";
      n = n-1000;
    }
    while(n>900){
      returnString += "MC";
      n = n-900;
    }
    while(n>500){
      returnString += "D";
      n = n-500;
    }
    while(n>400){
      returnString += "DC";
      n = n-400;
    }
    while(n>100){
      returnString += "C";
      n = n-100;
    }
    while(n>90){
      returnString += "CX";
      n = n-90;
    }
    while(n>50){
      returnString += "L";
      n = n-50;
    }
    while(n>40){
      returnString += "LX";
      n = n-40;
    }
    while(n>10){
      returnString += "X";
      n = n-10;
    }
    while(n>9){
      returnString += "XI";
      n = n-9;
    }
    while(n>5){
      returnString += "V";
      n = n-5;
    }
    while(n>4){
      returnString += "VI";
      n = n-4;
    }
    while(n >=1){
      returnString += "I";
      n = n-1;
    }
    return returnString.split("").reverse().join("")
  }

module.exports = romanNumeral;
