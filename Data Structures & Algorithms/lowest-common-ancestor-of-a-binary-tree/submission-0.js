/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
class Solution {
    /**
     * @param {TreeNode} root
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {TreeNode}
     */
    helper(node, p, q) {
        if(node === null) {
            return null;
        }

        if(node === p || node === q) {
            return node;
        }

        let left = this.helper(node.left, p, q);
        let right = this.helper(node.right, p, q);

        if(left !== null && right !== null) {
            return node;
        }

        if(left !== null) {
            return left;
        }

        if(right !== null) {
            return right;
        }

        return null;
    }

    lowestCommonAncestor(root, p, q) {
        return this.helper(root, p , q);
    }
}
