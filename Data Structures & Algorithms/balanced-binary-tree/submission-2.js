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
     * @return {boolean}
     */
    helper(node) {
        if(node === null) return 0;

        let left = this.helper(node.left);
        let right = this.helper(node.right);

        if(left === -1 || right === -1) {
            return -1;
        }

        if(Math.abs(left - right) > 1) {
            return -1;
        }

        return 1 + Math.max(left, right);
    }

    isBalanced(root) {
        return this.helper(root) !== -1;
    }
}
