/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @param {number} k
     * @return {ListNode}
     */
    reverseKGroup(head, k) {
        const dummy = new ListNode(0);
        dummy.next = head;

        let groupPrev = dummy;

        while(true) {
            let kth = groupPrev;

            // Find the kth node of current group
            for(let i = 0; i < k; i++) {
                kth = kth.next;

                if(kth === null) {
                    return dummy.next;
                }
            }

            // Node after the current group
            const groupNext = kth.next;

            // Reverse the current group
            let prev = groupNext;
            let curr = groupPrev.next

            while(curr !== groupNext) {
                const nextNode = curr.next;

                curr.next = prev;
                prev = curr;
                curr = nextNode;
            }

            // Connect the reversed group
            const oldGroupHead = groupPrev.next;

            groupPrev.next = kth;

            // Move to the next group
            groupPrev = oldGroupHead;
        }
    }
}
