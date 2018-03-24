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
  var curr = head
  if(this.curr.next.value != null) {
    prev = curr
    this.curr = curr.next
  }
  if(this.curr.next.value === null) {
    while(this.prev.value != null)
    this.curr.next.value = this.prev.value
  }
}

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
