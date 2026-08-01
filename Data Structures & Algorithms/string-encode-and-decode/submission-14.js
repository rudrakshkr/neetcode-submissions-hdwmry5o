class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encodedString = "";
        for(let i = 0; i < strs.length; i++) {
            let strLength = strs[i].length;
            encodedString += `${strLength}#${strs[i]}`
        }
        return encodedString;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let decodedList = [];
        let i = 0;

        while(i < str.length) {
            // Find # and everything before it is the length
            let j = i;
            while(str[i] !== "#") {
                i += 1
            }
            let length = Number(str.slice(j, i));

            i += 1;

            decodedList.push(str.substring(i, i + length));
            i += length;
        }  

        return decodedList;
    }
}
