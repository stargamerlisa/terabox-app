/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
  basePath: '/terabox',
  assetPrefix: '/terabox/',
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "data.4funbox.com",
        port: "",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "data.terabox.app",
        port: "",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};
