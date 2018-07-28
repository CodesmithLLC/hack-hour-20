/* You are given a tree. Write a function to check if it is a valid binary search tree. A tree is
 * a valid binary search tree if it satisfies the following constraints:
 *      at any given node, the value of all the nodes in its left tree must be < its value
 *      at any given node, the value of all the nodes in its right tree must be > its value
 * Assume that each value in the tree is unique.
 */
 
// FIXME
function BinaryTree(val) {
    this.value = val;
    this.left = null;
    this.right = null;
}

function validBST(tree) {
    let arr = [];
    console.log(`CURR VALUE = ${tree.value} \n ${JSON.stringify()}`)
    let flag = true;
    if (tree.left.left !== null) {
    }
    if (tree.left.right !== null) {
        console.log(`\nRECURSE RIGHT------------${JSON.stringify(tree.right.value)}`)
        flag = validBST(tree.right);
    }
    else if (tree.left.value < tree.value && tree.value < tree.right.value) {
        console.log('check flag');
    }
    return flag;
}

let test = new BinaryTree(5);
test.value = 5;
test.left = new BinaryTree(3);
test.left.left = new BinaryTree(2);
test.left.right = new BinaryTree(4);
test.right = new BinaryTree(7);
test.right.left = new BinaryTree(6);
test.right.right = new BinaryTree(8);
test.right.right.right = new BinaryTree(9);

// console.log(test);

console.log(validBST(test));

module.exports = {BinaryTree: BinaryTree, validBST: validBST};
