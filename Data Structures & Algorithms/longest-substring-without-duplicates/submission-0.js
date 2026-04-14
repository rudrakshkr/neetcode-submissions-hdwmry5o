class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        const set = new Set();
        let l = 0;
        let r = 0;
        let maxLength = 0;
        
        while(r !== s.length) {
            while(set.has(s[r])) {
                set.delete(s[l]);
                l += 1;
            }
            
            maxLength = Math.max(maxLength, r - l + 1);
            set.add(s[r]);
            r += 1;
        }
        
        return maxLength;
    }
}
