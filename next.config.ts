import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Cloudflare Pages 向けの静的出力（サーバー機能なし。out/ に出力）
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
