/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.guestsnapper.com",
        pathname: "/wedding-gallery-media/lemonnier/**",
      },
    ],
  },
};

export default nextConfig;
