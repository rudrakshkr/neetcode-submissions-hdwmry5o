class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    // isAnagram(s, t) {
    //     const sCharCount = [];
    //     const tCharCount = [];
        
    //     for(let i = 0; i < s.length; i++) {
    //         if((sCharCount.findIndex(arr => arr.char === s[i])) == -1) {
    //             sCharCount.push({char: s[i], count: 1});
    //         }
    //         else {
    //             const index = sCharCount.findIndex(arr => arr.char === s[i]);
    //             sCharCount[index].count += 1;
    //         }
    //     }

    //     for(let j = 0; j < t.length; j++) {
    //         if((tCharCount.findIndex(arr => arr.char === t[j])) == -1) {
    //             tCharCount.push({char: t[j], count: 1});
    //         }
    //         else {
    //             const index = tCharCount.findIndex(arr => arr.char === t[j]);
    //             tCharCount[index].count += 1;
    //         }
    //     }
        
    //     if(sCharCount.length === tCharCount.length 
    //         && sCharCount.every((element_1) =>
    //             tCharCount.some(
    //                 (element_2) =>
    //                     element_1.char === element_2.char &&
    //                     element_1.count === element_2.count
    //             )
    //         )
    //     ) {
    //         return true;
    //     }
        
    //     return false;
    // }

    isAnagram(s, t) {
        const array = [];

        if(s.length !== t.length) return false;
        
        for(let i = 0; i < 26; i++) {
            array.push(0);
        }
        
        for(let i = 0; i < s.length; i++) {
            array[s.charCodeAt(i) - 97] += 1
        }
        
        for(let j = 0; j < t.length; j++) {
            array[t.charCodeAt(j) - 97] -= 1
            if(array[t.charCodeAt(j) - 97] < 0) {
                return false;
            }
        }
        
        return true;
    }
}
