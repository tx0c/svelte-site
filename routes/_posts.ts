export async function getPosts() {
  const allPostFiles = import.meta.glob("./blog/*.md");
  const iterablePostFiles = Object.entries(allPostFiles);

  const allPosts = await Promise.all(
    iterablePostFiles.map(async ([path, resolver]) => {
      const { metadata } = await resolver();
      const postPath = path.slice(1, -3);

      return {
        ...metadata,
        path: postPath,
      };
    })
  );

  // console.log('allPosts:', allPosts);

  const sortedPosts = allPosts.sort((a, b) => {
    return Date.parse(b.date) - Date.parse(a.date);
  });

  return sortedPosts;
}
