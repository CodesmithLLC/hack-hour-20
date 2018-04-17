/* You have two numbers represented by linked lists. Each node contains a single digit. The digits
 * are stored in reverse order, such that the 1's digit is at the head of the list. Write
 * a function that adds the two numbers and returns the sum as a linked list with the same
 * structure.
 * EXAMPLE
 * Input: (2 -> 1 -> 5) + (5 -> 9 -> 2)
 * Output: 7 -> 0 -> 8
 *
 * The 7 is the ones digit (2 + 5).
 * The 0 is the tens digit (1 + 9, carry the 1).
 * The 8 is the hundreds digit (1 carried over + 5 + 2).
 *
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function addLinkedList(l1, l2) {
  let newTen = false;
  let newNum = l1.value + l2.value;
  if(newNum > 10){
    newNum = newNum - 10;
    newTen = true;
  }
  let newLinkedlist = new Node(newNum);
  let linkedListPointer = newLinkedList.next;
  if(l1 && l2){
    l1 = l1.next;
    l2 = l2.next;
  }

  while(l1 && l2){

    let newNode = new Node(l1.value + l2.value);
    if(newTen === true;){
      newNode.value++
      newTen = false;
    }
    if(newNode.value > 10){
      newNode.value = newNode.value - 10;
      newTen = true;
    }
    linkedListPointer = newNode;
    newNode.next = linkedListPointer;
    l1 = l1.next;
    l2 = l2.next;
  }


  return newLinkedList;

}


module.exports = {Node: Node, addLinkedList: addLinkedList};
