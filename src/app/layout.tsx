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
            zIndex: -1,
            backgroundColor: "#06132D",
          }}
        />
        {/* 투명한 그라디언트 배경 */}
        <div
          style={{
            position: "fixed",
            bottom: 0,
            left: 0,
            width: "100vw",
            height: "50vh",
            zIndex: 0,
            pointerEvents: "none",
            background:
              "linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(14, 47, 110, 0.8))",
          }}
        />
        <ClientWrapper>{children}</ClientWrapper>
      </body>
    </html>
  );
}
