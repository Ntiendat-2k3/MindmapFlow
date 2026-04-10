import { NextResponse } from "next/server";
import * as mindmapRepo from "@/app/api/lib/db/mindmap.repository";
import { getSession, requireOwnership } from "@/app/api/lib/auth";

// GET /api/mindmap/[id] — Lấy chi tiết mindmap
export async function GET(req, { params }) {
  const { id } = await params;
  try {
    const mindmap = await mindmapRepo.findById(id);
    if (!mindmap) return NextResponse.json({});

    // Public → cho xem
    if (mindmap.isAccessible) return NextResponse.json(mindmap);

    // Private → phải là owner
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

// PATCH /api/mindmap/[id] — Cập nhật mindmap
export async function PATCH(req, { params }) {
  const { id } = await params;
  try {
    const ownerEmail = await mindmapRepo.findOwnerEmail(id);
    if (!ownerEmail) {
      return NextResponse.json({ error: "Mindmap not found" }, { status: 404 });
    }

    const { error } = await requireOwnership(ownerEmail);
    if (error) return error;

    const body = await req.json();
    const result = await mindmapRepo.update(id, body);

    return NextResponse.json(result);
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

// DELETE /api/mindmap/[id] — Xóa mindmap
export async function DELETE(req, { params }) {
  const { id } = await params;
  try {
    const ownerEmail = await mindmapRepo.findOwnerEmail(id);
    if (!ownerEmail) {
      return NextResponse.json({ error: "Mindmap not found" }, { status: 404 });
    }

    const { error } = await requireOwnership(ownerEmail);
    if (error) return error;

    await mindmapRepo.remove(id);
    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
