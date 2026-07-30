class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {  
        let hashMap = new Map();
        let strArr = [];

        for(let word of strs) {
            const count = new Array(26).fill(0);
            for(let char of word) {
                const index = char.charCodeAt(0) - 'a'.charCodeAt(0);
                count[index] += 1;
            }

            const signature = count.join("#");
            if(hashMap.has(signature)) {
                hashMap.get(signature).push(word);
            }
            else {
                hashMap.set(signature, [word]);
            }
        }

        for(const arr of hashMap.values()) {
            strArr.push(arr);
        }
        
        return strArr;
    }
}
