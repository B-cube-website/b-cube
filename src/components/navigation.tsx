"use client"; // 이 지시어를 추가해 클라이언트 컴포넌트로 지정합니다.

import Link from "next/link";
import logo from "../../public/logo.svg";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();

  const linkStyle = (href: string) =>
    pathname === href
      ? "font-Pretendard-Bold text-white"
      : "font-Pretendard-Bold text-[#4f5d8d]";

  return (
    <div className="relative z-50 flex flex-col w-full bg-[#06132D]">
      {/* z-index를 높게 설정 */}
      <div className="flex flex-row justify-between items-center p-2">
        <div>
          <Image src={logo} alt="logo" />
        </div>
        <nav>
          <ul className="flex flex-row gap-10">
            <li>
              <Link href="/" className={linkStyle("/")}>
                홈
              </Link>
            </li>
            <li>
              <Link href="/projects" className={linkStyle("/projects")}>
                프로젝트
              </Link>
            </li>
            <li>
              <Link href="/reviews" className={linkStyle("/reviews")}>
                후기
              </Link>
            </li>
            <li>
              <Link href="/recruit" className={linkStyle("/recruit")}>
                리크루팅
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      {/* 네비게이션 아래에 겹쳐서 배경 요소 추가 */}
      <div
        className="absolute top-full left-0 w-full h-[174px]"
        style={{
          background:
            "linear-gradient(180deg, #06142D 0%, rgba(6,20,45,0) 100%)",
        }}
      />
    </div>
  );
}
  