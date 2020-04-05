/**
 * 
 * Write a program to find the node at which the intersection of two singly linked lists begins.
 */

 /**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    
    // Approach 1, traverse two list and save the reference
    // time complexity O(n+m), memory complexity O(n or m), whichever traverse first
    if(!headA || !headB) {
        return null;
    }
    let lengthA = getLength(headA);
    let lengthB = getLength(headB);
    if(lengthA > lengthB) {
        headA = moveNode(headA, lengthA - lengthB);
    }
    if(lengthB > lengthA) {
        headB = moveNode(headB, lengthB - lengthA);
    }
    while(headA && headB) {
        if(headA === headB) {
            return headA;
        }
        headA = headA.next;
        headB = headB.next;
    }
    return null;
};

function getLength(node) {
    let l = 1;
    while(node) {
        l+=1;
        node = node.next;
    }
    return l;
}

function moveNode(node, length) {
    for (let i = 0; i<length; i++) {
        node = node.next;
    }
    return node;
}