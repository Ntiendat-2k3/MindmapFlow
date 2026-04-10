import * as mindmapRepo from "@/app/api/lib/db/mindmap.repository";
import { getServerSession } from "next-auth";
import options from "@/app/api/auth/[...nextauth]/options";

/**
 * Data Service — Business logic layer.
 * Xử lý auth + gọi repository. Không chứa SQL.
 */

/** Lấy danh sách mindmap của user đang đăng nhập */
export async function getMindmapList() {
  try {
    const session = await getServerSession(options);
    if (!session?.user?.email) return null;

    return await mindmapRepo.findByEmail(session.user.email);
  } catch (err) {
    if (err.message?.includes('relation "mindmaps" does not exist')) {
      return [];
    }
    console.error("getMindmapList error:", err);
    return null;
  }
}

/** Lấy chi tiết 1 mindmap (kiểm tra quyền truy cập) */
export async function getMindmapById(id) {
  try {
    const mindmap = await mindmapRepo.findById(id);
    if (!mindmap) return null;

    // Public → cho xem
    if (mindmap.isAccessible) return mindmap;

    // Private → phải là owner
    const session = await getServerSession(options);
    const userEmail = (session?.user?.email || "").toLowerCase();
    const ownerEmail = (mindmap.email || "").toLowerCase();

    if (!session || userEmail !== ownerEmail) return null;

    return mindmap;
  } catch (err) {
    console.error("getMindmapById error:", err);
    return null;
  }
}
