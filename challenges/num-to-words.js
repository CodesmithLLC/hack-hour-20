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

function numToWords(num, output = '', count = 0) {
  if (count === 0 && num === 0) return 'zero';
  let numberArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 30, 40, 50, 60, 70, 80, 90, 100, 1000, 1000000, 1000000000, 1000000000000, 1000000000000000];
  let wordArr = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen', 'Twenty', 'Thirty', 'Fourty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety', 'Hundred', 'Thousand', 'Million', 'Billion', 'Trillion', 'Quadrillion'];
  if (num === 0) return output;
  
  let i = 0;
  while (num % numberArr[i] !== num) {
    i++;
  }
  
  let outApp;
  if (num >= 100) {
    let remainderNum = num%numberArr[i-1];
    let pureNum = num - remainderNum;
    let appendNum = pureNum / numberArr[i-1];
    let realApp = numToWords(appendNum);
    outApp = realApp + wordArr[i-1];
  } else {
    outApp = wordArr[i-1];
  }
  
  return numToWords(num%numberArr[i-1], output + outApp, count + 1);
}
module.exports = numToWords;
