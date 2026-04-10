import { getMindmapList, getMindmapById } from "@/app/api/lib/data";
import { unstable_cache } from "next/cache";

/**
 * Lấy danh sách mindmap (cached, revalidate khi có thay đổi)
 */
export const fetchMindmapList = async () => {
  try {
    return await getMindmapList();
  } catch (e) {
    return null;
  }
};

/**
 * Lấy chi tiết mindmap theo ID (cached, revalidate khi có thay đổi)
 */
export const fetchMindmap = async (id) => {
  try {
    return await getMindmapById(id);
  } catch (e) {
    return null;
  }
};
