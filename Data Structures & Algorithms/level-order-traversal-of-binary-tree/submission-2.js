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
     * @return {number[][]}
     */
    levelOrder(root) {
        if(root === null) return [];

        let res = [];
        let queue = [];

        queue.push(root);

        while(queue.length !== 0) {
            let list = [];
            let levelSize = queue.length;

            for(let i = 0; i < levelSize; i++) {
                let el = queue.shift();
                list.push(el.val);

                if(el.left) queue.push(el.left);
                if(el.right) queue.push(el.right);
            }

            res.push(list);
        }
        
        return res;
    }
}
