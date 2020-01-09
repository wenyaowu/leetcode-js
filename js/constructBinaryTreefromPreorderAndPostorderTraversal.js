/**
 * 
Return any binary tree that matches the given preorder and postorder traversals.

Values in the traversals pre and post are distinct positive integers.

 

Example 1:

Input: pre = [1,2,4,5,3,6,7], post = [4,5,2,6,7,3,1]
Output: [1,2,3,4,5,6,7]
 

Note:

1 <= pre.length == post.length <= 30
pre[] and post[] are both permutations of 1, 2, ..., pre.length.
It is guaranteed an answer exists. If there exists multiple answers, you can return any of them.
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} pre
 * @param {number[]} post
 * @return {TreeNode}
 */
var constructFromPrePost = function(pre, post) {
  if (!pre || !pre.length) {
    return null;
  }
  const root = pre[0];
  if (!pre[1]) {
    return root;
  } else {
    let leftStart = pre[1];
    let leftLength = post.indexOf(leftStart) + 1;
    root.left = constructFromPrePost(
      pre.slice(1, 1 + leftLength),
      post.slice(0, 0 + leftLength)
    );
    if (leftLength !== post.length - 1) {
      // right tree exists
      root.right = constructFromPrePost(
        pre.slice(1 + leftLength, pre.length),
        post.slice(0 + leftLength, post.length)
      );
    }
  }
  return root;
};
