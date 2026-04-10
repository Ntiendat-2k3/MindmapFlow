import { sql } from "@vercel/postgres";

/**
 * Mindmap Repository — Tất cả SQL queries tập trung tại đây.
 * Không chứa business logic (auth, validation).
 * Chỉ nhận params, trả raw data.
 */

// ─── Helpers ──────────────────────────────────────────

/** Serialize DB rows — convert Date objects to ISO strings for React */
function serialize(data) {
  return JSON.parse(JSON.stringify(data));
}

/** Các cột SELECT dùng chung */
const MINDMAP_COLUMNS = `
  id, name, description as desc, nodes, edges, metadata, 
  is_accessible as "isAccessible", email, created_at
`;

// ─── READ ─────────────────────────────────────────────

/** Lấy danh sách mindmap theo email, sắp xếp mới nhất */
export async function findByEmail(email) {
  const { rows } = await sql`
    SELECT id, name, description as desc, nodes, edges, metadata, 
           is_accessible as "isAccessible", email, created_at 
    FROM mindmaps 
    WHERE LOWER(email) = ${email.toLowerCase()}
    ORDER BY created_at DESC
  `;
  return serialize(rows);
}

/** Lấy 1 mindmap theo ID */
export async function findById(id) {
  const { rows } = await sql`
    SELECT id, name, description as desc, nodes, edges, metadata, 
           is_accessible as "isAccessible", email, created_at 
    FROM mindmaps WHERE id = ${id} LIMIT 1
  `;
  return rows[0] ? serialize(rows[0]) : null;
}

/** Lấy email owner của mindmap (dùng cho ownership check) */
export async function findOwnerEmail(id) {
  const { rows } = await sql`
    SELECT email FROM mindmaps WHERE id = ${id} LIMIT 1
  `;
  return rows[0]?.email || null;
}

// ─── CREATE ───────────────────────────────────────────

/** Tạo mindmap mới */
export async function create({ id, name, desc, nodes, edges, metadata, isAccessible, email, created_at }) {
  const result = await sql`
    INSERT INTO mindmaps (id, name, description, nodes, edges, metadata, is_accessible, email, created_at)
    VALUES (
      ${id}, ${name}, ${desc}, 
      ${JSON.stringify(nodes)}, ${JSON.stringify(edges)}, ${JSON.stringify(metadata)}, 
      ${isAccessible}, ${email}, ${created_at}
    )
    RETURNING *
  `;
  return result.rows[0];
}

// ─── UPDATE ───────────────────────────────────────────

/** Cập nhật mindmap (chỉ update fields có giá trị) */
export async function update(id, { nodes, edges, name, desc, metadata, isAccessible }) {
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
    RETURNING *
  `;
  return result.rows[0];
}

// ─── DELETE ───────────────────────────────────────────

/** Xóa mindmap theo ID */
export async function remove(id) {
  await sql`DELETE FROM mindmaps WHERE id = ${id}`;
}
