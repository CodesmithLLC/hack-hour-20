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
    let obj = {}
    let node = head;
    let prevnode;
    let ifHit = false;
    while(node){
        if(obj[node.value] === false){
            obj[node.value] = true;
        }
        if(obj[node.value] === true){
            prevnode = node.next;
            ifHit = true;
        }

        if(ifHit){
            node = node.next;
            ifHit = false;
        } else {
            prevnode = node;
            node = node.next
        }


    }
    return head;
}

module.exports = deleteDups;
