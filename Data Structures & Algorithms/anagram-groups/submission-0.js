class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let hashMap = [];
        let char = 'a';
        
        for(let i = 0; i < strs.length; i++) {
            const count = Array(26).fill(0)
            for(let j = 0; j < strs[i].length; j++) {
                count[strs[i].charCodeAt(j) - char.charCodeAt(0)] += 1;
            }
            
            hashMap[count] = hashMap[count] || [];
            hashMap[count].push(strs[i]);
        }
        
        return Object.values(hashMap)
    }
}
