/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        // Pattern for GitHub avatars

        protocol: "https",

        hostname: "avatars.githubusercontent.com",

        port: "", // Leave empty for default port

        pathname: "/**", // Allow all paths
      },
    ],
  },
};

export default nextConfig;
