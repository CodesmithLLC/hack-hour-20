/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */
//Stack is a constructor
function Stack(value) {
  // body...
  this.count = 0;
  this.storage = {};
}

Stack.prototype.push = function(value){
  this.storage[this.count] = value;
  this.count++;
  return this.count;
}
Stack.prototype.pop = function(value){
  if (this.count === 0) return undefined;
  this.count--;
  let result = this.storage[this.count];
  delete this.storage[this.count];
  return result;
}
Stack.prototype.getMax = function(){
  return this.count;
}



module.exports = Stack;