import heapq

class TrieNode():
    def __init__(self):
        self.children = [None for i in range(27)]
        self.counts = {}        

class AutocompleteSystem:

    def __init__(self, sentences: List[str], times: List[int]):
        self.root = TrieNode()
        self.query = ""

        for idx, sentence in enumerate(sentences):
            self.add(sentence, times[idx])
        

    def input(self, c: str) -> List[str]:
        if(c == "#"):
            self.add(query, 1)
            self.query = ""
        else:
            self.query+=c
            return self.dfs()

    def dfs(self):
        current = self.root
        for char in this.query:
            idx = charToNum(char)
            next = current.children[idx]
            if not next:
                return []
        h = []
        for sentenceKey in current.counts.keys():
            heapq.heappush(h, (-current.counts[sentenceKey], sentenceKey))
        res = []
        while len(res) < 3 and len(h)>0:
            res.append(heapq.heappop(h)[1])
        return res

    def add(self, sentence, times): # Add new sentence
        current = self.root
        for char in sentence:
            if not current.children[char]:
                current.children[char] = TrieNode()
            current = current.children[char]
            if sentence not in current.counts:
                current.counts[sentence] = times
            else: 
                current.counts[sentence] += times

def charToNum(char):
    if char == " ":
        return 26
    return ord(char)-97


