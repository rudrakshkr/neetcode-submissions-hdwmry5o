/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node) {
        if(!node) return null;

        const map = new Map();

        function dfs(node) {
            if(map.has(node)) {
                return map.get(node);
            }

            const clone = new Node(node.val);
            map.set(node, clone);

            for(let neighbor of node.neighbors) {
                clone.neighbors.push(dfs(neighbor));
            }
            return clone;
        }

        return dfs(node);
    }
}
