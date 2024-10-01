import { NextRequest, NextResponse } from "next/server";
import { kv } from "@vercel/kv"; // Vercel KV 사용

const LIMIT = 5; // 10초 동안 허용할 최대 요청 수
const WINDOW = 10 * 1000; // 10초

export async function GET(req: NextRequest) {
  // IP 주소 가져오기
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0] ||
    req.headers.get("x-real-ip") ||
    req.ip ||
    "127.0.0.1";

  // 현재 요청 수를 숫자로 변환
  const current = Number(await kv.get(ip)) || 0;

  // 요청 수가 제한을 초과했는지 확인
  if (current >= LIMIT) {
    const resetTime = Math.ceil((await kv.ttl(ip)) / 1000); // 남은 시간 계산 (초 단위)
    return NextResponse.json(
      {
        error: "Too many requests, please try again later.",
      },
      {
        status: 429,
        headers: {
          "X-RateLimit-Limit": LIMIT.toString(),
          "X-RateLimit-Remaining": "0",
          "X-RateLimit-Reset": resetTime.toString(),
        },
      }
    );
  }

  // 요청 수 증가 및 TTL 설정
  await kv.incr(ip); // 요청 수 증가
  await kv.expire(ip, WINDOW); // 만료 시간 설정 (10초)

  const remaining = LIMIT - (current + 1); // 남은 요청 횟수

  return NextResponse.json(
    { message: "Request successful" },
    {
      headers: {
        "X-RateLimit-Limit": LIMIT.toString(),
        "X-RateLimit-Remaining": remaining.toString(),
        "X-RateLimit-Reset": (WINDOW / 1000).toString(),
      },
    }
  );
}
