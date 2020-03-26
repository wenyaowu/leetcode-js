// --------------YES-----------------
// 1. Find feasible solution
// 2. Find minimum search level, steps
// -------------NO-------------------
// 1. Find ALL the solutions

function bfs() {
    let node // Starting point
    queue = [node];
    visited = new Array(n).fill(false) // This can also be minLength or any kind of indication of visit, better solution found

    while(queue.length) {
        let current = queue.shift();
        if(visited[current]) {  // This can be some node that's already visited
            continue;
        }
        for(let neighbor of graph[node]) {
            if(visited[neighbor] || someTerminateConditions) {
                continue;
            }
            queue.push(neighbor);
        }
    }
}