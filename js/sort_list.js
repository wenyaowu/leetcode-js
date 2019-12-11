/**
 * Sort a linked list in O(n log n) time using constant space complexity.

Example 1:

Input: 4->2->1->3
Output: 1->2->3->4
Example 2:

Input: -1->5->3->4->0
Output: -1->0->3->4->5
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function(head) {
  if (!head) return null;
  // divide and concur
  // break list into half, need to find half point first

  // find the length of the list
  let n = 0;
  let count = head;
  while (count) {
    n += 1;
    count = count.next;
  }

  return sort(head, n);

  function sort(node, length) { 
    if (length === 1) { //consider the length === 1
      return node;
    }
    const mid = Math.ceil(length / 2);
    let lefthead = node;
    for(let i = 0; i < mid-1; i++) {
        lefthead = lefthead.next;
    }
    let righthead = lefthead.next;
    lefthead.next = null;
    let sortedLeft = sort(node, mid);    
    let sortedRight = sort(righthead, length - mid);

    return mergeSortedList(sortedLeft, sortedRight);
  }

  function mergeSortedList(l1, l2) {
    const head = new ListNode(0);
    let current = head;
    while (l1 && l2) {
      if (l1.val <= l2.val) {
        current.next = l1;
        l1 = l1.next;
        current = current.next;
      } else {
        current.next = l2;
        l2 = l2.next;
        current = current.next;
      }
    }
    if (l1) current.next = l1;
    if (l2) current.next = l2;
    return head.next;
  }
};
