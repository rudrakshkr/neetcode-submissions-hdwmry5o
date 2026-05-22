class Solution {
    /**
     * @param {number} m
     * @param {number} n
     * @return {number}
     */
    uniquePaths(m, n) {
        const memo = {};

        function travel(i, j) {
            // Index out of bounds
            if(i < 0 || j < 0) return 0;

            // We reached the top left corner!
            if(i == 0 && j == 0) return 1;

            const key = `${i},${j}`;
            if(key in memo) {
                return memo[key]
            }

            // Go left and top and add result to memo
            memo[key] = travel(i - 1, j) + travel(i, j - 1);
            return memo[key];
        }

        return travel(m - 1, n - 1)
    }
}
