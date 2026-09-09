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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p, q) {
        // If both nodes are null, we reached the end and return true
        if(p === null && q === null) return true;

        // If even one node is null but other is not, we return false
        if(p === null || q === null) return false;

        // If values of both the subtrees don't match 
        if(p.val !== q.val) return false;

        return this.isSameTree(p.left, q.left) && this.isSameTree(p.right, q.right);
    }
}
