/**
 * 
Design and implement an iterator to flatten a 2d vector. It should support the following operations: next and hasNext.

 

Example:

Vector2D iterator = new Vector2D([[1,2],[3],[4]]);

iterator.next(); // return 1
iterator.next(); // return 2
iterator.next(); // return 3
iterator.hasNext(); // return true
iterator.hasNext(); // return true
iterator.next(); // return 4
iterator.hasNext(); // return false
 

Notes:

Please remember to RESET your class variables declared in Vector2D, as static/class variables are persisted across multiple test cases. Please see here for more details.
You may assume that next() call will always be valid, that is, there will be at least a next element in the 2d v
 */
/**
 * @param {number[][]} v
 */
var Vector2D = function(v) {
  this.flattenArray = v.reduce((accum, current) => {
    return [...accum, ...current];
  }, []);
};

/**
 * @return {number}
 */
Vector2D.prototype.next = function() {
    return this.flattenArray.shift();
};

/**
 * @return {boolean}
 */
Vector2D.prototype.hasNext = function() {
    return this.flattenArray.length !== 0;
};

/**
 * Your Vector2D object will be instantiated and called as such:
 * var obj = new Vector2D(v)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
