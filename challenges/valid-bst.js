/* You are given a tree. Write a function to check if it is a valid binary search tree. A tree is
 * a valid binary search tree if it satisfies the following constraints:
 *      at any given node, the value of all the nodes in its left tree must be < its value
 *      at any given node, the value of all the nodes in its right tree must be > its value
 * Assume that each value in the tree is unique.
 */
 

function BinaryTree(val) {
    this.value = val;
    this.left = null;
    this.right = null;
}

// save a temp value of current node and compare to left and right
// if left is less and right is more than current temp value continue
// else return false
//
let example = {
    value : 10,
    left : {value : 9, left : { value : 8,
        left : {value : 7, left : {},right : {}},
        right : { value : 9, left : {}, right : {}}},right : {}},
    right : { value : 11, left : {}, right : {}}
};

function validBST(tree) {
    let tempCurrentNode = tree.value;
    let left = tree.left
    let right = tree.right
    if (tempCurrentNode > left.value && tempCurrentNode < right.value) {
        validBST(left);
        validBST(right);
    } else {
        return false;
    }
    return true;
}
console.log(validBST(example));


module.exports = {BinaryTree: BinaryTree, validBST: validBST};
