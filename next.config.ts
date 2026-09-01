import type { NextConfig } from "next";
import { withSentryConfig } from "@sentry/nextjs";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Variantes en singular que aparecen en anuncios (Meta Ads) y enlaces externos.
      // La query string (fbclid, utm_*) se conserva automáticamente.
      {
        source: '/software-para-pasteleria',
        destination: '/software-para-pastelerias',
        permanent: true,
      },
      {
        source: '/software-para-panaderia',
        destination: '/software-para-panaderias',
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ik.imagekit.io",
        pathname: "/cakely/**",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
};

export default withSentryConfig(nextConfig, {
  org: "cakely",
  project: "cakely-landing",
  authToken: process.env.SENTRY_AUTH_TOKEN,
  silent: !process.env.CI,
  widenClientFileUpload: true,
  tunnelRoute: "/monitoring",
  sourcemaps: { deleteSourcemapsAfterUpload: true },
  disableLogger: true,
});
