class Solution {
    /**
     * @param {string} s
     * @return {string[][]}
     */
    isPalindrome(str) {
        let left = 0;
        let right = str.length - 1;

        while(left <= right) {
            if(str[left] !== str[right]) return false;

            left++;
            right--;
        }

        return true;
    }

    partition(s) {
        const result = [];
        let current = [];

        const backtrack = (start) => {
            if(start === s.length) {
                result.push([...current]);
                return;
            }

            for(let end = start; end < s.length; end++) {
                const part = s.slice(start, end + 1);

                if(this.isPalindrome(part)) {
                    current.push(part); 
                    
                    backtrack(end + 1);

                    current.pop();
                }
            }
        }

        backtrack(0);

        return result;
    }
}
