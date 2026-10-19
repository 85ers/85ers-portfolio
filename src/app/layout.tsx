import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const title = "85ers｜見えない仕組みを可視化する映像制作";
const description =
  "機構・製品・サービスの解説モーションと3DCG。After Effects／Blender。";

export const metadata: Metadata = {
  metadataBase: new URL("https://85ers.net"),
  alternates: { canonical: "/" },
  title,
  description,
  keywords: ["映像制作", "85ers", "EightyFivers", "モーショングラフィックス", "3DCG", "After Effects", "Blender"],
  openGraph: {
    title,
    description,
    type: "website",
    url: "https://85ers.net",
    siteName: "85ers",
    locale: "ja_JP",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "見えない機構を、可視化する。包装機の熱シール機構の3DCG（85ers）",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
