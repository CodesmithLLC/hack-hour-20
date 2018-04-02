/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
    this.storage = [];
    this.push = (x)=>{ return this.storage.push(x)};   
    this.pop = (x)=>{ 
        if(this.storage.length === 0){
            return undefined;
        } else {
            return this.storage.pop(x);
        }
    }
}


/**
* Queue Class
*/


function Queue() {

}

module.exports = {Stack: Stack, Queue: Queue};
