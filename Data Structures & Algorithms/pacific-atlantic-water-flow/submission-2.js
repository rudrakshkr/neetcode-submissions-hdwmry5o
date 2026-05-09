class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights) {
        let ROWS = heights.length;
        let COLS = heights[0].length;
        let pac = new Map();
        let atl = new Map();
        let res = [];

        function dfs(r, c, visit, prevHeight) {
            let key = `${r},${c}`
            if( visit.has(key) || 
                r < 0 || c < 0 ||
                r >= ROWS || c >= COLS ||
                heights[r][c] < prevHeight
            ) return;

            visit.set(key, true);
            
            dfs(r + 1, c, visit, heights[r][c]);
            dfs(r - 1, c, visit, heights[r][c]);
            dfs(r, c + 1, visit, heights[r][c]);
            dfs(r, c - 1, visit, heights[r][c]);
        }

        for(let c = 0; c < COLS; c++) {
            dfs(0, c, pac, heights[0][c])
            dfs(ROWS - 1, c, atl, heights[ROWS - 1][c])
        }

        for(let r = 0; r < ROWS; r++) {
            dfs(r, 0, pac, heights[r][0])
            dfs(r, COLS - 1, atl, heights[r][COLS - 1])
        }

        for(let r = 0; r < ROWS; r++) {
            for(let c = 0; c < COLS; c++) {
                let key = `${r},${c}`;
                if(pac.has(key) && atl.has(key)) {
                    res.push([r,c]);
                }
            }
        }

        return res;
    }
}
