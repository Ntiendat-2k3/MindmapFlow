import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

// GET /api/mindmap/[id]
export async function GET(req, { params }) {
  const { id } = await params;
  try {
    const { rows } = await sql`
      SELECT id, name, description as desc, nodes, edges, metadata, is_accessible as "isAccessible", email, created_at 
      FROM mindmaps WHERE id = ${id} LIMIT 1;
    `;
    return NextResponse.json(rows[0] || {});
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// PATCH /api/mindmap/[id]
export async function PATCH(req, { params }) {
  const { id } = await params;
  try {
    const body = await req.json();
    const { nodes, edges, name, desc, metadata, isAccessible } = body;

    const result = await sql`
      UPDATE mindmaps 
      SET 
        nodes = ${nodes ? JSON.stringify(nodes) : undefined},
        edges = ${edges ? JSON.stringify(edges) : undefined},
        name = ${name || undefined},
        description = ${desc || undefined},
        metadata = ${metadata ? JSON.stringify(metadata) : undefined},
        is_accessible = ${isAccessible !== undefined ? isAccessible : undefined}
      WHERE id = ${id}
      RETURNING *;
    `;

    return NextResponse.json(result.rows[0]);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// DELETE /api/mindmap/[id]
export async function DELETE(req, { params }) {
  const { id } = await params;
  try {
    await sql`DELETE FROM mindmaps WHERE id = ${id};`;
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
