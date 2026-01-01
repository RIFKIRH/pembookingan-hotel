import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/auth";

const protectedRoutes = ["/myreservation", "/checkout", "/admin"];

export async function middleware(request: NextRequest) {
  const session = await auth();
  const isLoggedIn = !!session?.user;
  const role = session?.user?.role;
  const pathname = request.nextUrl.pathname;

  // 1️⃣ Belum login → redirect ke signin
  if (
    !isLoggedIn &&
    protectedRoutes.some(route => pathname.startsWith(route))
  ) {
    return NextResponse.redirect(new URL("/signin", request.url));
  }

  // 2️⃣ Sudah login tapi buka signin → arahkan ke home
  if (isLoggedIn && pathname.startsWith("/signin")) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  // 3️⃣ Non-admin akses /admin → ditolak
  if (
    isLoggedIn &&
    role !== "admin" &&
    pathname.startsWith("/admin")
  ) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
