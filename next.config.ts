import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Placeholder gallery assets are SVGs during scaffolding; once real
    // photos are uploaded to Supabase Storage, add that hostname below
    // and this SVG allowance can be removed.
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.supabase.co",
        pathname: "/storage/v1/object/public/**",
      },
    ],
  },
};

export default nextConfig;
