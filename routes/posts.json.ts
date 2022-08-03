import type { RequestHandler } from "./__types";

import { getPosts } from "./_posts";

// posts.json.js
export const GET: RequestHandler = async () => {
  return {
    body: await getPosts(),
  };
};
