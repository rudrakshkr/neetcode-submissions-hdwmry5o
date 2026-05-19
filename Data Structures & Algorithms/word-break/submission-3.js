class Solution {
    /**
     * @param {string} s
     * @param {string[]} wordDict
     * @return {boolean}
     */
    wordBreak(s, wordDict) {
        let memo = {};

        function dfs(i) {
            if(i in memo) return memo[i];
            if(i === s.length) return true;

            for(let word of wordDict) {
                if(s.substring(i, i + word.length) === word) {
                    if(dfs(i + word.length)) {
                        memo[i] = true;
                        return true;
                    }
                }
            }

            memo[i] = false;
            return false;
        }

        return dfs(0);
    }
}
