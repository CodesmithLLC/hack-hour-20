// Write a function that returns an array containing the numbers 1 to NUM. Put "fizz" in place of numbers divisble by 3, "buzz" in place of numbers divisble by 5, and "fizzbuzz" in place of numbers divisble by both 3 and 5
// fizzbuzz(16);  -> [ 1,
//                     2,
//                     'fizz',
//                     4,
//                     'buzz',
//                     'fizz',
//                     7,
//                     8,
//                     'fizz',
//                     'buzz',
//                     11,
//                     'fizz',
//                     13,
//                     14,
//                     'fizzbuzz',
//                     16 ]

function fizzbuzz(num) {
    function range(stop) {
      const arrNum = [];
      let i = 1;
      while (i <= stop) {
        arrNum.push(i);
        i++;
      }
      return arrNum;
    }
  
    const arrNumbers = range(num);
  
    function modifyNumbers3And5(arr) {
      return arr.map((el) => {
        if (el % 3 === 0 && el % 5 === 0) {
          el = 'fizzbuzz';
        } else if (el % 5 === 0) {
          el = 'buzz';
        } else if (el % 3 === 0) {
          el = 'fizz';
        }
        return el;
      });
    }
    return modifyNumbers3And5(arrNumbers);
  }
  
  fizzbuzz(100);

module.exports = fizzbuzz;
