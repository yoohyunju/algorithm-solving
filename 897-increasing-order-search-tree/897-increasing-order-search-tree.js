/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var increasingBST = function(root) {
    let data = [];
    
    // 중위 순회 함수
    function traverse(node){
        if(node.left) traverse(node.left);
        data.push(node.val);
        if(node.right) traverse(node.right);
    }
    traverse(root);
    
    //console.log(data); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
    
    const newTree = new TreeNode(data[0]);
    let newNode = newTree;
    
    for(let i = 1; i < data.length; i++){
        newNode.right = new TreeNode(data[i]);
        newNode = newNode.right;
    }
    
    return newTree;
};
