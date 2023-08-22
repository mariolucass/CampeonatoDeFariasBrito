/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["live.staticflickr.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
