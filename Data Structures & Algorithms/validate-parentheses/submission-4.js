class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];

        for(let ch of s) {
            if(ch === '(' || ch === '{' || ch === '[') {
                stack.push(ch);
            }
            else {
                if(ch === ')') {
                    if(stack.at(-1) === '(') {
                        stack.pop();
                    }
                    else {
                        return false;
                    }
                } 
                else if(ch === ']') {
                    if(stack.at(-1) === '[') {
                        stack.pop();
                    }
                    else {
                        return false;
                    }
                }
                else if(ch === '}') {
                    if(stack.at(-1) === '{') {
                        stack.pop();
                    }
                    else {
                        return false;
                    }
                }
            }
        }

        return stack.length === 0 ? true : false;
    }
}
