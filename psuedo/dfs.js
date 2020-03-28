function dfs(node) {

    if(visited[node]) { // Depends on if we want to track visited or terminate with some condition
        return 
    }
    // Do something with the node
    visited[node] = true;

    for(let i of allThePossibleMove) {
        if(someTerminateCondition || visited[i]) {
            continue;
        }
        dfs(i);
    }
     return someUsefulData
}