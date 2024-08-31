/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "directus.iotkiit.in",
      },
    ],
  },
  output: "standalone"
};

export default nextConfig;
