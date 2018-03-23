/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  this.index = 0;
  this.obj= {};
}

function Node() {
  this.val = value;
  this.next = null;
}

Stack.prototype.push= function(x) {
  this.obj[this.index] = x;
  this.index++;
}

Stack.prototype.pop = function() {
  const saved = this.obj[Math.max(this.index)];
  delete saved;
  return saved;
}

Stack.prototype.getMax = function() {
  const largestVal = this.obj[Math.max(this.val)];
  return largestVal;
}
 

module.exports = Stack;