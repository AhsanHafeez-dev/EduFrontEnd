import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['res.cloudinary.com'],
  },
  allowedDevOrigins: [
     'http://192.168.29.1',
      'http://192.168.29.1:3000',
      'http://localhost:3000',
      'http://127.0.0.1:3000'
  ]
};

export default nextConfig;
