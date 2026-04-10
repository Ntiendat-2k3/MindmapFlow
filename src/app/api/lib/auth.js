import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import options from "@/app/api/auth/[...nextauth]/options";

/**
 * Lấy session hiện tại từ request.
 * Trả về session nếu đã đăng nhập, null nếu chưa.
 */
export async function getSession() {
  return await getServerSession(options);
}

/**
 * Middleware helper: kiểm tra user đã đăng nhập chưa.
 * Trả về session nếu OK, hoặc Response 401 nếu chưa login.
 */
export async function requireAuth() {
  const session = await getSession();
  if (!session?.user?.email) {
    return {
      session: null,
      error: NextResponse.json(
        { error: "Unauthorized — Vui lòng đăng nhập" },
        { status: 401 }
      ),
    };
  }
  return { session, error: null };
}

/**
 * Middleware helper: kiểm tra user có phải owner của mindmap không.
 * @param {string} ownerEmail - Email chủ sở hữu mindmap
 */
export async function requireOwnership(ownerEmail) {
  const { session, error } = await requireAuth();
  if (error) return { session: null, error };

  const userEmail = session.user.email.toLowerCase();
  const owner = (ownerEmail || "").toLowerCase();

  if (owner && owner !== userEmail) {
    return {
      session,
      error: NextResponse.json(
        { error: "Forbidden — Bạn không phải chủ sở hữu" },
        { status: 403 }
      ),
    };
  }

  return { session, error: null };
}
