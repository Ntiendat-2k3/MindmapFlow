import { sql } from "@vercel/postgres";
import { getServerSession } from "next-auth";
import options from "@/app/api/auth/[...nextauth]/options";

/**
 * Lấy danh sách mindmap của user đang đăng nhập.
 * Dùng cho Server Components — query DB trực tiếp, không qua API route.
 */
export async function getMindmapList() {
  try {
    const session = await getServerSession(options);
    if (!session?.user?.email) return null;

    const userEmail = session.user.email.toLowerCase();

    const { rows } = await sql`
      SELECT id, name, description as desc, nodes, edges, metadata, 
             is_accessible as "isAccessible", email, created_at 
      FROM mindmaps 
      WHERE LOWER(email) = ${userEmail}
      ORDER BY created_at DESC;
    `;
    return rows;
  } catch (err) {
    if (err.message?.includes('relation "mindmaps" does not exist')) {
      return [];
    }
    console.error("getMindmapList error:", err);
    return null;
  }
}

/**
 * Lấy chi tiết 1 mindmap theo ID.
 * Cho phép xem nếu: (1) là owner, hoặc (2) mindmap isAccessible = true
 */
export async function getMindmapById(id) {
  try {
    const { rows } = await sql`
      SELECT id, name, description as desc, nodes, edges, metadata, 
             is_accessible as "isAccessible", email, created_at 
      FROM mindmaps WHERE id = ${id} LIMIT 1;
    `;

    const mindmap = rows[0];
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
