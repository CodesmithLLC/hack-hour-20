/**
 * We are familar with linked lists being linear and terminating:
 *
 * A->B->C->D
 *
 * However, linked lists can also have cyclical references:
 *
 * A->B->C->D
 *    ^     |
 *    |     V
 *    G<-F<-E
 *
 * Create a function that accepts a linked list and returns true if
 * the linked list has a cyclical reference
 *
 * var node1 = new Node('1');
 * var node2 = node1.next = new Node('2');
 * var node3 = node2.next = new Node('3');
 * var node4 = node3.next = new Node('4');
 * var node5 = node4.next = new Node('5');
 * hasCycle(node1); // => false
 * node5.next = node2;
 * hasCycle(node1); // => true
 *
 * Challenge 1: Do this in linear time
 * Challenge 2: Do this in constant space
 * Challenge 3: Do not mutate the original nodes in any way
 *
 */

var Node = function(value) {
  this.value = value;
  this.next = null;
}

let phillip = new Node('taco');
phillip.next = new Node('plums');
phillip.next.next = new Node ('water');
// phillip.next.next.next = phillip.next;

console.log(phillip);


function hasCycle(head) {
  let storage = {};
  let current = head;
  let i = 0
  while(current){
    storage[i] = current;
    if(Object.values(storage).includes(current)){
      console.log('====>',Object.values(storage),'<==== values to compare...');
      console.log('===>',current, 'im the current being compared');
      return true;
    }
    i++
    current = current.next;
  }
  return false;
}

console.log(hasCycle(phillip));

module.exports = {Node: Node, hasCycle: hasCycle}
