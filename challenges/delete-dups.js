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



function deleteDups(head) {
//sort linked list
let current = this.head
let previous = this.head
if(current.value < this.next.value) {
  current = this.next
  this.next = this.next.next
} else if(current.value > this.next.value) {
  previous = this.next
  previous.next = current.value
} else if(current.value === this.next.value) {
  current.next = this.next.next
}
//as comparing, if same delete rather than sort further
}

module.exports = deleteDups;
