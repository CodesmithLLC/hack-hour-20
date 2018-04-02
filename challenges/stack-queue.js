/**
 * Create a stack.Then create a queue using two stacks.
 */

// NOTE:
function Stack () {
  this.storage = {};
  this.index = 0;

  Stack.prototype.push = value => {
    this.storage[this.index++] = value;
  }

  Stack.prototype.pop = () => {
    if (this.index === 0) return "stack is empty - nothing to pop!";
    let popped = this.storage[--this.index];
    delete this.storage[this.index];
    return popped;
  }

}

// let stack = new Stack();
// stack.push(5);
// console.log(stack);
// console.log(stack.pop());
// console.log(stack);
// console.log(stack.pop());

/**
* Queue Class
*/


function Queue() {

  this.s1 = new Stack();
  this.s2 = new Stack();

  Queue.prototype.enqueue = value => {
    this.s1.push(value);
  }

  Queue.prototype.dequeue = () => {
    // empty s1 into s2 except for last element, return that element and delete it
    // then re-push every element from s2 into s3
    while (this.s1.length > 1) {
      this.s2.push(this.s1.pop())
    }
    let removed = this.s1[0];
    this.s1.pop();
    while (this.s2.length > 0) {
      this.s1.push(this.s2.pop());
    }
    return removed;
  }
}

let queue = new Queue();
queue.enqueue(4);
console.log(queue);


module.exports = { Stack: Stack, Queue: Queue };
