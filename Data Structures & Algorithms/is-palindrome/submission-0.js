class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const checkString = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
        for(let i = 0; i < checkString.length; i++) {
            if(checkString[i] !== checkString[(checkString.length - 1) - i]) return false;
        }
        return true;
    }
}
