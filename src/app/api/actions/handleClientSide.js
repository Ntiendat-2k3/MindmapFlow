"use server";

import { sql } from "@vercel/postgres";
import { revalidateTag } from "next/cache";
import { getServerSession } from "next-auth";
import options from "@/app/api/auth/[...nextauth]/options";

async function getSessionEmail() {
  const session = await getServerSession(options);
  return session?.user?.email || null;
}

export const fetchAddMindmap = async (body) => {
  try {
    const email = await getSessionEmail();
    if (!email) return { ok: false, error: "Unauthorized" };

    const { id, name, desc, nodes, edges, metadata, isAccessible, created_at } = body;

    await sql`
      INSERT INTO mindmaps (id, name, description, nodes, edges, metadata, is_accessible, email, created_at)
      VALUES (${id}, ${name}, ${desc}, ${JSON.stringify(nodes)}, ${JSON.stringify(edges)}, ${JSON.stringify(metadata)}, ${isAccessible}, ${email}, ${created_at})
    `;

    revalidateTag("get_mindmap_list");
    return { ok: true };
  } catch (err) {
    console.error("fetchAddMindmap error:", err);
    return { ok: false, error: err.message };
  }
};

export const fetchDeleteMindmap = async (id) => {
  try {
    const email = await getSessionEmail();
    if (!email) return { ok: false, error: "Unauthorized" };

    // Kiểm tra ownership
    const { rows } = await sql`SELECT email FROM mindmaps WHERE id = ${id} LIMIT 1`;
    if (!rows[0]) return { ok: false, error: "Not found" };
    if (rows[0].email.toLowerCase() !== email.toLowerCase()) {
      return { ok: false, error: "Forbidden" };
    }

    await sql`DELETE FROM mindmaps WHERE id = ${id}`;

    revalidateTag("get_mindmap_list");
    revalidateTag(`get_mindmap_${id}`);
    return { ok: true };
  } catch (err) {
    console.error("fetchDeleteMindmap error:", err);
    return { ok: false, error: err.message };
  }
};

export const fetchSaveMindmap = async (body) => {
  try {
    const email = await getSessionEmail();
    if (!email) return { ok: false, error: "Unauthorized" };

    // Kiểm tra ownership
    const { rows } = await sql`SELECT email FROM mindmaps WHERE id = ${body.id} LIMIT 1`;
    if (!rows[0]) return { ok: false, error: "Not found" };
    if (rows[0].email.toLowerCase() !== email.toLowerCase()) {
      return { ok: false, error: "Forbidden" };
    }

    const { id, nodes, edges, name, desc, metadata, isAccessible } = body;

    await sql`
      UPDATE mindmaps 
      SET 
        nodes = COALESCE(${nodes ? JSON.stringify(nodes) : null}, nodes),
        edges = COALESCE(${edges ? JSON.stringify(edges) : null}, edges),
        name = COALESCE(${name || null}, name),
        description = COALESCE(${desc || null}, description),
        metadata = COALESCE(${metadata ? JSON.stringify(metadata) : null}, metadata),
        is_accessible = COALESCE(${isAccessible !== undefined ? isAccessible : null}, is_accessible)
      WHERE id = ${id}
    `;

    revalidateTag(`get_mindmap_${id}`);
    revalidateTag("get_mindmap_list");

    return { ok: true };
  } catch (err) {
    console.error("fetchSaveMindmap error:", err);
    return { ok: false, error: err?.message || "Network error" };
  }
};
