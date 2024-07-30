import { NextResponse } from "next/server";
import { clientToken } from "./config/directus";
import { readItems } from "@directus/sdk";

export async function middleware(request) {
  const session = request.cookies.get("user_session");
  if (!session) {
    try {
      await clientToken(session).request(readItems("Auth"));
    } finally {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }
}

export const config = {
  matcher: ["/courses", "/community"],
};
