/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  images: {
    domains: ['images-na.ssl-images-amazon.com'],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  basePath: '/stackline',
  output: 'export',
  reactStrictMode: true,
};

module.exports = nextConfig;
