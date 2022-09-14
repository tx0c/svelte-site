<script context="module" lang="ts">
  export const prerender = true;

  export const load = async ({ fetch }) => {
    // Runs before the component is created
    const posts = await fetch("/posts.json");
    const allPosts = await posts.json();

    // console.log("load allPosts:", allPosts);
    return {
      props: {
        posts: allPosts, // .concat(staticPosts),
      },
    };
  };
</script>

<script lang="ts">
  export let posts;

  $: [firstPost, ...restPosts] = posts;
</script>

<div class="container">
  <article class="post">
    <div>
      <h1>Blog</h1>
      <div class="first">
        <figure><img src={firstPost.imgCover} /></figure>
        <a href={firstPost.path}>
          <div>
            <h2 class="title">{firstPost.title}</h2>
            <div class="subtitle">
              <span>{firstPost.date}</span>
              ・
              <span>{firstPost.author}</span>
            </div>
            <p class="subtitle">{firstPost.summary}</p>
          </div>
        </a>
      </div>
    </div>
    <!-- <pre>{JSON.stringify(firstPost, null, 2)}</pre> -->
  </article>

  <div class="container">
    <header class="d-flex justify-content-between align-items-center flex-column flex-md-row">
      <h2 class="d-inline-block align-self-start align-self-md-center" />
      <div class="buttons align-self-end align-self-md-center">
        <div class="d-flex flex-column">
          <a class="btn arrow"><span>Read More</span><i class="icon" /></a>
        </div>
      </div>
    </header>
  </div>

  <div class="more-posts">
    {#each restPosts as post, i}
      <div class="col-12 col-md-6">
        <a class="btn" href={post.path || post.link} target={post.path ? null : "_blank"}>
          <div class="digest">
            <div>
              <div class="title">
                <h3>{post.title}</h3>
              </div>
              <div class="text">
                <p>Author: {post.author}</p>
                <p style="white-space: pre-wrap;">{post.summary}</p>
              </div>
            </div>
          </div></a
        >
      </div>
    {/each}
  </div>
</div>

<style>
  article.post::before {
    display: block;
    content: "";
    padding-top: 6rem;
  }

  article.post div {
    margin: 0 auto;
    padding: 1rem 0.5rem;
    max-width: 64rem;
  }

  img {
    max-width: 100%;
    object-fit: contain;
    border-radius: 1rem;
  }

  .first {
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 1rem;
  }

  .first .title {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    /* Background grey */

    color: #f7f7f7;
  }

  .subtitle {
    color: #b3b3b3;
  }

  .more-posts {
    display: flex;
  }
</style>
