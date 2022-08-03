import { fileURLToPath, URL } from "url";

import { sveltekit } from "@sveltejs/kit/vite";

/** @type {import('vite').UserConfig} */
const config = {
  plugins: [sveltekit()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  server: {
    fs: {
      // Allow serving files from 'blog' from project root
      allow: ["blog"],
    },
  },
};

export default config;
