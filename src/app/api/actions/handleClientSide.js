"use server";

import * as mindmapRepo from "@/app/api/lib/db/mindmap.repository";
import { revalidateTag } from "next/cache";
import { getServerSession } from "next-auth";
import options from "@/app/api/auth/[...nextauth]/options";

/**
 * Server Actions — Business logic cho mutations.
 * Xử lý auth + ownership + gọi repository. Không chứa SQL.
 */

async function getSessionEmail() {
  const session = await getServerSession(options);
  return session?.user?.email || null;
}

async function verifyOwnership(mindmapId, userEmail) {
  const ownerEmail = await mindmapRepo.findOwnerEmail(mindmapId);
  if (!ownerEmail) return { ok: false, error: "Not found" };
  if (ownerEmail.toLowerCase() !== userEmail.toLowerCase()) {
    return { ok: false, error: "Forbidden" };
  }
  return { ok: true };
}

// ─── ADD ──────────────────────────────────────────────

export const fetchAddMindmap = async (body) => {
  try {
    const email = await getSessionEmail();
    if (!email) return { ok: false, error: "Unauthorized" };

    await mindmapRepo.create({ ...body, email });

    revalidateTag("get_mindmap_list");
    return { ok: true };
  } catch (err) {
    console.error("fetchAddMindmap error:", err);
    return { ok: false, error: err.message };
  }
};

// ─── DELETE ───────────────────────────────────────────

export const fetchDeleteMindmap = async (id) => {
  try {
    const email = await getSessionEmail();
    if (!email) return { ok: false, error: "Unauthorized" };

    const ownership = await verifyOwnership(id, email);
    if (!ownership.ok) return ownership;

    await mindmapRepo.remove(id);

    revalidateTag("get_mindmap_list");
    revalidateTag(`get_mindmap_${id}`);
    return { ok: true };
  } catch (err) {
    console.error("fetchDeleteMindmap error:", err);
    return { ok: false, error: err.message };
  }
};

// ─── SAVE ─────────────────────────────────────────────

export const fetchSaveMindmap = async (body) => {
  try {
    const email = await getSessionEmail();
    if (!email) return { ok: false, error: "Unauthorized" };

    const ownership = await verifyOwnership(body.id, email);
    if (!ownership.ok) return ownership;

    await mindmapRepo.update(body.id, body);

    revalidateTag(`get_mindmap_${body.id}`);
    revalidateTag("get_mindmap_list");

    return { ok: true };
  } catch (err) {
    console.error("fetchSaveMindmap error:", err);
    return { ok: false, error: err?.message || "Network error" };
  }
};
