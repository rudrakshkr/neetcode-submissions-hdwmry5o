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
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    buildTree(preorder, inorder) {
        let map = new Map();
        inorder.forEach((val, i) => map.set(val, i));

        let preIndex = 0;

        function helper(left, right) {
            if(left > right) return null;

            let rootVal = preorder[preIndex++]
            let root = new TreeNode(rootVal);

            let mid = map.get(rootVal);

            root.left = helper(left, mid - 1);
            root.right = helper(mid + 1, right);

            return root;
        }

        return helper(0, inorder.length - 1);
    }
}
