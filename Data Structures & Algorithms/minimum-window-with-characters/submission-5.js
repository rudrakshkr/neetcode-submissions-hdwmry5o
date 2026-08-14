class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        let tCount = new Map();
        let windowCount = new Map();

        let minWindowLength = Infinity;
        let minL = 0, minR = 0;

        // Create hashmap for "t"
        for(let i = 0; i < t.length; i++) {
            let ch = t[i];
            if(tCount.has(ch)) {
                tCount.set(ch, tCount.get(ch) + 1);
            } else {
                tCount.set(ch, 1);
            }
        }

        let L = 0, R = 0;

        let have = 0;
        let need = tCount.size;

        while(R < s.length) {
            let ch = s[R];

            if(tCount.has(ch)) {
                if(windowCount.has(ch)) {
                    windowCount.set(ch, windowCount.get(ch) + 1);
                }
                else {
                    windowCount.set(ch, 1);
                }
                
                if(windowCount.get(ch) === tCount.get(ch)) {
                    have++;
                }
            }
            
            while(have === need) {
                if((R - L + 1) < minWindowLength) {
                    minWindowLength = R - L + 1;
                    minL = L;
                    minR = R;
                }

                let ch = s[L];

                if(tCount.has(ch)) {
                    windowCount.set(ch, windowCount.get(ch) - 1);
                    
                    if(windowCount.get(ch) < tCount.get(ch)) {
                        have--;
                    }
                }

                L++;
            }

            R++;
        }
        return minWindowLength === Infinity ? "" : s.slice(minL, minR + 1);
    }
}
