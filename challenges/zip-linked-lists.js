/* Merge two linked lists so that their nodes alternate. Let the first node of the zipped list be
 * the first node of the first argument, if it exists.
 * Implement the linked list using only a Node class. No need for a wrapper LinkedList class
 *
 * BONUS: Do this in place
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function zip(l1, l2) {
  if(l2.head.value != null && l1.head.next != null) {
    l2.head.next = l1.head.next.value
    l1.head.next = l2.head.value
  }
  if(l2.next.value != null) {
    l1.next = l2.value
  }
  if(l1.next.value != null) {
    l2.next = l1.value
  }
};

module.exports = {Node: Node, zip: zip};
