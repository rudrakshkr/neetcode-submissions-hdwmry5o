class Solution {
    /**
     * @param {string} digits
     * @return {string[]}
     */
    letterCombinations(digits) {
        const phoneMap = {
            2: "abc",
            3: "def",
            4: "ghi",
            5: "jkl",
            6: "mno",
            7: "pqrs",
            8: "tuv",
            9: "wxyz"
        };

        const result = [];
        let current = "";

        function backtrack(index) {
            if(digits.length === 0) return;
            
            if(index === digits.length) {
                result.push(current);
                return;
            }

            let word = phoneMap[digits[index]];

            for(let char of word) {
                current += char;

                backtrack(index + 1);

                current = current.slice(0, -1);
            }
        }

        backtrack(0);

        return result;
    }
}
