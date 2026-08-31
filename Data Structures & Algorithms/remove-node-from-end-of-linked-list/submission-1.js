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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        let dummy = new ListNode(0);
        dummy.next = head;

        let slow = dummy;
        let fast = dummy;

        // Move fast by n + 1 pointer
        for(let i = 0; i < n + 1; i++) {
            fast = fast.next;
        }

        // Keep moving slow and fast pointer until fast reaches null;
        while(fast !== null) {
            slow = slow.next;
            fast = fast.next;
        }

        slow.next = slow.next.next;

        return dummy.next;
    }
}
