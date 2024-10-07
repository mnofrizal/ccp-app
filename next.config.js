/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  webpack: (config, { isServer }) => {
    // Tambahkan ini untuk logging
    console.log("Webpack build:", isServer ? "server" : "client");
    return config;
  },
};

module.exports = nextConfig;
