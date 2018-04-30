//////////////////
///Needs Review///
//////////////////


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

//setting up lists to work with
let list1 = new Node(2);
list1.next = new Node(1);
list1.next.next = new Node(5);

let list2 = new Node(5);
list2.next = new Node(9);
list2.next.next = new Node(2);

//super long way probably a better solution.
function addLinkedList(l1, l2) {
  let value1 = '',
      value2 = '',
      curr1 = list1,
      curr2 = list2;

//this function probably kills my time complextiy
  let addAndReverse =  (string1, string2) => {
    let reverse1 = string1.split('').reverse().join('');
    let reverse2 = string2.split('').reverse().join('');
    let foo = parseInt(reverse1) + parseInt(reverse2);
    return foo.toString().split('').reverse().join('');
  }

  while(curr1 !== null){
    value1 += curr1.value;
    curr1 = curr1.next;
  }

  while(curr2 !== null){
    value2 += curr2.value;
    curr2 = curr2.next;
  }


  return parseInt(addAndReverse(value1, value2));
}

console.log(addLinkedList(list1, list2)); // ===> 708

module.exports = {Node: Node, addLinkedList: addLinkedList};



//////////////////////
/////CS Solutions/////
//////////////////////

//recursive solution
function addLinkedList(l1, l2, carryover) {
  if (!l1 && !l2 && !carryover) return null;

  let sum = carryover || 0;
  if (l1) sum += l1.value;
  if (l2) sum += l2.value;

  const result = new Node(sum % 10);

  if (l1 || l2) {
    const rest = addLinkedList(
      l1 ? l1.next : null, //these are turnarys that are evealuating to form the next call to addLinkedList().
      l2 ? l2.next : null, //these are turnarys that are evealuating to form the next call to addLinkedList().
      sum >= 10 ? 1 : 0    //these are turnarys that are evealuating to form the next call to addLinkedList().
    );
    result.next = rest;
  }

  return result;
}
