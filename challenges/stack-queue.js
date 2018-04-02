/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
    this.storage = [];
    this.push = (x)=>{ this.storage.push(x)};   
    this.pop = (x)=>{ this.storage.pop(x)}
}


/**
* Queue Class
*/


function Queue() {

}

module.exports = {Stack: Stack, Queue: Queue};
