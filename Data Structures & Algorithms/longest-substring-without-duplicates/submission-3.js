class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let L = 0, R = 0;
        let set = new Set();
        let maxLength = 0;

        while(R < s.length) {
            // If set contains the element
            while(set.has(s[R])) {
                set.delete(s[L]);
                L++;
            }

            // If it is a new element
            set.add(s[R]);
            maxLength = Math.max(maxLength, ((R - L) + 1));
            R++;
        };

        return maxLength;
    }
}
