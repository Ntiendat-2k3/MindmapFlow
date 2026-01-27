export const fetchMindmapList = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API}?_sort=created_at&_order=desc`,
      {
        next: {
          tags: ["get_mindmap_list"],
        },
      },
    );

    return response.json();
  } catch (e) {
    return "error";
  }
};

export const fetchMindmap = async (id) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API}/${id}`, {
      next: {
        // cache theo từng mindmap để tránh invalidate "all mindmaps" không cần thiết
        tags: [`get_mindmap_${id}`],
      },
    });

    // ❗️Không revalidate ở đây (fetch). Chỉ revalidate sau khi PATCH/POST/DELETE.
    return response.json();
  } catch (e) {
    return "error";
  }
};
