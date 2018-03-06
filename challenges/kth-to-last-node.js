/**
 * Write a function that takes two parameters, an integer and the head of a
 * singly linked list, and returns the VALUE on the kth to last node in the list.
 *
 * const a = new Node('A');
 * const b = new Node('B');
 * const c = new Node('C');
 * const d = new Node('D');
 * const e = new Node('E');
 *
 * a.next = b;
 * b.next = c;
 * c.next = d;
 * d.next = e;
 *
 * kthToLastNode(2, a); -> returns 'D' (the value on the second to last node)
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function kthToLastNode(k, head) {
//count # of '.next', subtract from length?
//iterate over linked list
//if this.next === null, count back? obj.entries and count back?
  //still have ref to this
  var array = []
  var filledArr = array.push(a)
  var length = 0
    for(var i = 0; i < filledArr.length; i++) {
      if(filledArr[i][next] === 'Node') {
        array.push(filledArr[i][next])
        length++
      }
      return filledArr[length][value]
    }
  var revArr = filledArr.reverse()
    return revArr[k][value]
}

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
