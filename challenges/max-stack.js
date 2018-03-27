/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  // body...
  var array = []
  var newItem;
  function push() {
    for(var i = 0; i < array.length; i++) {
      if(!array[i+1]) array[i+1] = newItem
      return array.length
    }
  }
  function pop() {
    if(array.length === 0) return 0
    for(var i = 0; i < array.length; i++) {
      var lastPos = array.length-1[i]
      delete array.length-1[i]
      return lastPos
  }
  function getMax() {
    if(array.length === 0) return 0
    var sorted = array.sort(function(x,y) {
      return x-y
    })
    var lastPos = array.length-1[i]
    delete array.length-1[i]
    return lastPos
  }
}

module.exports = Stack;
