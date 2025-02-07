import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/core/i18n/i18n.ts");

/** @type {import('next').NextConfig} */
const nextConfig = {
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
    ],
  },
  redirects: () => ([
    {
      source: "/",
      destination: "/swap",
      permanent: true,
    },
  ]),
};

export default withNextIntl(nextConfig);
