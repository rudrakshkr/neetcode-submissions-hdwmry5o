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
    hasCycle(head) {
        let dummy = new ListNode(0);
        let slowNode = head;
        let fastNode = head;

        console.log(slowNode)

        while(slowNode && fastNode) {
            slowNode = slowNode.next;
            fastNode = fastNode.next;

            if(fastNode === null || slowNode === null) {
                return false;
            } else {
                fastNode = fastNode.next;
            }

            if(fastNode === null) return false;

            if(slowNode.val === fastNode.val) {
                return true;
            }
        }

        return false;
    }
}
