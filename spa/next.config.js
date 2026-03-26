import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      new URL('http://localhost:8080/magnoliaAuthor/dam/**'),
      new URL('http://localhost:8080/magnoliaPublic/dam/**')
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  outputFileTracingRoot: path.join(__dirname, '..'),
};

export default nextConfig;
