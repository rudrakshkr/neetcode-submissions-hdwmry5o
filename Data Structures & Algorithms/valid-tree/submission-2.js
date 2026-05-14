class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {
        if(edges.length !== (n - 1)) return false;
        
        let visited = new Set();
        let adj = new Array(n).fill(0).map(() => []);

        for(let [a,b] of edges) {
            adj[a].push(b);
            adj[b].push(a);
        }

        function dfs(node, parent) {
            if(visited.has(node)) return false; // Cycle detected

            visited.add(node);

            for(let neighbor of adj[node]) {
                if(parent === neighbor) continue;

                if(!dfs(neighbor, node)) return false;
            }

            return true;
        }

        if(!dfs(0,-1)) return false;

        return visited.size === n;
    }
}
