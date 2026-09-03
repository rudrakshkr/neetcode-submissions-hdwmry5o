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
    if (head === null) return null;

    // 1. Insert copied nodes after each original node
    let curr = head;

    while (curr !== null) {
        let copy = new Node(curr.val);

        copy.next = curr.next;
        curr.next = copy;

        curr = copy.next;
    }

    // 2. Set random pointers
    curr = head;

    while (curr !== null) {
        if (curr.random !== null) {
            curr.next.random = curr.random.next;
        }

        curr = curr.next.next;
    }

    // 3. Separate original and copied lists
    curr = head;
    let copyHead = head.next;

    while (curr !== null) {
        let copy = curr.next;

        curr.next = copy.next;

        if (copy.next !== null) {
            copy.next = copy.next.next;
        }

        curr = curr.next;
    }

    return copyHead;
}
}
