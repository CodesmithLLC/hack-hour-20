/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack () {
  // create empty object
  this.storage = {};
  this.index = 0;
  this.max = 0;
  // returning an empty object ("this")
}

Stack.prototype.push = function (value) {
  this.storage[this.index++] = value;
  if (value > this.max) this.max = value;
  return this.index;
}

Stack.prototype.pop = function () {
  if (this.index > 0) {
    let last = this.storage[--this.index];
    delete this.storage[this.index];
    console.log(this)
    this.index--;
    return last;
  }
}

Stack.prototype.getMax = function () {
  return this.max;
}

const stack = new Stack();
console.log(stack.push(333))
console.log(stack.push(40))
console.log(stack.push(5))
console.log(stack.getMax())

module.exports = Stack;
