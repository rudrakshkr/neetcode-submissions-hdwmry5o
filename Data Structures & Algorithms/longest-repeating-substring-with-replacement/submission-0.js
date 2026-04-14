class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let obj = {};
        let l = 0;
        let r = 0;
        let maxLength = 0;
        let maxFreq = 0;
        
        for(let r = 0; r < s.length; r++) {
            obj[s[r]] = (obj[s[r]] || 0) + 1;
            
            maxFreq = Math.max(maxFreq, obj[s[r]])
            
            while((r - l  + 1) - maxFreq > k) {
                obj[s[l]] -= 1
                l += 1
            }
            
            maxLength = Math.max(maxLength, r - l + 1)
        }
        
        return maxLength;
    }
}
