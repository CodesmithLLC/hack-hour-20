/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
<<<<<<< HEAD
  this.storage = {}
  this.index = 0;
  
}

Stack.prototype.push = function(value) {
  this.storage[this.index] = value;
  this.index++;
  return this.index;
};

Stack.prototype.pop = function() {
  if (this.index === 0) {
    return undefined;
  }
  this.index--;
  let topStack = this.storage[this.index];
  delete this.storage[this.index];
  return topStack;
};
Stack.prototype.getMax = function() {
  let maxValue = this.storage[this.index];
  while (this.index) {
    if (this.storage[this.index] > maxValue) {
      maxValue = this.storage[this.index];
      this.index++;
    }
  }
  return maxValue;
}

module.exports = Stack;

=======
  // body...
}

module.exports = Stack;
>>>>>>> 2852ccb339c48cfdb5c1c7d18d6bc402356ce46c
