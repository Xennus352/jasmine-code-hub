import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

// Middleware to check authentication
export async function middleware(req) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  // If token is not found, redirect the user to the sign-in page
  if (!token) {
    return NextResponse.redirect(new URL("/hero", req.url));
  }
  // Set the __vercel_live_token cookie
  const response = NextResponse.next();
  response.cookies.set("__vercel_live_token", token, {
    httpOnly: true,
    sameSite: "none",
    secure: process.env.NODE_ENV === "production",
    path: "/",
  });

  // Return the modified response
  return response;
}

// Config to specify which routes this middleware applies to
export const config = {
  matcher: ["/", "/profile", "/blog:path*"], // Paths that need authentication
};
