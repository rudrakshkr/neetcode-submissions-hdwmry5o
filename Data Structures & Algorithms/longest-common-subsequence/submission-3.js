class Solution {
    /**
     * @param {string} text1
     * @param {string} text2
     * @return {number}
     */
    longestCommonSubsequence(text1, text2) {
        const m = text1.length;
        const n = text2.length;

        const memo = Array(m).fill(-1).map(() => Array(n).fill(-1));

        function find(i, j) {
            if(i === m || j === n) {
                return 0;
            }

            if(memo[i][j] !== -1) {
                return memo[i][j];
            }

            let result;
            if(text1[i] === text2[j]) {
                result = 1 + find(i + 1, j + 1)
            } else {
                result = Math.max(find(i + 1, j), find(i, j + 1));
            }

            memo[i][j] = result
            return result;
        }

        return find(0,0);
    }
}
