"use client";

import React, { Fragment, useState, useCallback, memo } from "react";
import { useRouter } from "next/navigation";
import { useReactFlow } from "reactflow";

import { fetchSaveMindmap } from "@/app/api/actions/handleClientSide";
import ShareBox from "./ShareBox";
import notify from "@/app/utils/notify";
import { stripHtml } from "@/app/utils/methods";

import "./style.scss";

function MindmapInfo({ session, mindmap }) {
  const router = useRouter();
  const { getNodes, getEdges } = useReactFlow();

  const [name, setName] = useState(mindmap.name);
  const [desc, setDesc] = useState(mindmap.desc);

  const handleChangeName = (event) => {
    if (!mindmap.isAccessible) {
      document.title = event.target.value.trim()
        ? event.target.value.trim()
        : "Trống";
    }
    setName(stripHtml(event.target.value));
  };

  const handleChangeDesc = (event) => setDesc(stripHtml(event.target.value));

  const handleBlur = (event) => {
    if (!event.target.value.trim()) {
      if (event.target.nodeName === "INPUT") {
        document.title = "Mindmap không có tên";
        event.target.value = "Mindmap không có tên";
        setName("Mindmap không có tên");
      } else {
        event.target.value = "Chưa có mô tả";
        setDesc("Chưa có mô tả");
      }
    }
  };

  const handleClickSave = useCallback(async () => {
    if (session?.user?.email !== mindmap.email) {
      notify("warn", "Bạn không thể sửa mindmap!");
      return;
    }

    const nodes = getNodes();
    const edges = getEdges();

    const saveNodes = nodes.map((node) => ({
      ...node,
      data: { label: node?.data?.label ?? "" },
    }));

    // ✅ Sync metadata theo name/desc nếu metadata đang “đi theo” name/desc trước đó
    const oldMetaTitle = mindmap?.metadata?.title ?? "";
    const oldMetaDesc = mindmap?.metadata?.description ?? "";
    const oldName = mindmap?.name ?? "";
    const oldDesc = mindmap?.desc ?? "";

    const shouldSyncTitle = oldMetaTitle.trim() === oldName.trim();
    const shouldSyncDesc = oldMetaDesc.trim() === oldDesc.trim();

    const save = {
      ...mindmap,
      name,
      desc,
      nodes: saveNodes,
      edges,
      metadata: {
        ...(mindmap.metadata || {}),
        title: shouldSyncTitle ? name : oldMetaTitle,
        description: shouldSyncDesc ? desc : oldMetaDesc,
      },
    };

    notify("warn", "Chờ trong giây lát...");
    const response = await fetchSaveMindmap(save);

    // ✅ nếu fetchSaveMindmap của bạn đã đổi sang {ok:true} thì dùng dòng dưới
    if (response?.ok === true || response === "ok") {
      router.refresh();
      notify("success", "Lưu thành công!");
    } else {
      notify("error", "Lưu thất bại!");
    }
  }, [session?.user?.email, mindmap, name, desc, getNodes, getEdges, router]);

  return (
    <Fragment>
      <header className="mindmap-info">
        <div className="container">
          <div className="row row-root">
            <div className="col-12 col-md-6">
              <div className="mindmap-inputs">
                <input
                  type="text"
                  style={{ backgroundColor: "transparent" }}
                  className="input-mindmap-name"
                  value={name}
                  onChange={handleChangeName}
                  onBlur={handleBlur}
                />
                <textarea
                  className="textarea-mindmap-desc"
                  value={desc}
                  onChange={handleChangeDesc}
                  onBlur={handleBlur}
                ></textarea>
              </div>
            </div>

            <div className="col-12 col-md-6">
              <div className="mindmap-buttons">
                <div className="row">
                  <div className="col-5 col-xl-4">
                    <button onClick={handleClickSave}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          fillRule="evenodd"
                          d="M6.32 2.577a49.255 49.255 0 0 1 11.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 0 1-1.085.67L12 18.089l-7.165 3.583A.75.75 0 0 1 3.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93Z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Lưu
                    </button>
                  </div>

                  <div className="col-5 col-xl-4">
                    <label htmlFor="toggle-share-box">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          fillRule="evenodd"
                          d="M15.75 4.5a3 3 0 1 1 .825 2.066l-8.421 4.679a3.002 3.002 0 0 1 0 1.51l8.421 4.679a3 3 0 1 1-.729 1.31l-8.421-4.678a3 3 0 1 1 0-4.132l8.421-4.679a3 3 0 0 1-.096-.755Z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Chia sẻ
                    </label>
                  </div>

                  <div className="col-2 col-xl-4">
                    <label htmlFor="">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          fillRule="evenodd"
                          d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-7-4a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM9 9a.75.75 0 0 0 0 1.5h.253a.25.25 0 0 1 .244.304l-.459 2.066A1.75 1.75 0 0 0 10.747 15H11a.75.75 0 0 0 0-1.5h-.253a.25.25 0 0 1-.244-.304l.459-2.066A1.75 1.75 0 0 0 9.253 9H9Z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>Chỉ dẫn</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ✅ truyền draft name/desc để Share “ăn theo” ngay khi bạn đang sửa */}
      <ShareBox
        mindmap={mindmap}
        session={session}
        draftTitle={name}
        draftDesc={desc}
      />
    </Fragment>
  );
}

export default memo(MindmapInfo);
