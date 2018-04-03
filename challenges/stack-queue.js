/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
<<<<<<< HEAD
    this.storage = [];
    this.push = (x)=>{ return this.storage.push(x)};   
    this.pop = (x)=>{ 
        if(this.storage.length === 0){
            return undefined;
        } else {
            return this.storage.pop(x);
        }
    }
=======

>>>>>>> a7e255e59b98e9c34f7597c2b4ebd13c3bde41e4
}


/**
* Queue Class
*/


function Queue() {

}

module.exports = {Stack: Stack, Queue: Queue};
