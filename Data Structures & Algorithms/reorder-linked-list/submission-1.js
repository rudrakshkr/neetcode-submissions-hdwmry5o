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
     * @return {void}
     */
    reorderList(head) {
        if (!head || !head.next) return;

        let slow = head;
        let fast = head.next;

        // Find the middle part
        while(fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
        }

        // Reverse the second part
        let second = slow.next;
        let prev = (slow.next = null);

        while(second) {
            let nextTemp = second.next;
            second.next = prev;
            prev = second;
            second = nextTemp
        }

        // Merge the two lists
        let first = head;
        second = prev;
        while(second) {
            let tmp1 = first.next;
            let tmp2 = second.next;

            first.next = second;
            second.next = tmp1;

            first = tmp1;
            second = tmp2;
        }
    }
}
