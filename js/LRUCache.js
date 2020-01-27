/**
 * Key:
 * (1) Doubly linked list is good for (adding) removing value
 * (2) Keep head and tail for easy access
 * (3) Use hashtable to save node reference for easy access
 */
class Node {
  constructor(key, val) {
    this.key = key;
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
  this.capacity = capacity;
  this.currentCapacity = 0;
  this.head = new Node(0, 0);
  this.tail = new Node(0, 0);
  this.head.next = this.tail;
  this.tail.prev = this.head;
  this.lookup = {};
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  if (!this.lookup[key]) {
    return -1;
  }
  const n = this.lookup[key];
  this._remove(n);
  this._add(n);
  return n.val;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  if (this.lookup[key]) {
    this._remove(this.lookup[key]);
    this.currentCapacity -= 1;
  }
  const n = new Node(key, value);
  this._add(n);
  this.lookup[key] = n;
  this.currentCapacity += 1;
  if (this.currentCapacity > this.capacity) {
    const remove = this.head.next;
    delete this.lookup[remove.key];
    this._remove(remove);
    this.currentCapacity -= 1;
  }
};

LRUCache.prototype._add = function(node) {
  const temp = this.tail.prev;
  temp.next = node;
  node.prev = temp;
  node.next = this.tail;
  this.tail.prev = node;
};

LRUCache.prototype._remove = function(node) {
  const prev = node.prev;
  const next = node.next;
  prev.next = next;
  next.prev = prev;
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
