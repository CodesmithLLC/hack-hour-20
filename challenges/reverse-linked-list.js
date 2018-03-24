/**
 * Write a function for reversing a linked list.
 * Your function will have one input: the head of the list
 * Your function should return the new head of the list
 *
 * BONUS:
 * Do it in place
 *
 */

function Node(value) {
    this.value = value;
    this.next = null;
}

function reverseLinkedList(head) {
  if (head.next === null) {
    return head;
  }
  
  let curNode = head;
  let count = 0;
  while (curNode !== null) {
    curNode = curNode.next;
    count++;
  }
  
  for (let i = count - 1; i > 0; i--) {
    let nodeCounter = 0;
    let addNode = head;
    while (nodeCounter < i - 1) {
      addNode = addNode.next;
      nodeCounter++;
    }
    addNode.next.next = addNode;
    if (i === count - 1) {
      var returnHead = addNode.next;
    } 
    if (i === 1) {
      addNode.next = null;
    }
  }
  return returnHead;
}

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
