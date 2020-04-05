"""
Given the root of a binary tree, each node in the tree has a distinct value.

After deleting all nodes with a value in to_delete, we are left with a forest (a disjoint union of trees).

Return the roots of the trees in the remaining forest.  You may return the result in any order.

 

Example 1:



Input: root = [1,2,3,4,5,6,7], to_delete = [3,5]
Output: [[1,2,null,4],[6],[7]]
 

Constraints:

The number of nodes in the given tree is at most 1000.
Each node has a distinct value between 1 and 1000.
to_delete.length <= 1000
to_delete contains distinct values between 1 and 1000.
"""
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def delNodes(self, root: TreeNode, to_delete: List[int]) -> List[TreeNode]:
        res = []
        lookup = {}
        for i in to_delete:
            lookup[i] = True
        self.helper(root, True, lookup, res)
        return res

    def helper(self, node, isRoot, lookup, res):
        # isRoot = true when the parent is deleted, treeNode itself becomes a root node    
        if not node:
            return None
        isDeleted = node.val in lookup
        if not isDeleted and isRoot: # It is a tree(root)
            res.append(node)
        # If parent is deleted, child become root
        node.left = self.helper(node.left, isDeleted, lookup, res)
        node.right = self.helper(node.right, isDeleted, lookup, res)
        return None if isDeleted else node # If node is deleted, we update it's parent's reference 
