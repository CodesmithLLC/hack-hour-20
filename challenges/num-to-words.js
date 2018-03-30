// Write a function that takes a number as an argument and returns its english word representation as a string. Answers should be in upper camel case (a.k.a. Pascal case). Don't worry about spaces.
// Include support for 11-19 ('Eleven', 'Twelve', 'Thirteen', ... 'Nineteen').


/**
 * numToWords(0) -> 'Zero'
 * numToWords(43) -> 'FortyThree'
 * numToWords(2999) -> 'TwoThousandNineHundredNintyNine'
 * numToWords(15) -> 'Fifteen'
 * numToWords(2483579411) -> 'TwoBillionFourHundredEightyThreeMillionFiveHundredSeventyNineThousandFourHundredEleven'
 * numToWords(300525151340440) -> 'ThreeHundredTrillionFiveHundredTwentyFiveBillionOneHundredFiftyOneMillionThreeHundredFortyThousandFourHundredForty'
 * numToWords(92120000000000000) -> 'NintyTwoQuadrillionOneHundredTwentyTrillion'
 */

function numToWords(num) {
  let numberArr = [];
const underTwenty = {19 : 'Nineteen', 18:'Eighteen', 17:'Seventeen', 16: 'Sixteen', 15: 'Fifteen', 14: 'Fourteen', 13: 'Thirteen', 12: 'Tweleve', 11: 'Eleven', 10: 'Ten', 9: 
'Nine', 8: 'Eight', 7: 'Seven', 6: 'Six', 5: 'Five', 4: 'Four', 3: 'Three', 2: 'Two', 1: 'One', 0: 'Zero'};
const underHundred = {30: 'Thirty', 40: "Forty", 50: 'Fifty', 60: 'Sixty', 70: 'Seventy', 80: 'Eighty', 90: 'Ninety'};
if(1000 - num < 1000 && num > 100){
  let p = Math.floor(num / 100);
  numberArr.push(underTwenty[p], 'hundred');
  num = num - (p * 100);
}
if(100 - num < 100 && num > 20){
  let i = Math.floor(num / 10);
  numberArr.push(underHundred[i*10]);
  num = num % 10;
}
if(underTwenty[num]) {
  numberArr.push(underTwenty[num]);
}
return numberArr.join('');
}
module.exports = numToWords;
console.log(numToWords(0))// -> 'Zero'
console.log(numToWords(255))// -> 'Zero'
 console.log(numToWords(43))// -> 'FortyThree'
 console.log(numToWords(2999))// -> 'TwoThousandNineHundredNintyNine'
 console.log(numToWords(15))// -> 'Fifteen'
 console.log(numToWords(2483579411))// -> 'TwoBillionFourHundredEightyThreeMillionFiveHundredSeventyNineThousandFourHundredEleven'
 console.log(numToWords(300525151340440))// -> 'ThreeHundredTrillionFiveHundredTwentyFiveBillionOneHundredFiftyOneMillionThreeHundredFortyThousandFourHundredForty'
 console.log(numToWords(92120000000000000))// -> 'NintyTwoQuadrillionOneHundredTwentyTrillion'
