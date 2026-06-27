import { NextResponse, type NextRequest } from "next/server";
import { getIronSession } from "iron-session";
import { getSessionOptions, type AdminSession } from "@/lib/admin/session";

export async function middleware(request: NextRequest) {
  const response = NextResponse.next();
  const session = await getIronSession<AdminSession>(
    request,
    response,
    getSessionOptions(),
  );

  if (!session.isLoggedIn) {
    return NextResponse.redirect(new URL("/admin", request.url));
  }

  return response;
}

export const config = {
  matcher: ["/admin/dashboard/:path*"],
};
