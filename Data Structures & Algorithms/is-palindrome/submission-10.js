class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let cleanedStr = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
        let i = 0;
        let j = cleanedStr.length - 1;

        while(i <= j) {
            if(cleanedStr[i] !== cleanedStr[j]) return false;
            i++
            j--
        }

        return true;
    }
}
