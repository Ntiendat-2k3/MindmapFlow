"use client";

import { useEffect, useMemo, useRef, useState, memo, useCallback } from "react";
import { useRouter } from "next/navigation";
import { fetchSaveMindmap } from "@/app/api/actions/handleClientSide";
import notify from "@/app/utils/notify";
import { stripHtml } from "@/app/utils/methods";

import "./styleShareBox.scss";

function ShareBox({ session, mindmap, draftTitle, draftDesc }) {
  const router = useRouter();
  const [fullUrl, setFullUrl] = useState("");

  // link share
  useEffect(() => {
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || (typeof window !== "undefined" ? window.location.origin : "");
    if (siteUrl) {
      setFullUrl(`${siteUrl}/my-mindmap/${mindmap.id}`);
    }
  }, [mindmap.id]);

  // toggle public/private
  const [toggle, setToggle] = useState(
    mindmap.isAccessible ? "public" : "private",
  );
  useEffect(() => {
    setToggle(mindmap.isAccessible ? "public" : "private");
  }, [mindmap.isAccessible]);

  // ✅ state cho custom share meta (chỉ dùng nếu user tự sửa trong modal)
  const [customTitle, setCustomTitle] = useState("");
  const [customDesc, setCustomDesc] = useState("");
  const [customImg, setCustomImg] = useState("");

  const [dirtyTitle, setDirtyTitle] = useState(false);
  const [dirtyDesc, setDirtyDesc] = useState(false);
  const [dirtyImg, setDirtyImg] = useState(false);

  // ✅ fallback values
  const fallbackTitle =
    (draftTitle ?? mindmap?.name ?? "").trim() || "Mindmap không có tên";
  const fallbackDesc =
    (draftDesc ?? mindmap?.desc ?? "").trim() || "Chưa có mô tả";
  const fallbackImg = (mindmap?.metadata?.image ?? "").trim();

  // ✅ value hiển thị trong input
  const displayTitle = useMemo(() => {
    if (dirtyTitle) return customTitle;
    // ưu tiên metadata nếu có custom trước đó, còn không thì lấy draft
    const meta = (mindmap?.metadata?.title ?? "").trim();
    if (meta && meta !== "Mindmap không có tên") return meta;
    return fallbackTitle;
  }, [dirtyTitle, customTitle, mindmap?.metadata?.title, fallbackTitle]);

  const displayDesc = useMemo(() => {
    if (dirtyDesc) return customDesc;
    const meta = (mindmap?.metadata?.description ?? "").trim();
    if (meta && meta !== "Chưa có mô tả") return meta;
    return fallbackDesc;
  }, [dirtyDesc, customDesc, mindmap?.metadata?.description, fallbackDesc]);

  const displayImg = useMemo(() => {
    if (dirtyImg) return customImg;
    return (mindmap?.metadata?.image ?? "").trim() || fallbackImg;
  }, [dirtyImg, customImg, mindmap?.metadata?.image, fallbackImg]);

  // nếu mindmap đổi (router.refresh) thì reset dirty để nó ăn theo draft mới
  useEffect(() => {
    setDirtyTitle(false);
    setDirtyDesc(false);
    setDirtyImg(false);
    setCustomTitle("");
    setCustomDesc("");
    setCustomImg("");
  }, [mindmap.id]);

  const handleClickSaveShare = useCallback(async () => {
    if (session?.user?.email !== mindmap.email) {
      notify("warn", "Bạn không thể sửa mindmap!");
      return;
    }

    const isAccessible = toggle === "public";

    notify("warn", "Chờ trong giây lát...");
    const response = await fetchSaveMindmap({
      ...mindmap,
      isAccessible,
      metadata: {
        ...(mindmap.metadata || {}),
        // ✅ lưu đúng cái đang hiển thị (ăn theo draft nếu chưa dirty)
        title: (displayTitle || "").trim() || "Mindmap không có tên",
        description: (displayDesc || "").trim() || "Chưa có mô tả",
        image: (displayImg || "").trim(),
      },
    });

    if (response?.ok === true || response === "ok") {
      notify("success", "Lưu thành công!");
      router.refresh();
    } else {
      notify("error", "Lưu thất bại!");
    }
  }, [
    session?.user?.email,
    mindmap,
    toggle,
    displayTitle,
    displayDesc,
    displayImg,
    router,
  ]);

  return (
    <>
      <input type="checkbox" id="toggle-share-box" hidden />
      <input
        type="radio"
        id="toggle-share-private"
        name="toggle-share-body"
        checked={toggle === "private"}
        hidden
        readOnly
      />
      <input
        type="radio"
        id="toggle-share-public"
        name="toggle-share-body"
        checked={toggle === "public"}
        hidden
        readOnly
      />

      <div className="share-box">
        <label htmlFor="toggle-share-box" className="overlay"></label>

        <div className="share-box-structure" role="dialog" aria-modal="true">
          <div className="share-box-header">
            <label
              htmlFor="toggle-share-private"
              className="show-private"
              onClick={() => setToggle("private")}
            >
              Riêng tư
            </label>
            <label
              htmlFor="toggle-share-public"
              className="show-public"
              onClick={() => setToggle("public")}
            >
              Công khai
            </label>
          </div>

          <div className="share-box-body">
            <div className="body-private">
              <p>
                Nếu chọn riêng tư, chỉ có bạn mới được quyền xem Mindmap này!
              </p>
            </div>

            <div className="body-public">
              <div className="group">
                <label>Liên kết chia sẻ</label>
                <div className="row-inline">
                  <input type="text" value={fullUrl} readOnly />
                  <button
                    type="button"
                    className="btn-copy"
                    onClick={async () => {
                      try {
                        await navigator.clipboard.writeText(fullUrl);
                        notify("success", "Đã copy liên kết!");
                      } catch {
                        notify("error", "Copy thất bại!");
                      }
                    }}
                  >
                    Copy
                  </button>
                </div>
              </div>

              <div className="group">
                <label>Tiêu đề</label>
                <input
                  value={displayTitle}
                  onChange={(e) => {
                    setDirtyTitle(true);
                    setCustomTitle(stripHtml(e.target.value));
                  }}
                />
              </div>

              <div className="group">
                <label>Mô tả</label>
                <textarea
                  rows={3}
                  value={displayDesc}
                  onChange={(e) => {
                    setDirtyDesc(true);
                    setCustomDesc(stripHtml(e.target.value));
                  }}
                />
              </div>

              <div className="group">
                <label>Ảnh chia sẻ</label>
                <input
                  value={displayImg}
                  onChange={(e) => {
                    setDirtyImg(true);
                    setCustomImg(stripHtml(e.target.value));
                  }}
                />
              </div>
            </div>
          </div>

          <div className="share-box-footer">
            <label htmlFor="toggle-share-box">Đóng</label>
            <label onClick={handleClickSaveShare}>Lưu lại</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default memo(ShareBox);
