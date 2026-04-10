import { NextResponse } from "next/server";
import * as mindmapRepo from "@/app/api/lib/db/mindmap.repository";
import { requireAuth } from "@/app/api/lib/auth";

// GET /api/mindmap — Lấy danh sách mindmap của user hiện tại
export async function GET() {
  try {
    const { session, error } = await requireAuth();
    if (error) return error;

    const rows = await mindmapRepo.findByEmail(session.user.email);
    return NextResponse.json(rows);
  } catch (err) {
    if (err.message?.includes('relation "mindmaps" does not exist')) {
      return NextResponse.json([]);
    }
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

// POST /api/mindmap — Tạo mindmap mới
export async function POST(req) {
  try {
    const { session, error } = await requireAuth();
    if (error) return error;

    const body = await req.json();
    const result = await mindmapRepo.create({
      ...body,
      email: session.user.email,
    });

    return NextResponse.json(result);
  } catch (err) {
    console.error("POST Error:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
