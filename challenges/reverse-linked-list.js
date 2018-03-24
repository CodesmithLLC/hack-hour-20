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
  if(!this.head) return undefined;

  const curr = head.value;
  const at = [];

    while(curr) {
      at.push(curr);
      curr = curr.next;
    }

  let result;
  curr = result;

    while (curr) {
      curr.next = stack.pop();
      curr = curr.next;
    }

  return result;
}

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
