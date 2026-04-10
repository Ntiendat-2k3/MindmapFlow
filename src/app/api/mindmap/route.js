import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";
import { requireAuth } from "@/app/api/lib/auth";

// GET /api/mindmap — Lấy danh sách mindmap của user hiện tại
export async function GET(req) {
  try {
    const { session, error } = await requireAuth();
    if (error) return error;

    const userEmail = session.user.email.toLowerCase();

    const { rows } = await sql`
      SELECT id, name, description as desc, nodes, edges, metadata, is_accessible as "isAccessible", email, created_at 
      FROM mindmaps 
      WHERE LOWER(email) = ${userEmail}
      ORDER BY created_at DESC;
    `;
    return NextResponse.json(rows);
  } catch (err) {
    if (err.message.includes('relation "mindmaps" does not exist')) {
      return NextResponse.json([]);
    }
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

// POST /api/mindmap — Tạo mindmap mới (yêu cầu đăng nhập)
export async function POST(req) {
  try {
    const { session, error } = await requireAuth();
    if (error) return error;

    const body = await req.json();
    const { id, name, desc, nodes, edges, metadata, isAccessible, created_at } = body;

    // Bắt buộc email là email của user đang đăng nhập (không cho giả mạo)
    const email = session.user.email;

    const result = await sql`
      INSERT INTO mindmaps (id, name, description, nodes, edges, metadata, is_accessible, email, created_at)
      VALUES (${id}, ${name}, ${desc}, ${JSON.stringify(nodes)}, ${JSON.stringify(edges)}, ${JSON.stringify(metadata)}, ${isAccessible}, ${email}, ${created_at})
      RETURNING *;
    `;

    return NextResponse.json(result.rows[0]);
  } catch (err) {
    console.error("POST Error:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
