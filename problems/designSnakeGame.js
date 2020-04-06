/**
 * Initialize your data structure here.
        @param width - screen width
        @param height - screen height 
        @param food - A list of food positions
        E.g food = [[1,1], [1,0]] means the first food is positioned at [1,1], the second is at [1,0].
 * @param {number} width
 * @param {number} height
 * @param {number[][]} food
 */
var SnakeGame = function (width, height, food) {
    this.snake = [[0, 0]];
    this.lookup = { "0-0": true };
    this.food = food;
    this.foodPointer = 0;
    this.score = 0;
    this.width = width;
    this.height = height;
};

/**
 * Moves the snake.
        @param direction - 'U' = Up, 'L' = Left, 'R' = Right, 'D' = Down 
        @return The game's score after the move. Return -1 if game over. 
        Game over when snake crosses the screen boundary or bites its body. 
 * @param {string} direction
 * @return {number}
 */
SnakeGame.prototype.move = function (direction) {
    let currHead = this.snake[0];
    let nextHead = nextPosition(currHead, direction);
    let x = nextHead[0];
    let y = nextHead[1];
    let currentFood = this.foodPointer < this.food.length ? this.food[this.foodPointer] : null;
    
    let temp = this.remove();
    // if next out of bound or in snake, end
    if (x < 0 || y < 0 || x >= this.height || y >= this.width || this.lookup[`${x}-${y}`]) {
        return -1;
    }
    if (currentFood && currentFood[0] === x && currentFood[1] === y) {
        this.foodPointer += 1;
        this.score += 1;
        this.addTail(temp);
    }
    this.addHead(nextHead);
    return this.score;
};

SnakeGame.prototype.remove = function () {
    // remove from the end
    let removed = this.snake.pop();
    delete this.lookup[`${removed[0]}-${removed[1]}`];
    return removed;
};

SnakeGame.prototype.addTail = function (location) {
    // Add from the beginning
    this.lookup[`${location[0]}-${location[1]}`] = true;
    this.snake = [...this.snake, location];
};


SnakeGame.prototype.addHead = function (location) {
    // Add from the beginning
    this.lookup[`${location[0]}-${location[1]}`] = true;
    this.snake = [location, ...this.snake];
};


function nextPosition(curr, direction) {
    const dx = [-1, 0, 0, 1]; //U, L, R, D
    const dy = [0, -1, 1, 0];
    if (direction === "U") {
        return [curr[0] + dx[0], curr[1] + dy[0]];
    }
    if (direction === "L") {
        return [curr[0] + dx[1], curr[1] + dy[1]];
    }
    if (direction === "R") {
        return [curr[0] + dx[2], curr[1] + dy[2]];
    }
    if (direction === "D") {
        return [curr[0] + dx[3], curr[1] + dy[3]];
    }
}
/**
 * Your SnakeGame object will be instantiated and called as such:
 * var obj = new SnakeGame(width, height, food)
 * var param_1 = obj.move(direction)
 */