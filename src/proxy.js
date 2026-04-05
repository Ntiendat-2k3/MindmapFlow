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

  // ✅ chặn sớm page `/my-mindmap` (dashboard danh sách) khi chưa login
  if (pathname === "/my-mindmap" && !jwt) {
    return NextResponse.redirect(loginUrl);
  }

  if (pathname.startsWith("/login")) {
    if (jwt) return NextResponse.redirect(homeUrl);
    return NextResponse.next();
  }

  // check access khi vào mindmap chi tiết: /my-mindmap/:id
  if (
    pathname.startsWith("/my-mindmap") &&
    pathname.replace("/my-mindmap", "").length > 1
  ) {
    const mindmapId = pathname.replace("/my-mindmap/", "");

    const response = await fetch(
      new URL(`${process.env.NEXT_PUBLIC_API}/${mindmapId}`, fullUrl).href,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        next: { tags: ["fetch-middleware"] },
      },
    );

    const data = await response.json();

    if (Object.keys(data).length === 0) {
      return NextResponse.rewrite(new URL("/404", fullUrl));
    }

    const userEmail = (jwt?.email || jwt?.user?.email || "").toLowerCase();
    const ownerEmail = (data?.email || "").toLowerCase();

    // private + không có thẻ, hoặc không phải owner -> đá về home
    if (!data.isAccessible) {
      if (!jwt || (ownerEmail && ownerEmail !== userEmail)) {
        return NextResponse.redirect(loginUrl); // Require login if private
      }
    }

    return NextResponse.next();
  }

  return NextResponse.next();
};

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
