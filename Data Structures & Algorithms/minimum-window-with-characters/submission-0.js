class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if(t === "") return "";
        
        // NEED HASHMAP
        const needMap = new Map();
        for(let char of t) {
            needMap.set(char, (needMap.get(char) || 0) + 1)
        }
        const needCount = needMap.size;
        
        // HAVE HASHMAP
        let haveMap = new Map();
        let haveCount = 0;
        
        let res = [-1, -1];
        let minLength = Infinity;
        let l = 0;
        
        for(let r = 0; r < s.length; r++) {
            let charRight = s[r];
            haveMap.set(charRight, (haveMap.get(charRight) || 0) + 1);
            
            // kya jitna hame mila hai aur jitna chahiye vo equal hai?
            if(needMap.has(charRight) && needMap.get(charRight) === haveMap.get(charRight)) {
                haveCount += 1
            }
            
            // If we get a valid window
            while(haveCount === needCount) {
                if((r - l + 1) < minLength) {
                    res = [l, r];
                    minLength = r - l + 1
                }
                
                // Remove leftmost character from window
                let charLeft = s[l];
                haveMap.set(charLeft, haveMap.get(charLeft) - 1)
                
                // If removing the leftmost character breaks the window, update haveCount
                if(needMap.has(charLeft) && needMap.get(charLeft) > haveMap.get(charLeft)) {
                    haveCount -= 1
                }
                
                // Shrink the window
                l += 1
            }
        }
        
        let [left, right] = res;
        return minLength !== Infinity ? s.slice(left, right + 1) : "";
    }
}
