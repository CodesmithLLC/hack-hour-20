/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
  this.storage = {};
  this.count = 0;
}

Stack.prototype.push = (value) => {
  this.stack.push(value);
}

Stack.prototype.pop = () => {
  if(this.count === 0) {
    return undefined;
  }else {
    return this.stack.pop();
  }
}



/**
* Queue Class
*/


function Queue() {
  this.pushStack = new Stack();
  this.popStack = new Stack();

  Que.prototype.enqueue = (value) => {
    this.push.pushStack(value)
  }
  que.prototype.dequeue = () => {

  }
}

module.exports = {Stack: Stack, Queue: Queue};
