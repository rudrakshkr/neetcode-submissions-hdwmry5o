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

        arr.push(root.val);

        this.kthSmallest(root.left, k, arr);
        this.kthSmallest(root.right, k, arr);

        return arr.sort((a,b) => a - b)[k - 1]
    }
}
