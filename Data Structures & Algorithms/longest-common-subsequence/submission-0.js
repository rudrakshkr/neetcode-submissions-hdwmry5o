class Solution {
    /**
     * @param {string} text1
     * @param {string} text2
     * @return {number}
     */
    longestCommonSubsequence(text1, text2) {
        let memo = new Map();
        function find(i, j) {
            if(i === text1.length || j === text2.length) {
                return 0;
            }

            const key = i + ',' + j
            if(memo.has(key)) return memo.get(key);

            let result;
            if(text1[i] === text2[j]) {
                result = 1 + find(i + 1, j + 1)
            } else {
                result = Math.max(find(i + 1, j), find(i, j + 1));
            }

            memo.set(key, result);
            return result;
        }

        return find(0,0);
    }
}
