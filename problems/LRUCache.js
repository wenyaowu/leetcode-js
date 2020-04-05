
class Node {
  constructor(val, key) {
    this.val = val;
    this.key = key;
    this.next = null;
    this.prev = null;
  }
}

/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.capacity = capacity
    this.currentCapacity = 0;
    this.head = new Node(0, 0);
    this.tail = new Node(0, 0);
    this.lookup = {}; // this provide a quick access to see if node with value is in the list. key:val, value:node
    this.head.next = this.tail;
    this.tail.prev = this.head;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if(this.lookup[key]) {
      let node = this.lookup[key];
      this._remove(node);
      this._add(node);
      return node.val;
    } 
    return -1;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if(this.lookup[key]) {
      this._remove(this.lookup[key]);
      this.currentCapacity -= 1;
    }
    let node = new Node(value, key);
    this.lookup[key] = node;
    this._add(node);
    this.currentCapacity += 1;
    // Remove if excedes capacity
    if(this.currentCapacity > this.capacity) {
      let removeNode = this.head.next;
      this._remove(removeNode);
      delete this.lookup[removeNode.key];
      this.currentCapacity -= 1
    }
};

LRUCache.prototype._remove = function(node) {
    let prev = node.prev;
    prev.next = node.next;
    node.next.prev = prev;
};


LRUCache.prototype._add = function(node) {
    let prev = this.tail.prev
    prev.next = node
    node.prev = prev;
    node.next = this.tail;
    this.tail.prev = node;
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */