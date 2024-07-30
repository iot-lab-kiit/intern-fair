import { jwtDecode } from "jwt-decode";
import { NextResponse } from "next/server";

export async function middleware(request) {
  const session = request.cookies.get("user_session")?.value;
  if (!session) return NextResponse.redirect(new URL("/login", request.url));

  try {
    const payload = jwtDecode(session);
    const currentTime = Math.floor(Date.now() / 1000);

    if (payload.exp < currentTime)
      return NextResponse.redirect(new URL("/login", request.url));
    return NextResponse.next();
  } catch (error) {
    console.error(error);
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: ["/courses", "/community"],
};
