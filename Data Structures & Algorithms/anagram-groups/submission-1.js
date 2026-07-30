class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {  
        let hashMap = new Map();
        let strArr = [];
        for(let word of strs) {
            const sortedWord = word.split("").sort().join("");
            if(hashMap.has(sortedWord)) {
                hashMap.get(sortedWord).push(word);
            }
            else {
                hashMap.set(sortedWord, [word]);
            }
        }

        for(const arr of hashMap.values()) {
            strArr.push(arr);
        }
        
        return strArr;
    }
}
