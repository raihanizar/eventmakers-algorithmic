import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import * as jose from "jose";

export async function middleware(request) {
  console.log("ini dari middleware");
  const token = cookies().get("token")?.value;
  const secretKey = process.env.SECRET_KEY;
  const secret = new TextEncoder().encode(secretKey);

  if (!token) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  try {
    await jose.jwtVerify(token, secret);
    return NextResponse.next();
  } catch (error) {
    console.log(error);
    return NextResponse.redirect(new URL("/", request.url));
  }
}

// mencoba cari cara supaya ga reload terus menurus di events/form tapi belum nemu caranya
export const config = { matcher: ["/events/:path*"] };
