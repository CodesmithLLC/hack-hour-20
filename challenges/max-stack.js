/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  let storage = {}
  storage.length = 0
  storage.push = function(x){
    storage[storage.length]=x
    storage.length++
  }
  storage.pop = function(){
    let returnval = storage[storage.length]
    storage.delete(storage.length); 
    storage.length--;
    return returnval
  }
  storage.getMax = function(){
    let Largest = 0
    for(keys in storage){
      console.log("FOR")
      if(storage[keys] > Largest){
        Largest = storage[keys];
      }
    }
    return Largest
  }
  
  return storage
}

module.exports = Stack;