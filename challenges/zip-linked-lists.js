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
// save the next node of l1 and l2
//l1.next equals to l2 
//l2.next equals savel1 
  //save savel1.next and savel2.next 
//savel1.next equals savel2
function zip(l1, l2) {
  let savel1 = l1.next;
  let savel2 = l2.next;
  l1.next = l2;
  l2.next = savel1;
  while (savel1 !== null && savel2 !== null){
    let cur1 = savel1;
    savel1 = savel1.next;
    let cur2 = savel2;
    savel2 = savel2.next;
    cur1.next = cur2;
    curl2.next = savel1
  }
};

module.exports = {Node: Node, zip: zip};
