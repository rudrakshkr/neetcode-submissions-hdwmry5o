// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        if(head === null) return null;
        
        const map = new Map();

        let curr = head;

        while(curr !== null) {
            map.set(curr, new Node(curr.val));
            curr = curr.next;
        }

        let newCurr = head;

        while(newCurr !== null) {
            let copy = map.get(newCurr);

            copy.next = newCurr.next ? map.get(newCurr.next) : null;
            copy.random = newCurr.random ? map.get(newCurr.random) : null;

            newCurr = newCurr.next;
        }

        return map.get(head);
    }
}
