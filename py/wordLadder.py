"""
Given two words (beginWord and endWord), and a dictionary's word list, 
find the length of shortest transformation sequence from beginWord to endWord, such that:

Only one letter can be changed at a time.
Each transformed word must exist in the word list. 
Note that beginWord is not a transformed word.
Note:

Return 0 if there is no such transformation sequence.
All words have the same length.
All words contain only lowercase alphabetic characters.
You may assume no duplicates in the word list.
You may assume beginWord and endWord are non-empty and are not the same.
Example 1:

Input:
beginWord = "hit",
endWord = "cog",
wordList = ["hot","dot","dog","lot","log","cog"]

Output: 5

Explanation: As one shortest transformation is "hit" -> "hot" -> "dot" -> "dog" -> "cog",
return its length 5.
Example 2:

Input:
beginWord = "hit"
endWord = "cog"
wordList = ["hot","dot","dog","lot","log"]

Output: 0

Explanation: The endWord "cog" is not in wordList, therefore no possible transformation.
"""
class Solution:
    def ladderLength(self, beginWord: str, endWord: str, wordList: List[str]) -> int:
        if not beginWord or not endWord or len(wordList) == 0:
            return 0
        if endWord not in wordList:
            return 0
        nextHop = [beginWord]
        steps = 1
        tempNextWordList = []
        tempNextHop = []
        
        while len(nextHop) > 0:
            for word in nextHop:
                if word == endWord:
                    return steps
                # Find possible words for next step
                for w in wordList:
                    if self.validTransformation(word, w):
                        tempNextHop.append(w)
                    else:
                        tempNextWordList.append(w)
                wordList = tempNextWordList # Avoid Duplicate nextword
                tempNextWordList = []
            nextHop = tempNextHop 
            tempNextHop = []
            steps += 1
        return 0   

        
    
    def validTransformation(self, s1, s2):
        for i in range(len(s1)):
            if s1[0:i] == s2[0:i] and s1[i+1::] == s2[i+1::]:
                return True
        return False
