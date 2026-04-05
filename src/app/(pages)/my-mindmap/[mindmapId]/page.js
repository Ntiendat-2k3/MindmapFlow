import { Fragment } from "react";
import FlowProvier from "./Flow";

import { getServerSession } from "next-auth";
import { fetchMindmap } from "@/app/api/actions/handleServerSide";

import options from "@/app/api/auth/[...nextauth]/options";

export const generateMetadata = async ({ params }) => {
    const { mindmapId } = await params;
    const mindmap = await fetchMindmap(mindmapId);

    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3001";

    if (mindmap === "error" || !mindmap) {
        return {
            metadataBase: new URL(siteUrl),
            title: "Mindmap không tồn tại",
            description: "Bản đồ tư duy này không tồn tại hoặc đã bị xóa."
        };
    }

    // Lấy thông tin an toàn, có fallback đầy đủ
    const isPublic = mindmap.isAccessible;
    
    // Nếu là private thì không chia sẻ dữ liệu meta ra ngoài
    const title = isPublic ? (mindmap.metadata?.title || mindmap.name || "Mindmap không có tên") : "Mindmap Bảo Mật";
    const description = isPublic ? (mindmap.metadata?.description || mindmap.desc || "Chưa có mô tả") : "Bản đồ tư duy này đang được đặt ở chế độ riêng tư.";
    
    // Ảnh default nếu không có ảnh cụ thể
    const defaultImage = "/_next/static/media/so-do-tu-duy.913b15fe.webp";
    const image = isPublic ? (mindmap.metadata?.image || defaultImage) : defaultImage;

    return {
        metadataBase: new URL(siteUrl),
        title: title,
        description: description,
        openGraph: {
            title: title,
            description: description,
            type: "website",
            url: `/my-mindmap/${mindmapId}`,
            images: [
                {
                    url: image,
                    width: 1200,
                    height: 630,
                    alt: title,
                }
            ],
            siteName: "MindmapFlow",
        },
        twitter: {
            card: 'summary_large_image',
            title: title,
            description: description,
            images: [image],
        }
    };
}

function isObject(value) {
    return (
        typeof value === 'object' &&
        value !== null &&
        !Array.isArray(value)
    );
}

export default async function MindmapPage({ params }) {
    const { mindmapId } = await params;
    const session = await getServerSession(options);
    const mindmap = await fetchMindmap(mindmapId);

    return (
        <Fragment>
            {
                (mindmap === "error" || Object.keys(mindmap).length === 0) ? 
                (
                    <h3>Lỗi tải mindmap</h3>
                ) :
                (isObject(mindmap) && Object.keys(mindmap).length > 0) &&
                (
                    <FlowProvier mindmap={ mindmap } session={ session } />
                )
            }
        </Fragment>
    )
}