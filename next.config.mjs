import path from "node:path";
import { fileURLToPath } from "node:url";

const appRoot = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  images: {
    qualities: [75, 95],
  },
  reactCompiler: true,
  turbopack: {
    root: appRoot,
  },
};

export default nextConfig;
