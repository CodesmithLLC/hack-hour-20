//////////////////
///Needs Review///
//////////////////

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

function Node (val) {
    this.value = val;
    this.next = null;
}

let phillip = new Node(1);
phillip.next = new Node(3);
phillip.next.next = new Node(4)
phillip.next.next.next = new Node(4)
phillip.next.next.next.next = new Node(0)
phillip.next.next.next.next.next = new Node(4)
console.log(phillip, '<---phillip');



function deleteDups(head) {
    let buffer = {};
    let current = head;
    let prev = null;
    while(current !== null){
        if(buffer.hasOwnProperty(current.value)){
            prev.next = current.next;
            console.log('removed');
        }else{
            buffer[current.value] = 1;
        }
        prev = current
        current = current.next
    }
    return head

}
console.log(JSON.stringify(deleteDups(phillip)));
module.exports = deleteDups;
