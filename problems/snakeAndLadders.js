/**
 * @param {number[][]} board
 * @return {number}
 */
var snakesAndLadders = function(board) {
    const m = board.length;
    const destination = m * m;
    let board1D = [];
    const queue = [1];
    let level = 0;
    
    // Convert to 1d
    let direction = 1;
    while(board.length) {
        if(direction === 1) {
            board1D = [...board1D, ...board.pop()];    
        }
        else {
            board1D = [...board1D, ...board.pop().reverse()];
        }
        direction *= 1
    }
    
    const visited = new Array(board1D.length).fill(false);
    
    while(queue.length) {   
        let size = queue.length;
        for(let i = 0; i < size; i++) {
            let current = queue.shift();
            let idx = current - 1;
            if(current === destination) {
                return level;
            }
            
            for(let i = 1; i < 7; i++) {
                let next = current + i;
                if(next-1 < board1D.length && board1D[next-1] !== -1) {
                    next = board1D[next-1];
                }
                if(next > destination || visited[next-1]) {
                    continue
                }
                queue.push(next);
                visited[next-1] = true;
            }
        }
        level += 1;
    }
    
    return -1;
};