/**
 * Create a stack.Then create a queue using two stacks.
 */


// function Stack() {
    
// }

//TODO

class Stack {
    constructor() {
        let stack = [];
    }
    isEmpty() {
        return stack.length == 0;
    }
    push(elem) {
        stack.push(e);
    }
    pop() {
        return stack.pop();
    }
  }

/**
* Queue Class
*/


// function Queue() {

// }


class Queue {
    constructor() {
        let stack = [];
    }
    isEmpty() {
        return stack.length == 0;
    }
    enqueue(elem) {
        stack.push(e);
    }
    dequeue(elem) {

        stack.pop(e);
    }
  }


module.exports = {Stack: Stack, Queue: Queue};
