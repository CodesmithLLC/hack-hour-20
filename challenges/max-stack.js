/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  this.stack = {};
  this.index = 0;
  
  this.push = function(value) {
    this.stack[this.index] = value;
    this.index++;
    return this.index;
  }
  
  this.pop = function() {
    this.index--;
    let toBeDeleted = this.stack[this.index];
    delete this.stack[this.index];
    return toBeDeleted;
  }
  
  this.getMax = function() {
    let max;
    for (let i = 0; i < this.index; i++) {
      if (max === undefined || this.stack[i] > max) {
        max = this.stack[i];
      }
    }
    return max;
  }
  
}

module.exports = Stack;