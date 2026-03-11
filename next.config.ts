import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Tailwind CSS (PostCSS) との Turbopack 不整合を回避し、Webpack ビルドを使用 */
  images: {
    remotePatterns: [
      {
        // microCMS の画像配信ドメイン
        protocol: 'https',
        hostname: 'images.microcms-assets.io',
        port: '',
        pathname: '/assets/**',
      },
    ],
  },
};

export default nextConfig;
