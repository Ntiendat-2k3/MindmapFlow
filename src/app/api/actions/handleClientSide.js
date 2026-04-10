"use server";

import { revalidateTag } from "next/cache";
import { getBaseUrl } from "@/app/utils/baseUrl";
import { cookies } from "next/headers";

async function getAuthHeaders() {
  const cookieStore = await cookies();
  return {
    "Content-Type": "application/json",
    Cookie: cookieStore.toString(),
  };
}

export const fetchAddMindmap = async (body) => {
  const headers = await getAuthHeaders();
  const response = await fetch(`${getBaseUrl()}${process.env.NEXT_PUBLIC_API}`, {
    method: "POST",
    headers,
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
  const headers = await getAuthHeaders();
  const response = await fetch(`${getBaseUrl()}${process.env.NEXT_PUBLIC_API}/${id}`, {
    method: "DELETE",
    headers,
  });

  if (response.ok) {
    revalidateTag("get_mindmap_list");
    revalidateTag(`get_mindmap_${id}`);
    return { ok: true };
  }

  const text = await response.text().catch(() => "");
  return { ok: false, error: text || response.statusText };
};

export const fetchSaveMindmap = async (body) => {
  try {
    const headers = await getAuthHeaders();
    const response = await fetch(`${getBaseUrl()}${process.env.NEXT_PUBLIC_API}/${body.id}`, {
      method: "PATCH",
      headers,
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      const text = await response.text().catch(() => "");
      return { ok: false, error: text || response.statusText };
    }

    revalidateTag(`get_mindmap_${body.id}`);
    revalidateTag("get_mindmap_list");

    return { ok: true };
  } catch (e) {
    return { ok: false, error: e?.message || "Network error" };
  }
};
