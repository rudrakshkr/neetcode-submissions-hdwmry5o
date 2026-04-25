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
    maxPathSum(root) {
        let maxSum = -Infinity;

        function dfs(node) {
            if(!node) return 0;

            let left = Math.max(0, dfs(node.left));
            let right = Math.max(0, dfs(node.right));

            // Case-1 -> Get path through this node
            let current = left + node.val + right;
            maxSum = Math.max(current, maxSum);

            // Case-2 -> Going up
            return node.val + Math.max(left, right);
        }

        dfs(root);
        return maxSum;
    }
}
