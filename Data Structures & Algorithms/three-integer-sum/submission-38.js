class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        let result = [];
        let sorted = nums.sort((a,b) => a - b);

        for(let i = 0; i < sorted.length - 2; i++) {
            let LEFT = i + 1;
            let RIGHT = sorted.length - 1;

            if(sorted[i] > 0) break;

            if(sorted[i] === sorted[i - 1]) continue;

            while(LEFT < RIGHT) {
                let sum = sorted[i] + sorted[LEFT] + sorted[RIGHT];

                if(sum === 0) {
                    result.push([sorted[i], sorted[LEFT], sorted[RIGHT]]);

                    LEFT++
                    RIGHT--
                    
                    while(LEFT < RIGHT && sorted[LEFT] === sorted[LEFT - 1]) {
                        LEFT++;
                    }
                    while(LEFT < RIGHT && sorted[RIGHT] === sorted[RIGHT + 1]) {
                        RIGHT--;
                    }
                }
                else if(sum < 0) {
                    LEFT++
                } else {
                    RIGHT--
                }
            }
        }

        return result;
    }

}