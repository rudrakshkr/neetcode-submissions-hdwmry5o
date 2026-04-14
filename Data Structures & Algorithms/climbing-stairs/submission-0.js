class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        if(n === 1) return 1;
        if(n === 2) return 2;

        let arr = [1,2]

        for(let i = 2; i < n; i++) {
            arr.push(arr[i - 2] + arr[i - 1]);
        }

        return arr.at(arr.length - 1);
    }
}
