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
     * @return {ListNode}
     */
    reverseList(head) {
        const listArray = [];

        let current = head;

        while(current) {
            listArray.push(current.val);
            current = current.next;
        }

        listArray.reverse();

        let dummy = new ListNode(0);
        let currentNode = dummy;

        for(let i = 0; i < listArray.length; i++) {
            let newNode = new ListNode(listArray[i]);

            currentNode.next = newNode;
            currentNode = currentNode.next
        }

        return dummy.next;
    }
}
