const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: '.next', // Use o padrão do Next.js
  output: process.env.NEXT_OUTPUT_MODE || 'standalone', // ou remova se não usar
    eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  images: { unoptimized: true },
};

module.exports = nextConfig;
