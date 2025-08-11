import { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/flukes",
  assetPrefix: "/flukes",
  trailingSlash: true, // Helps with subpath routing
  experimental: {
     serverActions: {
	allowedOrigins: [
                'bigpennysocial.co.uk',
                'bookings.designmynight.com'
            ],
  }
 },
 images: {
  unoptimized: true,
   remotePatterns: [
    {
      protocol: 'http',
      hostname: '134.209.17.172',
    },
   ]
 }
};

export default nextConfig;

