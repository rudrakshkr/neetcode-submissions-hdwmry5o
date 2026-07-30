class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) {
            return false;
        }

        let hashMap = new Map();
        // Make hashtable for first string
        for(let char of s) {
            if(hashMap.has(char)) {
                hashMap.set(char, hashMap.get(char) + 1);
            } else {
                hashMap.set(char, 1);
            }
        }
        // Next check for second string
        for(let char of t) {
            if(hashMap.has(char) && hashMap.get(char) !== 0) {
                hashMap.set(char, hashMap.get(char) - 1);
            }
            else {
                return false;
            }
        }

        return true;
    }
}
