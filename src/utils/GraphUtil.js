// convert x6 graph to adjacent graph
const graphConvertor = (relations) => {
    let graph = {};
    Object.keys(relations).forEach(key => {
        const sources = relations[key];
        for (let s of sources) {
            if (!graph[s]) {
                graph[s] = new Set();
            }
            graph[s].add(key);
        }
    });
    Object.keys(graph).forEach(key => {
        graph[key] = Array.from(graph[key]);
    });
    return graph;
}

// use dfs
const getFinalNodes = (relations) => {
    let res = new Set();
    const graph = graphConvertor(relations);
    console.log("graph", graph)
    const dfs = (node) => {
        const children = graph[node];
        if (!node || node && !children || node && children && children.length === 0) {
            res.add(node);
            return;
        }
        for (let child of children) {
            dfs(child);
        }
    }
    dfs(Object.keys(graph)[0] || '');
    return Array.from(res);
}

export default getFinalNodes;
