import { getBaseUrl } from "@/app/utils/baseUrl";
import { cookies } from "next/headers";

/**
 * Forward cookies cho server-side fetch
 * (Server Components không tự gửi cookies khi fetch API routes cùng server)
 */
async function getAuthHeaders() {
  const cookieStore = await cookies();
  return {
    "Content-Type": "application/json",
    Cookie: cookieStore.toString(),
  };
}

export const fetchMindmapList = async () => {
  try {
    const headers = await getAuthHeaders();
    const response = await fetch(
      `${getBaseUrl()}${process.env.NEXT_PUBLIC_API}`,
      {
        headers,
        next: { tags: ["get_mindmap_list"] },
      },
    );

    if (!response.ok) return null;
    return response.json();
  } catch (e) {
    return null;
  }
};

export const fetchMindmap = async (id) => {
  try {
    const headers = await getAuthHeaders();
    const response = await fetch(`${getBaseUrl()}${process.env.NEXT_PUBLIC_API}/${id}`, {
      headers,
      next: { tags: [`get_mindmap_${id}`] },
    });

    if (!response.ok) return null;
    return response.json();
  } catch (e) {
    return null;
  }
};
