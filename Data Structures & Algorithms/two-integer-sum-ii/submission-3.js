class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let LEFT = 0;
        let RIGHT = numbers.length - 1;
        
        while(LEFT < RIGHT) {
            let sum = numbers[LEFT] + numbers[RIGHT];

            if(sum < target) {
                LEFT++;
            }
            else if(sum > target) {
                RIGHT--;
            }
            else {
                return [LEFT + 1, RIGHT + 1]
            }
        }

        return [];
    }
}
