import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "85ers (EightyFivers) | 映像制作ユニット",
  description:
    "誠実さと自由を、映像でデザインする。東京都目黒区を拠点に、After Effects・3DCG・VFXを駆使した映像制作を行う85ers (EightyFivers)。",
  keywords: ["映像制作", "85ers", "EightyFivers", "After Effects", "3DCG", "VFX", "東京", "目黒区"],
  openGraph: {
    title: "85ers (EightyFivers) | 映像制作ユニット",
    description: "誠実さと自由を、映像でデザインする。",
    type: "website",
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
