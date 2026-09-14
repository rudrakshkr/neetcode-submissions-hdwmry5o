/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    constructor() {
        this.d = 0;
    }
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    height(node) {
        if(node === null) {
            return 0;
        }
        
        return 1 + Math.max( this.height(node.left), this.height(node.right) );
    }

    diameterOfBinaryTree(root) {
        if(root === null) {
            return 0;
        }

        let leftHeight = this.height(root.left);
        let rightHeight = this.height(root.right);

        this.d = Math.max((leftHeight + rightHeight), this.d);

        this.diameterOfBinaryTree(root.left);
        this.diameterOfBinaryTree(root.right);

        return this.d;
    }
}
