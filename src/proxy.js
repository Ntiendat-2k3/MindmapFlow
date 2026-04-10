import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function proxy(req) {
  const pathname = req.nextUrl.pathname;
  const fullUrl = req.url;

  const homeUrl = new URL("/", fullUrl);
  const loginUrl = new URL("/login", fullUrl);

  const jwt = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
  });

  // Chặn page `/my-mindmap` (dashboard) khi chưa login
  if (pathname === "/my-mindmap" && !jwt) {
    return NextResponse.redirect(loginUrl);
  }

  // Redirect đã login ra khỏi trang login
  if (pathname.startsWith("/login")) {
    if (jwt) return NextResponse.redirect(homeUrl);
    return NextResponse.next();
  }

  // Check access khi vào mindmap chi tiết: /my-mindmap/:id
  if (
    pathname.startsWith("/my-mindmap/") &&
    pathname !== "/my-mindmap/"
  ) {
    const mindmapId = pathname.replace("/my-mindmap/", "");

    try {
      const response = await fetch(
        new URL(`${process.env.NEXT_PUBLIC_API}/${mindmapId}`, fullUrl).href,
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        },
      );

      if (!response.ok) {
        return NextResponse.rewrite(new URL("/404", fullUrl));
      }

      const data = await response.json();

      if (!data || !data.id) {
        return NextResponse.rewrite(new URL("/404", fullUrl));
      }

      // Nếu private → phải là owner
      if (!data.isAccessible) {
        const userEmail = (jwt?.email || jwt?.user?.email || "").toLowerCase();
        const ownerEmail = (data?.email || "").toLowerCase();

        if (!jwt || (ownerEmail && ownerEmail !== userEmail)) {
          return NextResponse.redirect(loginUrl);
        }
      }
    } catch {
      return NextResponse.next();
    }

    return NextResponse.next();
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
