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
     * @param {ListNode} headA
     * @param {ListNode} headB
     * @return {ListNode}
     */
    getIntersectionNode(headA, headB) {
        let pA = headA;
        let pB = headB;
        
        while(pA !== pB) {
            pA = pA === null ? headB : pA.next;
            pB = pB === null ? headA : pB.next;
        }

        return pA;
        

        // More brain approach LOL
        // Find the length of both the linked lists
        // let curr = headA;
        // let countA = 0;
        // let countB = 0;

        // while(curr !== null) {
        //     countA += 1;
        //     curr = curr.next;
        // }

        // curr = headB;

        // while(curr !== null) {
        //     countB += 1;
        //     curr = curr.next;
        // }

        // let currA = headA;
        // let currB = headB;

        // if(countA > countB) {
        //     let diff = countA - countB;
        //     while(diff > 0) {
        //         currA = currA.next;
        //         diff--;
        //     }
        // }
        // else if(countA < countB) {
        //     let diff = countB - countA;
        //     while(diff > 0) {
        //         currB = currB.next;
        //         diff--;
        //     }
        // }

        // while(currA !== null) {
        //     if(currA === currB) return currA;
            
        //     currA = currA.next;
        //     currB = currB.next;
        // }

        // return null; 
    }
}
