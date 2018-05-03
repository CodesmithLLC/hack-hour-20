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
let Node = (val) => {
  this.value = val;
  this.next = null;
}


function deleteDups(head) {
  let newObj = {};
  let prev = head;
  let og = head;
  while (head !== null) {
    if (!newObj[head.value]) {
      newObj[head.value] = head.value;
    } else {
      prev.next = head.next;
    }
    prev = head;
    head = head.next;
  }
  return og;
}

module.exports = deleteDups;
