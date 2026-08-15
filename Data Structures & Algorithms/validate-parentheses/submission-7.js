class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];
        const pairs = new Map([
            [")", "("],
            ["]", "["],
            ["}", "{"]
        ])

        for(let ch of s) {
            if(pairs.has(ch)) {
                if(stack.at(-1) !== pairs.get(ch)) {
                    return false;
                }

                stack.pop();
            }
            else {
                stack.push(ch);
            }

        }
            
        return stack.length === 0 ? true : false;
    }
}
