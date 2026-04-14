class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const pairs = {
            "]": "[",
            ")": "(",
            "}": "{",
        }

        let stack = [];
        for(let i = 0; i < s.length; i++) {
            console.log(stack);
            if(Object.values(pairs).includes(s[i])) {
                stack.push(s[i]);
            }
            
            else if(pairs[s[i]]) {
                if(pairs[s[i]] ===  stack[stack.length - 1]) {
                    stack.pop();
                }
                else {
                    return false;
                }
            }
        }

        return stack.length === 0;
    }
}
