import type { Metadata } from "next";
import { Noto_Sans_Thai } from "next/font/google";
import "./globals.css";
import { brand } from "@/lib/mock-data";

const notoSansThai = Noto_Sans_Thai({
  subsets: ["latin", "thai"],
  variable: "--font-noto-thai",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: `${brand.nameTh} · ${brand.nameEn} (Demo)`,
    template: `%s · ${brand.nameTh}`,
  },
  description:
    "Clinic Demo — สาธิตคลินิกทันตกรรมพรีเมียม · รากเทียม วีเนียร์ จัดฟัน ดิจิทัลสไมล์ดีไซน์",
  robots: { index: false, follow: false },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" className={`${notoSansThai.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans text-ink bg-canvas">{children}</body>
    </html>
  );
}
