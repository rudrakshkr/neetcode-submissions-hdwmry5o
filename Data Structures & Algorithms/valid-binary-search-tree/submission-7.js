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
    isValidBST(root) {
        function valid(node, left, right) {
            if(node === null) return true;

            if(!(node.val > left && node.val < right)) {
                return false;
            }
            
            // Checking left nodes recursively
            return (valid(node.left, left, node.val) &&
            // Checking right nodes recursively
            valid(node.right, node.val, right))
        }

        return valid(root, -Infinity, Infinity)
    }
}
