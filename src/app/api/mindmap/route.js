import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

// GET /api/mindmap
export async function GET() {
  try {
    // Initialize table if it doesn't exist
    await sql`
      CREATE TABLE IF NOT EXISTS mindmaps (
        id UUID PRIMARY KEY,
        name TEXT NOT NULL,
        description TEXT,
        nodes JSONB DEFAULT '[]',
        edges JSONB DEFAULT '[]',
        metadata JSONB DEFAULT '{}',
        is_accessible BOOLEAN DEFAULT false,
        email TEXT NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
    `;

    const { rows } = await sql`
      SELECT id, name, description as desc, nodes, edges, metadata, is_accessible as "isAccessible", email, created_at 
      FROM mindmaps 
      ORDER BY created_at DESC;
    `;
    return NextResponse.json(rows);
  } catch (error) {
    // If table doesn't exist, return empty array (first run)
    if (error.message.includes("relation \"mindmaps\" does not exist")) {
      return NextResponse.json([]);
    }
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// POST /api/mindmap
export async function POST(req) {
  try {
    const body = await req.json();
    const { id, name, desc, nodes, edges, metadata, isAccessible, email, created_at } = body;

    const result = await sql`
      INSERT INTO mindmaps (id, name, description, nodes, edges, metadata, is_accessible, email, created_at)
      VALUES (${id}, ${name}, ${desc}, ${JSON.stringify(nodes)}, ${JSON.stringify(edges)}, ${JSON.stringify(metadata)}, ${isAccessible}, ${email}, ${created_at})
      RETURNING *;
    `;

    return NextResponse.json(result.rows[0]);
  } catch (error) {
    console.error("POST Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
