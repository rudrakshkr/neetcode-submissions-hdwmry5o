class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let answer = new Array(temperatures.length).fill(0);
        let stack = [];

        for(let i = 0; i < temperatures.length; i++) {
            while( stack.length > 0 
                && temperatures[i] > temperatures[stack.at(-1)] 
            ) {
                let prev = stack.pop();
                answer[prev] = i - prev;
            }

            stack.push(i);
        }

        return answer;
    }
}
