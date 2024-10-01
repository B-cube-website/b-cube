import { NextRequest, NextResponse } from "next/server";
import { Ratelimit } from "@upstash/ratelimit";
import { kv } from "@vercel/kv";

const ratelimit = new Ratelimit({
  redis: kv,
  limiter: Ratelimit.slidingWindow(7, "10 s"),
});

export default async function middleware(req: NextRequest) {
  const ip = req.ip ?? "127.0.0.1"; // 클라이언트 IP
  const { success } = await ratelimit.limit(ip);

  if (!success) {
    return new NextResponse("Too many requests", { status: 429 });
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/api/:path*", // /api로 시작하는 모든 경로에 적용
};
