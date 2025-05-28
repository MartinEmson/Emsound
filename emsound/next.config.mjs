/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'emsound.local',
      },
      {
        protocol: 'https',
        hostname: 'emsound.local',
      },
      // For development and testing
      {
        protocol: 'http',
        hostname: 'localhost',
      }
    ],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  async rewrites() {
    return [
      {
        source: '/wp-json/:path*',
        destination: `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-json/:path*`,
      },
    ];
  },
};

export default nextConfig;