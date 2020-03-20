/*
Design and implement a data structure for Least Frequently Used (LFU) cache. It should support the following operations: get and put.

get(key) - Get the value (will always be positive) of the key if the key exists in the cache, otherwise return -1.
put(key, value) - Set or insert the value if the key is not already present. When the cache reaches its capacity, it should invalidate the least frequently used item before inserting a new item. 
For the purpose of this problem, when there is a tie (i.e., two or more keys that have the same frequency), the least recently used key would be evicted.

Note that the number of times an item is used is the number of calls to the get and put functions for that item since it was inserted. This number is set to zero when the item is removed.

 

Follow up:
Could you do both operations in O(1) time complexity?

 

Example:

LFUCache cache = new LFUCache( 2 )

cache.put(1, 1);
cache.put(2, 2);
cache.get(1);       // returns 1
cache.put(3, 3);    // evicts key 2
cache.get(2);       // returns -1 (not found)
cache.get(3);       // returns 3.
cache.put(4, 4);    // evicts key 1.
cache.get(1);       // returns -1 (not found)
cache.get(3);       // returns 3
cache.get(4);       // returns 4
*/
class Node {
    constructor(key, val) {
      this.key = key;
      this.val = val;
      this.freq = 1;
      this.prev = null;
      this.next = null;
    }
  }
  
  class DoublyLinkedList {
    constructor() {
      this.head = new Node(0, 0);
      this.tail = new Node(0, 0);
      this.head.next = this.tail;
      this.tail.prev = this.head;
      this.size = 0;
    }
  
    append(node) {
      
      const prev = this.tail.prev;
      prev.next = node;
      node.next = this.tail;
      node.prev = prev;
      this.tail.prev = node;
      this.size += 1;
      console.log('append node', node.val, this.size);
    }
  
    pop(node) {
      if (this.size === 0) {
        return;
      }
      if (!node) {
        node = this.head.next;
      }
  
      let prev = node.prev;
      prev.next = node.next;
      node.next.prev = prev;
  
      this.size -= 1;
      return node;
    }
  }
  
  /**
   * @param {number} capacity
   */
  var LFUCache = function(capacity) {
    this._capacity = capacity;
    this._size = 0;
    this._node = {};
    this._freq = {};
    this._minFreq = 0;
  };
  
  LFUCache.prototype._update = function(node) {
    let freq = node.freq;
    this._freq[freq].pop(node);
  
    // The node that we pop is the only min freq
    if (this._freq[freq].size === 0 && freq === this._minFreq) {
      this._minFreq += 1;
    }
    node.freq += 1;
    if (!this._freq[node.freq]) {
      this._freq[node.freq] = new DoublyLinkedList();
    }
    this._freq[node.freq].append(node);
  };
  
  /**
   * @param {number} key
   * @return {number}
   */
  LFUCache.prototype.get = function(key) {
    if (!this._node[key]) {
      return -1;
    }
    let node = this._node[key];
    this._update(node);
    return node.val;
  };
  
  /**
   * @param {number} key
   * @param {number} value
   * @return {void}
   */
  LFUCache.prototype.put = function(key, value) {
    if (this._capacity === 0) {
      return;
    }
    if (this._node[key]) {
      let node = this._node[key];
      node.val = value;
      this._update(node);
    } else {
      if (this._size === this._capacity) {
        let node = this._freq[this._minFreq].pop();
        delete this._node[node.key];
        this._size -= 1;
      }
      node = new Node(key, value);
      this._node[key] = node;
      if (!this._freq[1]) {
        this._freq[1] = new DoublyLinkedList();
      }
      this._freq[1].append(node);
      this._minFreq = 1;
      this._size += 1;
    }
  };
  
  /**
   * Your LFUCache object will be instantiated and called as such:
   * var obj = new LFUCache(capacity)
   * var param_1 = obj.get(key)
   * obj.put(key,value)
   */
  