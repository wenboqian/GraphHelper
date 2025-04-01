import fs from 'fs';
import { exec } from 'child_process';
import extractDataType from "./utils.js";
import text from "./pbtxt/gpt2_tp=1_n_layer=2.js";

// Step 1: Parse HLO text into a graph data structure
function parseHloTextToGraph(text) {
    const lines = text.split('\n');
    let nodeEdges = {}; // Store edges for each node
    let nodeLabels = {}; // Store node labels (optional)

    const regex = /%([\w.-]+)/g;

    // Build the graph by extracting edges from the HLO text
    lines.forEach((line, lineIndex) => {
        const labelContent = extractDataType(line);
        const variables = [];
        let match;

        // Extract node labels (for optional visualization)
        while ((match = regex.exec(line)) !== null) {
            variables.push(match[1]);
        }

        if (variables.length > 1) {
            const target = variables[0];
            for (let i = 1; i < variables.length; i++) {
                const current = variables[i];

                // Store edges in the graph
                if (!nodeEdges[target]) {
                    nodeEdges[target] = [];
                }
                nodeEdges[target].push(current);
            }
        }

        // Optionally store labels for nodes
        if (labelContent !== '[]') {
            variables.forEach((node) => {
                nodeLabels[node] = labelContent;
            });
        }
    });

    return { nodeEdges, nodeLabels };
}

// Step 2: DFS to find all descendants of a root node
function dfs(rootNode, nodeEdges, visitedNodes, breakpoint) {
    if (rootNode === breakpoint || visitedNodes.has(rootNode)) return;
    visitedNodes.add(rootNode);
    if (nodeEdges[rootNode]) {
        nodeEdges[rootNode].forEach(childNode => {
            dfs(childNode, nodeEdges, visitedNodes, breakpoint);
        });
    }
}

// Step 3: Create a DOT representation of the subgraph
function generateDotForSubgraph(rootNode0, rootNode1, rootNode2, text) {
    const { nodeEdges, nodeLabels } = parseHloTextToGraph(text);
    let visitedNodes0 = new Set();

    // the first attention layer hlo subgraph
    dfs(rootNode0, nodeEdges, visitedNodes0, "No need");
    console.log("visitedNodes", visitedNodes0.size)
    const lines = text.split('\n');
    let result0 = [];
    let lineIndexSet0 = new Set();
    // Step 4: Find the last occurrence of rootNode in the lines
    const rootLineNumber0 = lines.findIndex(line => line.includes(rootNode0));
    console.log("rootLineNumber0", rootLineNumber0)
    if (rootLineNumber0 === -1) {
        throw new Error(`rootNode ${rootNode0} not found in the text.`);
    }
    // console.log("rootLineNumber: ", rootLineNumber, "rootNode: ", rootNode)
    // console.log("visitedNodes: ", visitedNodes)
    lines.forEach((line, lineIndex) => {
        const regex = /%([\w.-]+)/g;
        let match;
        while ((match = regex.exec(line)) !== null) {
            const node = match[1];
            if (lineIndexSet0.has(lineIndex)) {
                continue;
            }
            if (visitedNodes0.has(node) && lineIndex <= rootLineNumber0) {
                result0.push(line);
                lineIndexSet0.add(lineIndex);
            }
        }
    });

    // the second attention layer hlo subgraph
    let visitedNodes1 = new Set();
    dfs(rootNode1, nodeEdges, visitedNodes1, rootNode0);
    console.log("visitedNodes", visitedNodes1.size)
    let result1 = [];
    let lineIndexSet1 = new Set();
    // Step 4: Find the last occurrence of rootNode in the lines
    const rootLineNumber1 = lines.findIndex(line => line.includes(rootNode1));
    console.log("rootLineNumber1", rootLineNumber1)
    if (rootLineNumber1 === -1) {
        throw new Error(`rootNode ${rootNode1} not found in the text.`);
    }
    // console.log("rootLineNumber: ", rootLineNumber, "rootNode: ", rootNode)
    // console.log("visitedNodes: ", visitedNodes)
    lines.forEach((line, lineIndex) => {
        const regex = /%([\w.-]+)/g;
        let match;
        while ((match = regex.exec(line)) !== null) {
            const node = match[1];
            if (lineIndexSet1.has(lineIndex)) {
                continue;
            }
            if (visitedNodes1.has(node) && lineIndex <= rootLineNumber1) {
                result1.push(line);
                lineIndexSet1.add(lineIndex);
            }
        }
    });

    // remaining hlo subgraph
    let result2 = [];
    let visitedNodes2 = new Set();
    console.log("rootNode1", rootNode1)
    dfs(rootNode2, nodeEdges, visitedNodes2, rootNode1);
    console.log("visitedNodes", visitedNodes2.size)
    let lineIndexSet2 = new Set();
    // Step 4: Find the last occurrence of rootNode in the lines
    const rootLineNumber2 = lines.findIndex(line => line.includes(rootNode2));
    console.log("rootLineNumber2", rootLineNumber2)
    if (rootLineNumber2 === -1) {
        throw new Error(`rootNode ${rootNode1} not found in the text.`);
    }
    lines.forEach((line, lineIndex) => {
        const regex = /%([\w.-]+)/g;
        let match;
        while ((match = regex.exec(line)) !== null) {
            const node = match[1];
            if (lineIndexSet2.has(lineIndex)) {
                continue;
            }
            if (visitedNodes2.has(node) && lineIndex <= rootLineNumber2) {
                result2.push(line);
                lineIndexSet2.add(lineIndex);
            }
        }
    });
    console.log("result0:", result0.length)
    console.log("result1:", result1.length)
    console.log("result2:", result2.length)
    return [result0, result1, result2];
}

// Input text and root node
const input = text;
const rootNode0 = "transpose.166";  // tp1: transpose.166, tp2: transpose.166
const rootNode1 = "transpose.317";  // tp1: transpose.317, tp2: transpose.329
const rootNode2 = "reshape.379";    // tp1: reshape.379, tp2: reshape.403

// Generate the DOT content for the subgraph
const [textOutput0, textOutput1, textOutput2] = generateDotForSubgraph(rootNode0, rootNode1, rootNode2, input);

// Step 5: Write the DOT file and generate SVG
const filenames = ['./pbtxt/gpt2_tp=1_n_layer=2_output0.txt', './pbtxt/gpt2_tp=1_n_layer=2_output1.txt', './pbtxt/gpt2_tp=1_n_layer=2_output2.txt'];
const outputs = [textOutput0, textOutput1, textOutput2];
outputs.forEach((output, index) => {
    // 将输出转换为字符串（如果是数组，则使用 .join('\n') 转换为行分隔的字符串）
    const outputData = Array.isArray(output) ? output.join('\n') : String(output);
    fs.writeFile(filenames[index], outputData, (err) => {
        if (err) {
            console.error(`Failed to write file ${filenames[index]}:`, err);
        } else {
            console.log(`File ${filenames[index]} has been saved!`);
        }
    });
});


