"use client";

const API_BASE = process.env.NEXT_PUBLIC_API;

export const fetchSaveMindmap = async (body) => {
  try {
    if (!API_BASE)
      return { ok: false, status: 0, error: "Missing NEXT_PUBLIC_API" };

    const response = await fetch(`${API_BASE}/${body.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      const text = await response.text().catch(() => "");
      return {
        ok: false,
        status: response.status,
        error: text || response.statusText,
      };
    }

    return { ok: true, status: response.status };
  } catch (e) {
    return { ok: false, status: 0, error: e?.message || "Network error" };
  }
};
