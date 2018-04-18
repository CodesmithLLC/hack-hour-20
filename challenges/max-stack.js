/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

const Stack = () => {
  this.count = 0;
  this.storage = {};
  this.max = 0;
}

Stack.prototype.push = function (value) {
  this.storage[this.count] = value;
  this.count++;
  if (value > this.max) this.max = value;
}

Stack.prototype.pop = function () {
  // Check to see if the stack is empty
  if (this.count === 0) {
    return undefined;
  }
  //decrement count to grab prev value
  this.count--;
  const result = this.storage[this.count];
  delete this.storage[this.count];
  return result;
}

Stack.prototype.size = function() {
  return this.count;
}

Stack.prototype.getMax = function () {
  // Check to see if the stack is empty
  if (this.count === 0) {
    return undefined;
  }
  let max = this.storage[0];
  for (let i = 0; i < this.count; i++) {
    if (this.storage[i] > max) { max = this.storage[i]}
  }
  return max;
}

console.log(Stack())

module.exports = Stack;