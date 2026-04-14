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
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        let dummy = new ListNode(0);
        let newNode = dummy;

        while(list1 && list2) {
            if(list1.val < list2.val) {
                newNode.next = list1;
                list1 = list1.next;
            }
            else {
                newNode.next = list2;
                list2 = list2.next;
            }

            newNode = newNode.next
        }

        if(list1) {
            newNode.next = list1;
        }
        else {
            newNode.next = list2;
        }
        return dummy.next;
    }

    mergeKLists(lists) {
        if(!lists || lists.length === 0) return null;

        let res = lists[0];
        for(let i = 1; i < lists.length; i++) {
            res = this.mergeTwoLists(res, lists[i]);
        }

        return res;
    }
}
