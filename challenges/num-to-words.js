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
  if(typeof num !== 'number') return NaN
  let wordyNum = []
  const hund = 'hundred'
  const numArr = [null, 'one', 'two', 'three', 'four', 'five', 'six']
  const tensArr = [null, 'ten', 'twenty', 'thirty', 'forty', 'fifty']
  const arr = num.toString().split('')
  const newArr = arr.map(number => Number.parseInt(number))
  for(var i = newArr.length-1; i >= 0; i--) {
    if(i === newArr.length-1) {
      wordyNum.unshift([newArr[i]])
    }
    if(i === newArr.length-2) {
      wordyNum.unshift(tensArr[newArr[i]])
    }
    if(i === newArr.length-3) {
      wordyNum.unshift(numArr[newArr[i]] + 'hundred')
    }
    if(i === newArr.length-4) {
      wordyNum.unshift(numArr[newArr[i]] + 'thousand')
    }
    if(i === newArr.length-5) {
      wordyNum.unshift(tensArr[newArr[i]])
    }
    if(i === newArr.length-6) {
      wordyNum.unshift(numArr[newArr[i]] + 'hundred')
  }
   return wordyNum.join('');
}

module.exports = numToWords;
