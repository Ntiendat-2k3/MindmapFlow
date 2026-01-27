"use client";

import { stripHtml } from "@/app/utils/methods";
import { useEffect, useRef, useState, useCallback, memo } from "react";
import { Handle, Position } from "reactflow";

const cssHandle = {
    position: "absolute",
    padding: "6px 20px",
    borderRadius: "3px",
    backgroundColor: "rgb(79,70,229)",
    outline: "1px solid white",
    bottom: "0px",
    translate: "0px 50%",
    zIndex: 2,
};

function NodeCustom({ id, data, isConnectable, selected }) {
    const overlayRef = useRef(null);
    const inputContentRef = useRef(null);

    const { label, setNodes } = data;
    const [content, setContent] = useState(label);

    // sync khi label thay đổi từ bên ngoài (load / undo / v.v)
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

    // ✅ onChange chỉ update local state (không setNodes mỗi ký tự)
    const handleChangeContent = (event) => {
        setContent(stripHtml(event.target.value));
    };

    const fillEmptyAndCommit = (rawValue) => {
        const v = (rawValue ?? "").trim() || "Node";
        setContent(v);
        commitLabel(v);
    };

    const handleBlur = (event) => {
        fillEmptyAndCommit(event.target.value);
    };

    const handleKeyDown = (event) => {
        if (event.key !== "Enter") return;
        event.preventDefault();
        event.currentTarget.blur(); // blur -> commit
    };

    return (
        <div
            className="node-custom"
            onDoubleClick={handleDoubleClick}
            style={{
                backgroundColor: selected ? "rgb(191,195,74)" : "rgb(139,195,74)",
                zIndex: selected ? "-1" : "1",
            }}
        >
            <Handle
                type="target"
                position={Position.Top}
                isConnectable={isConnectable}
                style={{ ...cssHandle, translate: "0% -50%", top: "0px", bottom: "auto" }}
            />

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
                style={cssHandle}
            />
        </div>
    );
}

export default memo(NodeCustom);
