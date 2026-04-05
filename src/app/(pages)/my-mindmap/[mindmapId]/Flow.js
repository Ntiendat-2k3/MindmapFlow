"use client";

import { Fragment, useCallback, useEffect, useRef, useState } from "react";
import ReactFlow, {
    useNodesState,
    useEdgesState,
    addEdge,
    MiniMap,
    Controls,
    Background,
    useReactFlow,
    ReactFlowProvider,
} from "reactflow";

import MindmapInfo from "./components/MindmapInfo";
import NodeCustomFirst from "./components/NodeCustomFirst";
import NodeCustom from "./components/NodeCustom";
import EdgeCustom from "./components/EdgeCustom";
import { nanoid } from "nanoid";

import "reactflow/dist/style.css";
import "./styleNodeCustom.scss";
import Loading from "@/app/utils/loading";

const nodeTypes = {
    nodeCustomFirst: NodeCustomFirst,
    nodeCustom: NodeCustom,
};

const edgeTypes = {
    edgeCustom: EdgeCustom,
};

const connectionLineStyle = {
    strokeWidth: "3px",
    stroke: "#5046E5",
};

function Flow({ mindmap, session }) {
    const loading = useRef(false);
    const [minimap, setMinimap] = useState(true);

    const [nodes, setNodes, onNodesChange] = useNodesState([]);
    const [edges, setEdges, onEdgesChange] = useEdgesState([]);

    useEffect(() => {
        setNodes(() =>
            mindmap.nodes.map((node) => ({
                ...node,
                data: {
                    ...node.data,
                    // truyền setNodes để custom node commit label (blur/enter)
                    setNodes,
                },
            }))
        );

        setEdges(mindmap.edges);

        if (window.innerWidth < 992) setMinimap(false);
        const handleResize = () => {
            if (window.innerWidth >= 992) setMinimap(true);
            else setMinimap(false);
        };
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const connectingNodeId = useRef(null);
    const { screenToFlowPosition } = useReactFlow();

    const onConnect = useCallback(
        (newEdge) => {
            setEdges((currentEdges) => addEdge({ ...newEdge, type: "edgeCustom" }, currentEdges));
        },
        [setEdges]
    );

    const onConnectStart = useCallback((_, { nodeId }) => {
        connectingNodeId.current = nodeId;
    }, []);

    const onConnectEnd = useCallback(
        (event) => {
            if (!connectingNodeId.current) return;

            const targetIsPane = event.target.classList.contains("react-flow__pane");
            if (!targetIsPane) return;

            const newNode = {
                id: nanoid(),
                position: screenToFlowPosition({
                    x: event.clientX,
                    y: event.clientY,
                }),
                deletable: true,
                data: {
                    label: "New Node",
                    setNodes,
                },
                type: "nodeCustom",
            };

            const newEdge = {
                id: nanoid(),
                source: connectingNodeId.current,
                target: newNode.id,
                type: "edgeCustom",
            };

            setNodes((currentNodes) => currentNodes.concat(newNode));
            setEdges((currentEdges) => currentEdges.concat(newEdge));
        },
        [screenToFlowPosition, setNodes, setEdges]
    );

    return (
        <Fragment>
            {/* ✅ MindmapInfo đã memo + tự get nodes/edges khi Save -> không rerender theo drag */}
            <MindmapInfo mindmap={mindmap} session={session} />

            <div className="flow-container">
                <ReactFlow
                    nodes={nodes}
                    edges={edges}
                    onConnect={onConnect}
                    onNodesChange={onNodesChange}
                    onEdgesChange={onEdgesChange}
                    connectionLineStyle={connectionLineStyle}
                    onConnectStart={onConnectStart}
                    onConnectEnd={onConnectEnd}
                    nodeTypes={nodeTypes}
                    edgeTypes={edgeTypes}
                    fitView
                    fitViewOptions={{ maxZoom: 1.5 }}
                    multiSelectionKeyCode="Control"
                    deleteKeyCode="Delete"
                    nodeOrigin={[0.5, 0]}
                    className="touchdevice-flow"
                    // ✅ tối ưu render cho mindmap nhiều node
                    onlyRenderVisibleElements
                >
                    <Controls />
                    {minimap && (
                        <MiniMap
                            zoomable
                            pannable
                            strokeWidth={100}
                            nodeStrokeWidth={5}
                            nodeBorderRadius={10}
                            zoomStep={1}
                            nodeColor="#4f46e5"
                            position="top-left"
                            maskColor="rgba(248, 250, 252, 0.7)"
                        />
                    )}
                    <Background variant="dots" color="#94a3b8" gap="30" size="3" />
                </ReactFlow>
            </div>

            {loading.current && <Loading />}
        </Fragment>
    );
}

export default function FlowProvier({ mindmap, session }) {
    return (
        <ReactFlowProvider>
            <Flow mindmap={mindmap} session={session} />
        </ReactFlowProvider>
    );
}
