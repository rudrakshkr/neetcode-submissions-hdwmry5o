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
        let slow = head;
        let fast = head;

        // Find the middle
        while(fast !== null && fast.next !== null) {
            slow = slow.next;
            fast = fast.next.next;
        }
        
        let second = slow.next
        slow.next = null;

        let curr = second;
        let prev = null;

        while(curr !== null) {
            let next = curr.next;
            curr.next = prev;

            prev = curr;
            curr = next;
        }

        let left = head;
        let right = prev;
        
        while(right) {
            let nextLeft = left.next;
            let nextRight = right.next;

            left.next = right;
            right.next = nextLeft;

            left = nextLeft;
            right = nextRight;
        }
    }
}
