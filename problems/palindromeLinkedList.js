/**
 * Given a singly linked list, determine if it is a palindrome.

Example 1:

Input: 1->2
Output: false
Example 2:

Input: 1->2->2->1
Output: true
Follow up:
Could you do it in O(n) time and O(1) space?
 * /
 * **
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
  if (!head) {
    return true;
  }
  p1 = head;
  p2 = head;
  len = getLength(head);
  steps = Math.ceil(len / 2);
  // Move p2 to the start of second list
  for (let i = 0; i < steps; i++) {
    p2 = p2.next;
  }
  p2 = reverseList(p2);
  while (p2) {
    if (p1.val !== p2.val) {
      return false;
    }
    p1 = p1.next;
    p2 = p2.next;
  }
  return true;
};

var getLength = function(head) {
  len = 0;
  while (head) {
    len += 1;
    head = head.next;
  }
  return len;
};

var reverseList = function(head) {
  if (!head) {
    return null;
  }
  if (!head.next) {
    return head;
  }
  const newHead = reverseList(head.next);
  head.next.next = head;
  head.next = null;
  return newHead;
};
