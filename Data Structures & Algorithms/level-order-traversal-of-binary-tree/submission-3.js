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
        let res = [];
        if(!root) return res;

        let queue = [root];
        let front = 0;

        while(front < queue.length) {
            let level = [];
            let queueLength = queue.length - front;

            for(let i = 0; i < queueLength; i++) {
                let node = queue[front++];
                // If node exists push that node into level
                level.push(node.val);
                // Also push it's left and right nodes if they are not null
                if(node.left) queue.push(node.left);
                if(node.right) queue.push(node.right);
            }

            // Add the completed level to result
            res.push(level);
        }

        return res;
    }
}
