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
    maxDepth(root) {
        let depth;
        if(root === null) {
            return 0;
        }

        return depth = 1 + Math.max(this.maxDepth(root.left), this.maxDepth(root.right));
        // return maxDepth
    }
}
