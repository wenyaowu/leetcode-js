import heapq
import re

class Count:
    def __init__(self, name):
        self.appearence = 0
        self.totalCount = 0
        self.name = name
    
    def __lt__(self, other):
        if self.appearence != other.appearence:
            return self.appearence > other.appearence
        else:
            return self.name < other.name



def topNCompetitors(numCompetitors, topNCompetitors, competitors, 
                    numReviews, reviews):
    
    heap = []
    count = {}
    res = []
    for c in competitors: # Initialize count for each competitor
        count[c] = Count(c) # (count, reviewCount)
        # Add reviewCount in case the count is the same for two competitors
    
    for review in reviews:
        competitorInReview = initCompetitorInReview(competitors) # Init for each review
        # For each review, split word by non-english characters
        split = re.split('\W+', review)
        for word in split:
            word = word.lower()
            if word in count:
                count[word].totalCount += 1 # Only add if key exists
                if not competitorInReview[word]: # First Appearence 
                    count[word].appearence += 1
                    competitorInReview[word] = True
    

    # Push data into heap
    for c in competitors:
        heapq.heappush(heap, count[c])
        if len(heap) > topNCompetitors: # Pop if we have more than topNCompetitors
            heapq.heappop(heap)
    
    while len(heap) > 0:
        res.append(heapq.heappop(heap).name)
    
    return res[::-1] # Reverse the array bc we pop the smallest first


def initCompetitorInReview(competitors):
    res = {}
    for c in competitors:
        res[c] = False
    return res