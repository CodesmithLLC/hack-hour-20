/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
  var arr = [];
  var newVal;
  for(var i = 0; i < arr.length; i++) {
    if(arr.indexOf(newVal) === -1) {
      arr.push(newVal);
    }
    if(arr.length > 0){
    arr.pop();
    }
  }
}
/**
* Queue Class
*/
function Queue() {
  var arr = [];
  var arrTwo = [];
  var newVal;
  for(var i = 0; i < arr.length; i++) {
    if(arr.indexOf(newVal) === -1) {
      arr.push(newVal);
    }
    if(arr.length > 0){
    arrTwo.push(arr.pop());
    }
  }
  arrTwo.pop();
}

module.exports = {Stack: Stack, Queue: Queue};
