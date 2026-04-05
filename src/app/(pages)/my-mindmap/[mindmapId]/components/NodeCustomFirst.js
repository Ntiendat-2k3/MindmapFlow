"use client";

import { stripHtml } from "@/app/utils/methods";
import { useEffect, useRef, useState, useCallback, memo } from "react";
import { Handle, Position } from "reactflow";



function NodeCustomFirst({ id, data, isConnectable, selected }) {
    const overlayRef = useRef(null);
    const inputContentRef = useRef(null);

    const { label, setNodes } = data;
    const [content, setContent] = useState(label);

    useEffect(() => {
        setContent(label);
    }, [label]);

    const commitLabel = useCallback(
        (value) => {
            setNodes((currentNodes) =>
                currentNodes.map((n) =>
                    n.id === id ? { ...n, data: { ...n.data, label: value } } : n
                )
            );
        },
        [id, setNodes]
    );

    const handleDoubleClick = () => {
        inputContentRef.current?.focus();
    };

    const handleChangeContent = (event) => {
        setContent(stripHtml(event.target.value));
    };

    const fillEmptyAndCommit = (rawValue) => {
        const v = (rawValue ?? "").trim() || "My Mindmap";
        setContent(v);
        commitLabel(v);
    };

    const handleBlur = (event) => {
        fillEmptyAndCommit(event.target.value);
    };

    const handleKeyDown = (event) => {
        if (event.key !== "Enter") return;
        event.preventDefault();
        event.currentTarget.blur();
    };

    return (
        <div
            className={`node-custom ${selected ? "selected" : ""}`}
            onDoubleClick={handleDoubleClick}
        >
            <div className="main-content">
                <div ref={overlayRef} className="overlay"></div>
                <input
                    ref={inputContentRef}
                    type="text"
                    value={content}
                    onChange={handleChangeContent}
                    onBlur={handleBlur}
                    onKeyDown={handleKeyDown}
                />
            </div>

            <Handle
                type="source"
                position={Position.Bottom}
                isConnectable={isConnectable}
                className="css-handle"
            />
        </div>
    );
}

export default memo(NodeCustomFirst);
