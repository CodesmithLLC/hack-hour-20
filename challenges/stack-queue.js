/**
 * Create a stack.Then create a queue using two stacks.
 */

function Stack() {
    this.stack = [];
}

Stack.prototype.push = function (value) {
    this.stack.push(value);
}

Stack.prototype.pop = function () {
    return this.stack.pop()
}


/**
* Queue Class
*/

function Queue() {
  this.queue = [];
}

Queue.prototype.push = function (val) {
    let stack1 = new Stack();
    stack1.push(val)
    let stack2 = new Stack();
    
} 





module.exports = { Stack: Stack, Queue: Queue };
