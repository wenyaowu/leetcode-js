class Node {
  constructor(val) {
    this.val = val;
    this.children = [];
  }
}

/**
 * A : [BCDE],
 * B : [ACG],
 * C : [ABD],
 * D : [ACEH],
 * E : [ADFH],
 * F : [EHG],
 * G : [BF],
 * H : [DEF]
 */

const graph = {
  A: ["B", "C", "D", "E"],
  B: ["A", "C", "G"],
  C: ["A", "B", "D"],
  D: ["A", "C", "H", "E"],
  E: ["A", "D", "F", "H"],
  F: ["E", "H", "G"],
  G: ["B", "F"],
  H: ["D", "E", "F"]
};


function bfs(graph) {
    const visited = {};
    const queue = ["A"];
    while(queue.length > 0) {
        const node = queue.shift();
        if(!visited[node]) {
            visited[node] = true;
            console.log(node); // process
        }
        for(let child of graph[node]) {
            if(!visited[child]) {
                queue.push(child);
            }
        }
    }
}

function dfs(graph) {
    const visited = {};
    const stack = ["A"];
    while(stack.length > 0) {
        const node = stack.pop();
        if(!visited[node]) {
            visited[node] = true;
            console.log(node); // process
        }
        for(let child of graph[node]) {
            if(!visited[child]) {
                stack.push(child);
            }
        }
    }
}


console.log('bfs');
bfs(graph);
console.log('dfs');
dfs(graph);
