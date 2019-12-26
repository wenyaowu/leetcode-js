# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    
    result = 0
    n = 0
    
    def kthSmallest(self, root: TreeNode, k: int) -> int:
        self.inorder(root, k)
        return self.result
    
    def inorder(self, node, k):
        if not node: 
            return
        self.inorder(node.left, k)
        self.n += 1
        if(self.n == k):
            self.result = node.val
        self.inorder(node.right, k)
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    
    result = 0
    n = 0
    
    def kthSmallest(self, root: TreeNode, k: int) -> int:
        self.inorder(root, k)
        return self.result
    
    def inorder(self, node, k):
        if not node: 
            return
        self.inorder(node.left, k)
        self.n += 1
        if(self.n == k):
            self.result = node.val
        self.inorder(node.right, k)
