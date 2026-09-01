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
     * @return {boolean}
     */
    isPalindrome(head) {
        let slow = head;
        let fast = head;

        while(fast !== null && fast.next !== null) {
            slow = slow.next;
            fast = fast.next.next;
        }

        let curr = slow;
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
            if(left.val !== right.val) return false;

            left = left.next;
            right = right.next;
        }

        return true;
    }
}
