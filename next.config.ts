import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  typescript: {
    // ignoreBuildErrors: true,
  },
};
# 请检查项目根目录下的 next.config.js 文件
# 确保包含以下基础配置：
module.exports = {
  output: 'export', // 必须添加此项
  trailingSlash: true, // 避免路由问题
  images: {
    unoptimized: true // Vercel 需要此项
  }
}
export default nextConfig;
