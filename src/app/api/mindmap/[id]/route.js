import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";
import { getSession, requireOwnership } from "@/app/api/lib/auth";

// GET /api/mindmap/[id] — Lấy chi tiết mindmap
// Cho phép truy cập nếu: (1) là owner, hoặc (2) mindmap isAccessible = true
export async function GET(req, { params }) {
  const { id } = await params;
  try {
    const { rows } = await sql`
      SELECT id, name, description as desc, nodes, edges, metadata, is_accessible as "isAccessible", email, created_at 
      FROM mindmaps WHERE id = ${id} LIMIT 1;
    `;

    const mindmap = rows[0];
    if (!mindmap) {
      return NextResponse.json({});
    }

    // Nếu public → cho xem
    if (mindmap.isAccessible) {
      return NextResponse.json(mindmap);
    }

    // Nếu private → phải là owner
    const session = await getSession();
    const userEmail = (session?.user?.email || "").toLowerCase();
    const ownerEmail = (mindmap.email || "").toLowerCase();

    if (!session || userEmail !== ownerEmail) {
      return NextResponse.json(
        { error: "Forbidden — Mindmap này ở chế độ riêng tư" },
        { status: 403 }
      );
    }

    return NextResponse.json(mindmap);
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

// PATCH /api/mindmap/[id] — Cập nhật mindmap (yêu cầu là owner)
export async function PATCH(req, { params }) {
  const { id } = await params;
  try {
    // Kiểm tra mindmap tồn tại và lấy owner email
    const { rows: existing } = await sql`
      SELECT email FROM mindmaps WHERE id = ${id} LIMIT 1;
    `;
    if (!existing[0]) {
      return NextResponse.json({ error: "Mindmap not found" }, { status: 404 });
    }

    // Kiểm tra quyền sở hữu
    const { error } = await requireOwnership(existing[0].email);
    if (error) return error;

    const body = await req.json();
    const { nodes, edges, name, desc, metadata, isAccessible } = body;

    const result = await sql`
      UPDATE mindmaps 
      SET 
        nodes = COALESCE(${nodes ? JSON.stringify(nodes) : null}, nodes),
        edges = COALESCE(${edges ? JSON.stringify(edges) : null}, edges),
        name = COALESCE(${name || null}, name),
        description = COALESCE(${desc || null}, description),
        metadata = COALESCE(${metadata ? JSON.stringify(metadata) : null}, metadata),
        is_accessible = COALESCE(${isAccessible !== undefined ? isAccessible : null}, is_accessible)
      WHERE id = ${id}
      RETURNING *;
    `;

    return NextResponse.json(result.rows[0]);
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

// DELETE /api/mindmap/[id] — Xóa mindmap (yêu cầu là owner)
export async function DELETE(req, { params }) {
  const { id } = await params;
  try {
    // Kiểm tra mindmap tồn tại và lấy owner email
    const { rows: existing } = await sql`
      SELECT email FROM mindmaps WHERE id = ${id} LIMIT 1;
    `;
    if (!existing[0]) {
      return NextResponse.json({ error: "Mindmap not found" }, { status: 404 });
    }

    // Kiểm tra quyền sở hữu
    const { error } = await requireOwnership(existing[0].email);
    if (error) return error;

    await sql`DELETE FROM mindmaps WHERE id = ${id};`;
    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
