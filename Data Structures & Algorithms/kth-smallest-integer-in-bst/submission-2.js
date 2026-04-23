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
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k, arr = []) {
        if(root === null) return null;

        // Keep going left left 
        this.kthSmallest(root.left, k, arr);
        // Then push Node
        arr.push(root.val); 
        // Finally go right
        this.kthSmallest(root.right, k, arr);

        return arr[k - 1]
    }
}
