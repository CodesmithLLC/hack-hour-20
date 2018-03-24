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
  function fizzbuzz(num) {
    var newArr = []
    for(var i = 0; i < num; i++) {
      if(i % 15 === 0) newArr.push('fizzbuzz')
      else if(i % 3 === 0) newArr.push('fizz')
      else if(i % 5 === 0) newArr.push('buzz')
      else if((i % 3 !== 0) && (i % 5 !== 0)) newArr.push(i)
    }
    return newArr
  }



 //  var newArr = new Array(num)
 //    newArr.fill(0)
 //    for(var i = 0; i < newArr.length; i++) {
 //      newArr[i] = i+1
 //      if((newArr[i] % 3 === 0) && (newArr[i] % 5 === 0)) {
 //        newArr[i] = 'fizzbuzz'
 //      } else {
 //        if(newArr[i] % 3 === 0) { newArr[i] = 'fizz' }
 //        if(newArr[i] % 5 === 0) { newArr[i] = 'buzz' }
 //      }
 //    }
 // return newArr
}

module.exports = fizzbuzz;
