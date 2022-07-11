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
    function traverse(node){
        if(node.left) traverse(node.left);
        data.push(node.val);
        if(node.right) traverse(node.right);
    }
    traverse(root);

    
    // sort된 arr를 TreeNode로 만든다
    // 만들어진 Node들의 right는 다음 순서 Node
    
    const newTree = new TreeNode();
    let traverseNode = newTree;
    
    for(const el of data) {
        traverseNode.right = new TreeNode(el, null, null);
        traverseNode = traverseNode.right;
    }
    
    return newTree.right;
};

// BFS -> DFS 중위 순회해서 일렬로 된 트리 반환
// root = [5,3,6,2,4,null,8,1,null,null,null,7,9]