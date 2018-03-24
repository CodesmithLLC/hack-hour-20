/**
 * Write a function for reversing a linked list.
 * Your function will have one input: the head of the list
 * Your function should return the new head of the list
 *
 * BONUS:
 * Do it in place
 *
 */

function LinkedList(){  
    this.head = null;
  
  }
  function Node(value) {
      this.value = value;
      this.next = null;
  }
  
  LinkedList.prototype.push = function (value) {
    if (this.head === null) {
      this.head = new Node(value);
    } else {
      let curr = this.head;
      while (curr.next) {
        curr = curr.next;
      }
      const node = new Node(value);
      curr.next = node;
    }
  };

function reverseLinkedList(sll) {
    if(!sll.head || !sll.head.next) return sll;

    var nodes=[], 
      current = sll.head;
    
    while(current){
      nodes.push(current);
      current = current.next;
    }
      
    var reversedLL = new LinkedList();
    
    reversedLL.head = nodes.pop();
    current = reversedLL.head;
    
    var node = nodes.pop();  
    
    while(node){
       node.next = null;
       current.next = node;
       
       current = current.next;
       node = nodes.pop();
    }
    return reversedLL;

}

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
