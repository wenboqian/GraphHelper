import React, { useEffect, useRef, useState } from 'react';
import {Tree, Dropdown, Button} from 'antd';
import { register } from '@antv/x6-react-shape';
import { Graph } from '@antv/x6';
import { Export } from '@antv/x6-plugin-export';
import { Snapline } from '@antv/x6-plugin-snapline';

import { Transform } from '@antv/x6-plugin-transform';
import { reset, showPorts, autoLayout } from '../../utils/method';
import './nodeFlow.less';
import { ports } from '../../assets/ports';
import pb2X6 from "../../Data/pb2X6.js";
import { DataUri } from '@antv/x6'
import getFinalNodes from "../../utils/GraphUtil.js";
import LineReader from "../../component/LineReader.js";


let count = 0;
const icon = ''; // 节点icon

/** 函数组件 */
function ManageFlow(props) {
	let graph;
	const nodeIdRef = useRef(null);
	const [prevColor, setPrevColor] = useState(null);
	const [prevNode, setPrevNode] = useState(null);
	const [newGraph, setNewGraph] = useState(null); // 画布
	const [nodeId, setnodeId] = useState(''); // 节点id
	const [finalNodes, setFinalNodes] = useState([]);
	const [nodeIrMap, setNodeIrMap] = useState({});
	const [total, setTotal] = useState(0);
	const [treeList, setTreeList] = useState([
		{
			title: 'tuple',
			key: 'tuple',
			children: [
				{
					title: '%tuple.20',
					key: '%tuple.20',
					children: [
						{
							title: '%add.19',
							key: '%add.19',
							color: '#46b0fd',
						}
					],
					color: '#F6E98C',
					parents: [-1],
				},
			],
		},
	]); // 目录树

	useEffect(() => {
		nodeIdRef.current = nodeId;

	}, [nodeId]);

	useEffect(() => {
		init(); // 初始画布
		graph.centerContent();
		graph
			.use(
				new Snapline({
					enabled: true,
				})
			)
			.use(
				new Transform({
					resizing: true,
					rotating: true,
					enabled: true,
				})
			)
			.use(new Export());


		graph.on('node:click', ({ node }) => {
			console.log(node);
		});

		graph.on('edge:click', ({ edge }) => {
			reset(graph);
			edge.attr('line/stroke', 'orange');
		});

		// 右键操作
		graph.on('node:contextmenu', ({ node }) => {
			setnodeId(node.id)
		});

		// 删除处理
		graph.bindKey('backspace', () => {
			const cells = graph.getSelectedCells();
			const cellsId = cells[0].id;
			if (cellsId) {
				graph.removeCells(cells);
				// 删除节点信息 接口
			}
		});

		graph.zoomTo(0.8);

		refreshGraph();

		return () => {
			graph.dispose(); // 销毁画布
		};
	}, []);

	return (
		<div className="FlowManage">
			<h3>Final output nodes: {JSON.stringify(finalNodes)}; Total nodes amount: {total}</h3>
			<div className="content" style={{ flexDirection: 'initial', overflow: 'auto' }}>
				<div style={{ overflow: 'auto' }}>
					<Tree
						defaultExpandAll
						treeData={treeList}
						style={{ width: '180px', padding: '15px' }}
						onSelect={onSelect}
					/>
				</div>
				<div className="graphBox">

					<div className="react-shape-app graph">
						<div
							id="graph-container"
							className="app-content"
							style={{ flex: 1 }}
						></div>
					</div>
				</div>
				<div>
					<Button onClick={() => DownloadGraph()}>Download HLO Graph</Button>
					<h4>Selected node info:</h4>
					<h4>Tensor id: {nodeId}</h4>
					<p>{JSON.stringify(nodeIrMap[nodeId])}</p>
				</div>
				{
					nodeIrMap[nodeId]
				}
			</div>
		</div>
	);

	/** 初始化画布 */
	function init() {
		// 右键菜单
		const CustomComponent = ({ node }) => {
			const label = node.prop('label');
			const color = node.prop('color');

			const boder = node.store?.data?.attrs?.body?.stroke;
			return (
				<Dropdown
					menu={{
						items: [
							{
								key: 'add',
								label: 'Change Tensor Value',
								onClick: () => {
									addTask();
								},
							},
						],
					}}
					trigger={['contextMenu']}
				>
					<div
						className="custom-react-node"
						style={{
							background: label === 'Start' ? '#7AA874' : color,
							border: `3px solid ${boder}`,
						}}
					>
						{/*{label === '开始' ? null : (*/}
						{/*	<img className="img" src={male} alt="Icon" />*/}
						{/*)}*/}
						{label}
					</div>
				</Dropdown>
			);
		};

		register({
			shape: 'custom-react-node',
			width: 100,
			height: 40,
			attrs: {
				label: {
					textAnchor: 'left',
					refX: 8,
					textWrap: {
						ellipsis: true,
					},
				},
			},
			component: CustomComponent,
		});

		graph = new Graph({
			container: document.getElementById('graph-container'),
			grid: true,
			panning: true,
			mousewheel: {
				enabled: true,
				zoomAtMousePosition: true,
				modifiers: ['ctrl', 'meta'],
				minScale: 0.4,
				maxScale: 3,
			},
			connecting: {
				snap: true,
				router: 'manhattan',
				highlight: true,
			},
			scroller: true,
		});

		graph.centerContent();

		graph.on('node:mouseenter', () => {
			const container = document.getElementById('graph-container');
			const ports = container.querySelectorAll('.x6-port-body');
			showPorts(ports, true);
		});
		graph.on('node:mouseleave', () => {
			const container = document.getElementById('graph-container');
			const ports = container.querySelectorAll('.x6-port-body');
			showPorts(ports, false);
		});

		setNewGraph(graph);
	}

	/** 新增节点 */
	function addTask() {
		let newNodeOptions = null;
		newNodeOptions = {
			shape: 'custom-react-node',
			width: 100,
			height: 50,
			id: `task${++count}`,
			attrs: {
				body: {
					strokeWidth: 0.2,
					fill: '#fff',
					refWidth: 1,
					refHeight: 1,
				},
			},
			label: `Node${count}`,
			ports: { ...ports },
		};
		let newNode = null; // 将 newNode 初始化为 null
		const g = graph ? graph : newGraph;

		if (nodeIdRef.current) {
			newNode = g.addNode(newNodeOptions); // 在添加边之前声明和初始化 newNode
			g.addEdge({
				source: nodeIdRef.current,
				target: newNode,
				router: {
					name: 'manhattan',
				},
			});
		} else {
			g?.addNode(newNodeOptions); // 在添加边之前声明和初始化 newNode
		}
		autoLayout(g); // 自动布局
	}

	/** 根据列表渲染节点 */
	function refreshGraph() {
		const g = graph ? graph : newGraph;
		g?.clearCells(); // 清除先前的数据

		graph.addNode({
			shape: 'custom-react-node',
			id: -1,
			label: 'Entry Point',
			ports: { ...ports },
		});

		treeList[0].children?.forEach((i) => {
			let newNodeOptions = null;
			// 1、根据type渲染不同类型大的节点

			newNodeOptions = {
				shape: 'custom-react-node',
				id: i.key,
				label: i.title,
				color: i.color,
				ports: { ...ports },
			};

			// 3、如果存在父节点 连接两个节点
			let newNode = null;
			if (i.parents && g) {
				// const node = g.getCellById(i.parent);
				newNode = g?.addNode(newNodeOptions);
				i.parents.forEach((id) => {
					// 根据父id 连接子
					g?.addEdge({
						source: id,
						target: i.key,
						router: {
							name: 'manhattan',
						},
					});
				});
			} else {
				// 如果没有父节点
				g?.addEdge({
					source: -1,
					target: i.key,
					router: {
						name: 'manhattan',
					},
				});
				g?.addNode(newNodeOptions);
			}

			const [irNodesMap, nodeRelations, x6Graph] = pb2X6();
			console.log("x6Graph", x6Graph)
			graph.fromJSON(
				x6Graph
			);
			console.log('nodeRelations', nodeRelations)
			setTotal(Object.keys(nodeRelations).length || 0);
			const nodesInfo = Object.entries(nodeRelations).map(([key, values], index) => {
				return {
					title: `${key} (${values.length})`,
					key: key,
					children: values.map((value, childIndex) => ({
						title: value,
						color: '#F6E98C',
						key: value + childIndex,
						parents: [-1]
					}))
				}
			}).sort((a, b) => a.children.length - b.children.length);
			console.log("nodesInfo", nodesInfo)

			setTreeList(nodesInfo);

			const finalNodesInfo = getFinalNodes(nodeRelations);
			console.log("finalNodesInfo", finalNodesInfo)
			setFinalNodes(finalNodesInfo);
			setNodeIrMap(irNodesMap);
			autoLayout(g);
		});
	}

	function DownloadGraph() {
		const g = graph ? graph : newGraph;
		g.toPNG((dataUri) => {
			DataUri.downloadDataUri(dataUri, 'hlo_graph.png')
		})
	}

	function onSelect(selectedKeys, info) {
		console.log('selected', selectedKeys, info);
		if (selectedKeys.length > 0) {
			selectionHandler(selectedKeys[0]);
			setnodeId(selectedKeys[0]);
		}
	}

	// handle the selected node.
	function selectionHandler(nodeKey) {
		const g = graph ? graph : newGraph;
		const node = g.getCellById(nodeKey) || g.getCellById(nodeKey.slice(0, -1));
		if (node) {
			if (prevNode) {
				prevNode.attr('body', { fill: prevColor });
			}
			setPrevNode(node);
			setPrevColor(node.attr('body/fill'));
			node.attr('body', { fill: 'red' });
		}
		const pos_x = node.getBBox().x || '';
		const pos_y = node.getBBox().y || '';
		// console.log("fff node", nodeKey, g.getCells(), pos_x, pos_y)
		g.center(pos_x, pos_y)
	}

}

export default ManageFlow;
