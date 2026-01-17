import type { NextConfig } from "next";
import { createVanillaExtractPlugin } from "@vanilla-extract/next-plugin";

const withVanillaExtract = createVanillaExtractPlugin();

const nextConfig: NextConfig = {
  /* config options here */
  // Explicitly disable Turbopack for vanilla-extract compatibility
  experimental: {
    turbo: undefined,
  },
};

export default withVanillaExtract(nextConfig);
