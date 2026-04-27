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

class Codec {
    /**
     * Encodes a tree to a single string.
     *
     * @param {TreeNode} root
     * @return {string}
     */
    serialize(root) {
        let tree = [];
        function traverse(root) {
            if(root === null) {
                tree.push(null);
                return;
            }
            tree.push(root.val);

            traverse(root.left);
            traverse(root.right);
        }

        traverse(root);
        const processedTree = tree.map(element => {
            if(element) return element;
            else return 'null';
        })
        return processedTree.toString();
    }

    /**
     * Decodes your encoded data to tree.
     *
     * @param {string} data
     * @return {TreeNode}
     */
    deserialize(data) {
        const listTree = data.split(',');
        let ptr = 0;

        function traverse() {
            if(listTree[ptr] === 'null') {
                ptr += 1;
                return null;
            };
            let root = new TreeNode(listTree[ptr]);
            ptr += 1;

            root.left = traverse();
            root.right = traverse();

            return root;
        }

        let ans = traverse();
        return ans;
    }
}
