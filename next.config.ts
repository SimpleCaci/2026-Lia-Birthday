import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isGitHubPages ? "/2026-Lia-Birthday" : "",
  assetPrefix: isGitHubPages ? "/2026-Lia-Birthday/" : "",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
