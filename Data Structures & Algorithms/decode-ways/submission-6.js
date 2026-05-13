class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    numDecodings(s) {
        let memo = {};

        function dfs(i) {
            if(i === s.length) return 1;
            if(s[i] === '0') return 0;

            if(memo[i] !== undefined) return memo[i];

            // For 1 at a time
            let count = dfs(i + 1);

            // Check if we can take 2
            if( i + 1 < s.length &&
                (s[i] === '1' || (s[i] === '2' && s[i + 1] <= '6'))
            ) count += dfs(i + 2);

            memo[i] = count;
            return count;
        }

        return dfs(0);
    }
}
