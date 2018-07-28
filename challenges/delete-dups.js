/**
 * Write a function deleteDups that removes duplicates from an unsorted linked list.
 *
 * Example:
 * 1->2->3->3
 *
 * deleteDups(head); -> 1->2->3
 *
 * Extra:
 * How would you solve this problem if a temporary buffer is not allowed?
 */

function Node(value) {
  this.value = value;
  this.next = null;
}

function deleteDups(head) {
  let curr1 = head;
  let curr2 = head;
  while (curr1 && curr2) {
    if (curr1.value === curr2.value) {
      console.log('duplicate');
    }
    curr1 = curr1.next;
    curr2 = curr2.next.next;
  }
  return head;
}

let myNode = new Node(1);
myNode.next = new Node(2);
myNode.next.next = new Node(3);
// myNode.next.next.next = new Node(3);

console.log(deleteDups(myNode));

module.exports = deleteDups;
