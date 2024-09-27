import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientWrapper from "@/components/ClientWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "B-cube",
  description: "아주대학교 경영인텔리전스학과 소학회",
  metadataBase: new URL("https://b-cube-three.vercel.app/"),
  openGraph: {
    title: "B-cube",
    description: "아주대학교 경영인텔리전스학과 소학회",
    images: "/opengraph-image.png",
    url: "https://b-cube-three.vercel.app",
    siteName: "B-cube",
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const initialMobileState = false; // 기본값 설정

  return (
    <html lang="en">
      <body className={inter.className}>
        {/* 고정된 배경색 */}
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            zIndex: -2,
            backgroundColor: "#06132D",
          }}
        />
        {/* SVG 파일로 대체된 투명한 그라디언트 배경 */}
        <div
          style={{
            position: "fixed",
            display: "grid", // 그리드 사용
            placeItems: "center", // 중앙 배치
            width: "100vw",
            height: "100vh",
            zIndex: -1,
            pointerEvents: "none",
            backgroundImage: 'url("/addLayout.svg")',
            backgroundSize: "cover", // 비율을 유지하며 화면을 덮음
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        />

        <ClientWrapper initialMobileState={initialMobileState}>
          {children}
        </ClientWrapper>
      </body>
    </html>
  );
}
