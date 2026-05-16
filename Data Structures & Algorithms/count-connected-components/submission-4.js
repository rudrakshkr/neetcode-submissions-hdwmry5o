class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {
        let map = Array.from({length: n}, () => []);
        let visited = new Array(n).fill(false);
        let count = 0;

        for(let [u, v] of edges) {
            map[u].push(v);
            map[v].push(u);
        }
        
        function dfs(node) {
            if(visited[node]) return;

            visited[node] = true;

            for(let neighbor of map[node]) {
                dfs(neighbor);
            }
        }

        for(let i = 0; i < n; i++) {
            if(!visited[i]) {
                dfs(i);
                count++
            }
        }
        return count;
    }
}
