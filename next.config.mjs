// next.config.mjs
import webpack from 'webpack';

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
  output: "standalone",
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.module.rules.push({
        test: /\.js$/,
        include: /node_modules\/undici/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['next/babel'],
          },
        },
      });
    }
    return config;
  },
};

export default nextConfig;
