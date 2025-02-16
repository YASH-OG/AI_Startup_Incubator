/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config) => {
    // Required for Three.js
    config.externals.push({
      'sharp': 'commonjs sharp',
      'canvas': 'commonjs canvas'
    });
    return config;
  },
}

module.exports = nextConfig
