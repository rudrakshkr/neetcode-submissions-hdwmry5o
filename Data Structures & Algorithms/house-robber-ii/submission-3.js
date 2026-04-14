class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */

    helperRob(nums) {
        let rob1 = 0;
        let rob2 = 0;

        for(let i = 0; i < nums.length; i++) {
            let temp = Math.max(rob1 + nums[i], rob2);
            rob1 = rob2;
            rob2 = temp;
        }
        
        return rob2;
    }

    rob(nums) {
        let res = [];
        let maxRobFromLeft = this.helperRob(nums.slice(1));
        let maxRobFromRight = this.helperRob(nums.slice(0, -1));

        console.log("Max left: ", maxRobFromLeft)
        console.log("Max right : ", maxRobFromRight)

        res.push(maxRobFromLeft, maxRobFromRight);

        return Math.max(nums[0], res[0], res[1]);
    }
}
