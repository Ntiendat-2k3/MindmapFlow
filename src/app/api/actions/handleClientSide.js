"use server";

import { revalidateTag } from "next/cache";

export const fetchAddMindmap = async (body) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  if (response.ok) {
    revalidateTag("get_mindmap_list");
    return { ok: true };
  }

  const text = await response.text().catch(() => "");
  return { ok: false, error: text || response.statusText };
};

export const fetchDeleteMindmap = async (id) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API}/${id}`, {
    method: "DELETE",
  });

  if (response.ok) {
    revalidateTag("get_mindmap_list");
    revalidateTag("fetch-middleware");
    revalidateTag(`get_mindmap_${id}`);
    return { ok: true };
  }

  const text = await response.text().catch(() => "");
  return { ok: false, error: text || response.statusText };
};

export const fetchSaveMindmap = async (body) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API}/${body.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      const text = await response.text().catch(() => "");
      return { ok: false, error: text || response.statusText };
    }

    revalidateTag(`get_mindmap_${body.id}`);
    revalidateTag("get_mindmap_list");
    revalidateTag("fetch-middleware");

    return { ok: true };
  } catch (e) {
    return { ok: false, error: e?.message || "Network error" };
  }
};
