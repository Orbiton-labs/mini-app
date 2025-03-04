/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.dedust.io",
        port: "",
        pathname: "/images/**",
      },
      {
        protocol: "https",
        hostname: "xelene.me",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "i.ibb.co",
        port: "",
        pathname: "/**",
      },
    ],
    unoptimized: true,
  },
  // redirects: () => [
  //   {
  //     source: "/",
  //     destination: "/swap",
  //     permanent: true,
  //   },
  // ],
  reactStrictMode: false,
};

export default nextConfig;
