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
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    helper(node) {
        if(node === null) {
            return 0;
        }

        let leftHeight = this.helper(node.left);
        let rightHeight = this.helper(node.right);

        // Diameter passing through this node
        this.d = Math.max(this.d, (leftHeight + rightHeight));
        
        // Height returned to parent
        return 1 + Math.max( this.helper(node.left), this.helper(node.right) );
    }

    diameterOfBinaryTree(root) {
        this.d = 0;
        this.helper(root);
        return this.d;
    }
}
