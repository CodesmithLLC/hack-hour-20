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
  let node1 = l1;
  let node2 = l2;
  let placeholder;
  while(l1.next !== null){
    placeholder = node1.next;
    node1.next = node2;
    node2.next = placeholder;
    node1 = l1.next;
    node2 = l2.next;
  }
  return node1
};

module.exports = {Node: Node, zip: zip};
