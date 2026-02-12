import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "포트폴리오 - 홍길동",
  description: "제조 혁신을 위한 기술 역량 소개서",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="font-pretendard antialiased">{children}</body>
    </html>
  );
}
