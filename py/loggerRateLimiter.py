"""
Design a logger system that receive stream of messages along with its timestamps, each message should be printed if and only if it is not printed in the last 10 seconds.

Given a message and a timestamp (in seconds granularity), return true if the message should be printed in the given timestamp, otherwise returns false.

It is possible that several messages arrive roughly at the same time.

Example:

Logger logger = new Logger();

// logging string "foo" at timestamp 1
logger.shouldPrintMessage(1, "foo"); returns true; 

// logging string "bar" at timestamp 2
logger.shouldPrintMessage(2,"bar"); returns true;

// logging string "foo" at timestamp 3
logger.shouldPrintMessage(3,"foo"); returns false;

// logging string "bar" at timestamp 8
logger.shouldPrintMessage(8,"bar"); returns false;

// logging string "foo" at timestamp 10
logger.shouldPrintMessage(10,"foo"); returns false;

// logging string "foo" at timestamp 11
logger.shouldPrintMessage(11,"foo"); returns true;
"""
from collections import deque
class TimeMessage:
    def __init__(self, time, message):
        self.time = time
        self.message = message


class Logger:

    def __init__(self):
        """
        Initialize your data structure here.
        """
        self.queue = deque()
        self.lookup = {} # Fast lookup to see if message is printed last 10 secs
    

    def shouldPrintMessage(self, timestamp: int, message: str) -> bool:
        """
        Returns true if the message should be printed in the given timestamp, otherwise returns false.
        If this method returns false, the message will not be printed.
        The timestamp is in seconds granularity.
        """
        # Poll out all the message that has t < timestamp - 10
        while len(self.queue) > 0 and self.queue[0].time <= timestamp -10:
            tm = self.queue.popleft()
            del self.lookup[tm.message]
        
        if message not in self.lookup:
            """
            Only updated if it's print. So if we try to print before it expires, 
            it will not refresh the timestemp of the same old message 
            """
            self.queue.append(TimeMessage(timestamp, message))
            self.lookup[message] = True
            return True
        return False

        


# Your Logger object will be instantiated and called as such:
# obj = Logger()
# param_1 = obj.shouldPrintMessage(timestamp,message)