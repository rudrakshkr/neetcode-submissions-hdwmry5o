class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s) {
        let l = 0;
        let r = 1;
        let longestLength = 0;
        let longestStr = [];
        while(l !== s.length) {

            let slicedStr = s.slice(l,r);
            let reversedStr = slicedStr.split('').reverse().join('')
            if(slicedStr === reversedStr) {
                longestLength = Math.max(longestLength, slicedStr.length);
                if(longestLength === slicedStr.length) {
                    longestStr = [l,r];
                }
            }

            if(r === s.length) {
                l += 1;
                r = l + 1;
            } else {
                r += 1;
            }
        }

        return s.slice(longestStr[0], longestStr[1]);
    }
}
