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

        // Create a copy of each node
        let curr = head;

        while(curr !== null) {
            map.set(curr, new Node(curr.val));
            curr = curr.next;
        }

        // Connect next and random pointers
        curr = head;

        while(curr !== null) {
            let copy = map.get(curr);

            copy.next = curr.next ? map.get(curr.next) : null;
            copy.random = curr.random ? map.get(curr.random) : null;

            curr = curr.next;
        }

        return map.get(head);
    }
}
