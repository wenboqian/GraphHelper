import CryptoJS from 'crypto-js';
import fs from 'fs';
import path from 'path';

function pb2X6() {
    const input = `
    Tensor: id=1, shape=f32[1,4]{1,0}, device=NEURON:0, ir_nodes=1
Frames:
  convert (/home/ubuntu/qwb/pytorch/torch/nn/modules/module.py:1158)
  _apply (/home/ubuntu/qwb/pytorch/torch/nn/modules/module.py:833)
  to (/home/ubuntu/qwb/pytorch/torch/nn/modules/module.py:1160)
  <module> (run_linear.py:14)
IR {
  %0 = f32[1,4]{1,0} xla::device_data() tensor_ids = [1], location=convert@module.py:1158, xla_shape=f32[1,4]{1,0}, device=NEURON:0, ROOT=0
}


Tensor: id=2, shape=f32[1]{0}, device=NEURON:0, ir_nodes=1
Frames:
  convert (/home/ubuntu/qwb/pytorch/torch/nn/modules/module.py:1158)
  _apply (/home/ubuntu/qwb/pytorch/torch/nn/modules/module.py:833)
  to (/home/ubuntu/qwb/pytorch/torch/nn/modules/module.py:1160)
  <module> (run_linear.py:14)
IR {
  %0 = f32[1]{0} xla::device_data() tensor_ids = [2], location=convert@module.py:1158, xla_shape=f32[1]{0}, device=NEURON:0, ROOT=0
}


Tensor: id=3, shape=f32[4]{0}, device=NEURON:0, ir_nodes=1
Frames:
  <module> (run_linear.py:16)
IR {
  %0 = f32[4]{0} xla::device_data() tensor_ids = [3], location=<module>@run_linear.py:16, xla_shape=f32[4]{0}, device=NEURON:0, ROOT=0
}


Tensor: id=7, shape=f32[1,4]{1,0}, device=NEURON:0, ir_nodes=2
Frames:
  forward (/home/ubuntu/qwb/pytorch/torch/nn/modules/linear.py:114)
  forward (/home/ubuntu/qwb/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/xla_impl/hint.py:104)
  _call_impl (/home/ubuntu/qwb/pytorch/torch/nn/modules/module.py:1527)
  _wrapped_call_impl (/home/ubuntu/qwb/pytorch/torch/nn/modules/module.py:1518)
  <module> (run_linear.py:17)
IR {
  %0 = f32[4]{0} xla::device_data() tensor_ids = [3, 7], location=<module>@run_linear.py:16, xla_shape=f32[4]{0}, device=NEURON:0
  %1 = f32[1,4]{1,0} aten::as_strided(%0) tensor_ids = [7], location=forward@linear.py:114, xla_shape=f32[1,4]{1,0}, size=(1, 4), stride=(4, 1), storage_offset=0, ROOT=0
}


Tensor: id=8, shape=f32[1]{0}, device=NEURON:0, ir_nodes=13
Frames:
  forward (/home/ubuntu/qwb/pytorch/torch/nn/modules/linear.py:114)
  forward (/home/ubuntu/qwb/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/xla_impl/hint.py:104)
  _call_impl (/home/ubuntu/qwb/pytorch/torch/nn/modules/module.py:1527)
  _wrapped_call_impl (/home/ubuntu/qwb/pytorch/torch/nn/modules/module.py:1518)
  <module> (run_linear.py:17)
IR {
  %0 = f32[] prim::Constant() tensor_ids = [8], location=forward@linear.py:114, xla_shape=f32[], value=1
  %1 = f32[1]{0} aten::expand(%0) tensor_ids = [8], location=forward@linear.py:114, xla_shape=f32[1]{0}, size=(1)
  %2 = f32[1]{0} xla::device_data() tensor_ids = [2, 8], location=convert@module.py:1158, xla_shape=f32[1]{0}, device=NEURON:0
  %3 = f32[1]{0} xla::_op_TransferWithStaticRingTransfer(%2) tensor_ids = [8], location=__call__@xla_op_registry.py:44, xla_shape=f32[1]{0}, computation=TransferWithStaticRingTransfer
  %4 = f32[1]{0} aten::mul(%3, %1) tensor_ids = [8], location=forward@linear.py:114, xla_shape=f32[1]{0}
  %5 = f32[1,4]{1,0} xla::device_data() tensor_ids = [1, 8], location=convert@module.py:1158, xla_shape=f32[1,4]{1,0}, device=NEURON:0
  %6 = f32[1,4]{1,0} xla::_op_TransferWithStaticRingTransfer(%5) tensor_ids = [8], location=__call__@xla_op_registry.py:44, xla_shape=f32[1,4]{1,0}, computation=TransferWithStaticRingTransfer
  %7 = f32[4,1]{0,1} aten::permute(%6) tensor_ids = [8], location=forward@linear.py:114, xla_shape=f32[4,1]{0,1}, dims=(1, 0)
  %8 = f32[4]{0} xla::device_data() tensor_ids = [3, 7, 8], location=<module>@run_linear.py:16, xla_shape=f32[4]{0}, device=NEURON:0
  %9 = f32[1,4]{1,0} aten::as_strided(%8) tensor_ids = [7, 8], location=forward@linear.py:114, xla_shape=f32[1,4]{1,0}, size=(1, 4), stride=(4, 1), storage_offset=0
  %10 = f32[1,1]{1,0} aten::mm(%9, %7) tensor_ids = [8], location=forward@linear.py:114, xla_shape=f32[1,1]{1,0}
  %11 = f32[1]{0} aten::as_strided(%10) tensor_ids = [8], location=forward@linear.py:114, xla_shape=f32[1]{0}, size=(1), stride=(1), storage_offset=0
  %12 = f32[1]{0} aten::add(%11, %4) tensor_ids = [8], location=forward@linear.py:114, xla_shape=f32[1]{0}, ROOT=0
}



    `;

    function getIrNodesMap(input) {
        let result = { '%0': [] }
        const lines = input.split('\n');
        let currentId = '';
        let content = [];

        for (const line of lines) {
            const idMatch = line.match(/id=(\d+)/);
            if (idMatch) {
                // Store the previous content into the result object under the previous ID
                if (currentId !== '') {
                    result[`%${currentId}`] = content;
                }
                // Reset for the new ID
                currentId = idMatch[1];
                content = [];
            }
            // Add the current line to the content array
            content.push(line);
        }

        // Store the last collected content under the last ID
        if (currentId !== '') {
            result[`%${currentId}`] = content;
        }

        return result;
    }

    const irNodesMap = getIrNodesMap(input);

// Todo: 使用async, await保证文件流结果同步
    function readPbFile(absolutePath) {
        let res = '';
        fs.readdir(absolutePath, 'utf8', (err, files) => {
            if (err) {
                console.error('Error reading the file:', err);
                return;
            }
            let cnt = 0;
            for (let i = 0; i < files.length; i++) {
                let file = files[i];
                if (file.endsWith('.pbtxt')) {
                    // 暂时只支持读取第一个文件
                    if (cnt > 1) {
                        break;
                    }
                    const filePath = path.join(absolutePath, file);
                    // 读取并打印文件内容
                    fs.readFile(filePath, 'utf8', (err, data) => {
                        if (err) {
                            console.error("Error reading file:", err);
                            return;
                        }
                        return data;
                    });
                    cnt += 1;
                }
            }
        });
        return res;
    }
    const absolutePath = '/Users/qwb/Desktop/Distributed System Research/HLODiffHelper/antvX6_2.0_React-main/src/Data';
    // const inputText = await readPbFile(absolutePath);

    const nodeRelations = parseHLO(input)

    function getRandomColor() {
        // 生成随机的 R、G、B 分量
        let r = Math.floor(Math.random() * (256 - 128) + 128);
        let g = Math.floor(Math.random() * (256 - 128) + 128);
        let b = Math.floor(Math.random() * (256 - 128) + 128);
        let color = "#" + r.toString(16).padStart(2, '0') + g.toString(16).padStart(2, '0') + b.toString(16).padStart(2, '0');
        return color;
    }

    function extractType(str) {
        const regex = /%([^0-9.]+)[0-9]*\./;
        const match = str.match(regex);
        if (match) {
            return match[1];
        } else {
            const fallbackMatch = str.match(/%([^.]+)\./);
            return fallbackMatch ? fallbackMatch[1] : null;
        }
    }

    function parseHLO() {
        const lines = input.split('\n');
        let relations = {};
        lines.forEach(line => {
            if (line && typeof line !== 'string') {
                return;
            }
            if (!line || line && !line.trim() || line.length === 0) {
                return;
            }
            const regex = /tensor_ids\s*=\s*\[([^\]]+)\]/;
            const matches = line.match(regex);
            if (matches && matches.length > 1) {
                const ids = matches[1].split(',').map(Number);
                // console.log("ids: ", ids)
                for (let i = 1; i < ids.length; i++) {
                    const from = "%" + ids[i - 1].toString();
                    const to = "%" + ids[i].toString();
                    if (!relations[to]) {
                        relations[to] = new Set([]);
                    }
                    if (!relations[from]) {
                        relations[from] = new Set([]);
                    }
                    relations[to].add(from);
                }
            }
        });
        console.log("relations", relations)
        const convertedRelations = {};
        Object.keys(relations).map(key => {
            convertedRelations[key] = Array.from(relations[key]);
        });
        console.log("convertedRelations", convertedRelations)
        return convertedRelations;
    }

    function generateX6Graph(nodes) {
        const graph = [];
        const colors = {};
        const positions = { x: 40, y: 40, width: 100, height: 40 }; // Default positions and dimensions
        const visited = new Set();

        // Generate node objects
        Object.keys(nodes).forEach((node, index) => {
            // prevent from generating duplicate nodes
            if (visited.has(node)) {
                return;
            }
            const match = extractType(node);
            let color = '#fffff';
            if (match in colors) {
                color = colors[match];
            } else {
                color = getRandomColor();
                colors[match] = color;
            }
            graph.push({
                // id: node.replace('%', 'node'),
                id: node,
                x: positions.x,
                // y: positions.y + (index * 50), // Increment y position for each node for clarity
                y: positions.y, // Increment y position for each node for clarity
                width: positions.width,
                height: positions.height,
                label: node,
                shape: 'rect',
                attrs: {
                    body: {
                        fill: color
                    }
                }
            });
            visited.add(node);
        });

        // Generate edges and %p node
        Object.entries(nodes).forEach(([target, sources]) => {
            sources.forEach(source => {
                if (!visited.has(source)) {
                    const match = extractType(source);
                    let color = '#fffff';
                    if (match in colors) {
                        color = colors[match];
                    } else {
                        color = getRandomColor();
                        colors[match] = color;
                    }
                    graph.push({
                        // id: node.replace('%', 'node'),
                        id: source,
                        x: positions.x,
                        // y: positions.y + (index * 50), // Increment y position for each node for clarity
                        y: positions.y, // Increment y position for each node for clarity
                        width: positions.width,
                        height: positions.height,
                        label: source,
                        shape: 'rect',
                        attrs: {
                            body: {
                                fill: color
                            }
                        }
                    });
                    visited.add(source);
                }
                const edgeName = CryptoJS.MD5(source + target).toString(); // MD5 hash of source and target names
                graph.push({
                    id: 'edge' + edgeName,
                    // source: source.replace('%', 'node'),
                    // target: target.replace('%', 'node'),
                    source: source,
                    target: target,
                    shape: 'edge'
                });
            });
        });

        return graph;
    }

    const X6GraphRepresentation = generateX6Graph(nodeRelations);
    return [irNodesMap, nodeRelations, X6GraphRepresentation];
}

export default pb2X6;

