import adapter from "@sveltejs/adapter-auto";
import sveltePreprocess from "svelte-preprocess";
import { mdsvex } from "mdsvex";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  extensions: [".svelte", ".md"],

  preprocess: [
    sveltePreprocess(),
    mdsvex({
      extensions: [".md"],
      layout: {
        blog: "./routes/__layout-blog.svelte",
      },
    }),
  ], // preprocess(),

  kit: {
    adapter: adapter(),

    // Override http methods in the Todo forms
    // methodOverride: { allowed: ["PATCH", "DELETE"], },
    files: {
      assets: "static",
      // hooks: 'src/hooks',
      lib: "lib",
      // params: 'src/params',
      routes: "routes",
      // serviceWorker: 'src/service-worker',
      // template: 'src/app.html'
    },
  },
};

export default config;
